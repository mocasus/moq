require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

// Configuration
const PORT = process.env.PORT || 3000;
const CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
const REDIRECT_URI = process.env.DISCORD_REDIRECT_URI || `http://localhost:${PORT}/callback`;

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Routes

// Home Page
app.get('/', (req, res) => {
    res.render('index');
});

// Login - Redirect to Discord OAuth2
app.get('/login', (req, res) => {
    if (!CLIENT_ID || !REDIRECT_URI) {
        return res.status(500).send("Server configuration error: Missing Discord credentials.");
    }

    // Scope 'webhook.incoming' allows webhook creation
    const scopes = ['webhook.incoming'];
    const url = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=${scopes.join('%20')}`;

    res.redirect(url);
});

// Callback - Handle Discord response
app.get('/callback', async (req, res) => {
    const { code } = req.query;

    if (!code) {
        return res.redirect('/');
    }

    try {
        const params = new URLSearchParams();
        params.append('client_id', CLIENT_ID);
        params.append('client_secret', CLIENT_SECRET);
        params.append('grant_type', 'authorization_code');
        params.append('code', code);
        params.append('redirect_uri', REDIRECT_URI);

        const response = await axios.post('https://discord.com/api/oauth2/token', params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const data = response.data;

        // The webhook object is returned in the token response when scope is 'webhook.incoming'
        const webhook = data.webhook;

        res.render('result', { webhook });
    } catch (error) {
        console.error('Error during token exchange:', error.response ? error.response.data : error.message);
        res.status(500).send('Authentication failed or Cancelled.');
    }
});

// Start Server
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
        console.log(`Make sure to set DISCORD_CLIENT_ID and DISCORD_CLIENT_SECRET in .env`);
    });
}

// Export for Vercel
module.exports = app;
