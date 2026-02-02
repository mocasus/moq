# HookMoq - Webhook Discord Generator

Sebuah website sederhana dengan nuansa alam yang menenangkan untuk membuat Webhook Discord secara otomatis.

## Fitur
- **Otomatis**: Membuat webhook tanpa harus masuk ke pengaturan channel Discord secara manual.
- **Aman**: Menggunakan autentikasi resmi Discord OAuth2.
- **Menenangkan**: Tampilan hijau daun dengan opsi suara latar alam.

## Persyaratan
- Node.js (v14 atau lebih baru)
- Akun Discord & Aplikasi Discord (Developer Portal)

## Cara Instalasi

1. **Clone repository ini:**
   ```bash
   git clone https://github.com/username/hookmoq.git
   cd hookmoq
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Konfigurasi Discord App:**
   - Buka [Discord Developer Portal](https://discord.com/developers/applications).
   - Buat aplikasi baru ("New Application").
   - Masuk ke menu **OAuth2**.
   - Tambahkan **Redirects** (Redirect URI):
     - Untuk local: `http://localhost:3000/callback`
     - Untuk production: `https://domain-anda.com/callback`
   - Salin **Client ID** dan **Client Secret** (jangan lupa reset secret jika perlu).

4. **Konfigurasi Environment:**
   - Salin file `.env.example` menjadi `.env`:
     ```bash
     cp .env.example .env
     ```
   - Isi `.env` dengan Client ID dan Client Secret yang didapat tadi.

5. **Setup Audio (Opsional):**
   - File suara latar default diset ke `public/audio/nature.mp3`.
   - Karena alasan hak cipta, file ini **kosong/placeholder**.
   - Silakan unduh file mp3 suara alam (bebas royalti) dan simpan sebagai `public/audio/nature.mp3` agar fitur suara bekerja.

## Menjalankan Aplikasi

```bash
npm start
```
Buka browser dan akses `http://localhost:3000`.

## Lisensi
MIT
