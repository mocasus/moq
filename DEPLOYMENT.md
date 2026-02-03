# Panduan Deployment HookMoq ke Render

Karena akun Render Anda memerlukan informasi pembayaran untuk deployment via API, berikut adalah langkah-langkah mudah untuk men-deploy aplikasi ini secara manual melalui Dashboard Render. Gratis!

## Langkah 1: Persiapan Git
Pastikan kode ini sudah ada di repository GitHub Anda (atau GitLab/Bitbucket).
1. Push kode yang sudah dibuat ke repository Anda:
   - Branch: `hookmoq-initial-setup` (atau merge ke `main`).

## Langkah 2: Buat Web Service di Render
1. Buka [Dashboard Render](https://dashboard.render.com/).
2. Klik tombol **New +** dan pilih **Web Service**.
3. Hubungkan akun GitHub Anda jika belum.
4. Cari dan pilih repository `moq`.
5. Konfigurasi service:
   - **Name**: `hookmoq-discord` (atau nama lain yang Anda suka).
   - **Region**: Pilih yang terdekat (misal: Singapore).
   - **Branch**: Pilih `hookmoq-initial-setup` (atau branch tempat kode berada).
   - **Runtime**: `Node`.
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Pilih **Free**.

## Langkah 3: Konfigurasi Environment Variables
Di halaman pembuatan service (atau di tab "Environment" setelah dibuat), tambahkan variabel berikut:

| Key | Value | Keterangan |
|-----|-------|------------|
| `DISCORD_CLIENT_ID` | (Dapatkan dari Discord Dev Portal) | ID Aplikasi Discord Anda |
| `DISCORD_CLIENT_SECRET` | (Dapatkan dari Discord Dev Portal) | Secret Aplikasi Discord Anda |
| `DISCORD_REDIRECT_URI` | `https://<nama-service-anda>.onrender.com/callback` | Sesuaikan dengan URL Render Anda |

*Catatan: URL Render biasanya berbentuk `https://nama-service.onrender.com`. Pastikan Anda menggunakannya di `DISCORD_REDIRECT_URI`.*

## Langkah 4: Konfigurasi Discord Developer Portal
1. Buka [Discord Developer Portal](https://discord.com/developers/applications).
2. Pilih aplikasi Anda (atau buat baru).
3. Masuk ke menu **OAuth2**.
4. Di bagian **Redirects**, tambahkan URL callback Render Anda.
   - Contoh: `https://hookmoq-discord.onrender.com/callback`
   - **PENTING**: URL ini harus SAMA PERSIS dengan yang ada di Environment Variable `DISCORD_REDIRECT_URI`.
5. Simpan perubahan ("Save Changes").

## Langkah 5: Selesai!
- Tunggu proses build di Render selesai (biasanya beberapa menit).
- Jika berhasil, buka URL website Anda.
- Coba login dengan Discord dan buat webhook!

---

## Troubleshooting
- **Error "Redirect URI mismatch"**: Pastikan URL di `DISCORD_REDIRECT_URI` (Render) dan di menu **OAuth2 > Redirects** (Discord Portal) sama persis (termasuk http/https dan garis miring di akhir jika ada).
- **Aplikasi Crash**: Cek tab **Logs** di Render untuk melihat pesan error. Biasanya karena variabel environment belum diset.
