# Panduan Deployment HookMoq ke Vercel (Gratis & Otomatis)

Selain Render, Anda bisa menggunakan **Vercel** yang memiliki tier gratis yang sangat baik dan integrasi GitHub yang mudah.

## Langkah 1: Persiapan
1. Pastikan Anda punya akun [Vercel](https://vercel.com/) (Login dengan GitHub lebih mudah).
2. Pastikan kode sudah di-push ke GitHub.

## Langkah 2: Buat Project Baru di Vercel
1. Buka Dashboard Vercel dan klik **Add New...** > **Project**.
2. Pilih repository `hookmoq` (atau nama repo Anda) dan klik **Import**.

## Langkah 3: Konfigurasi Project
1. Di halaman "Configure Project", Vercel biasanya otomatis mendeteksi framework (Other/Node.js).
2. **Environment Variables**:
   Klik dropdown "Environment Variables" dan masukkan data berikut:

   | Key | Value |
   |-----|-------|
   | `DISCORD_CLIENT_ID` | (Dari Discord Developer Portal) |
   | `DISCORD_CLIENT_SECRET` | (Dari Discord Developer Portal) |
   | `DISCORD_REDIRECT_URI` | `https://<nama-project-anda>.vercel.app/callback` |

   *Catatan: Saat pertama kali deploy, Anda mungkin belum tahu URL pastinya (misal: `hookmoq-alpha.vercel.app`). Anda bisa isi sembarang dulu, lalu update nanti setelah deploy pertama selesai dan Anda dapat URL resminya.*

3. Klik **Deploy**.

## Langkah 4: Update Konfigurasi Discord
1. Setelah deployment sukses, Vercel akan memberikan domain (misal: `https://hookmoq-xyz.vercel.app`).
2. Masuk ke **Settings** > **Environment Variables** di Vercel jika URL yang Anda masukkan tadi salah, lalu redeploy.
3. Buka **Discord Developer Portal** > Aplikasi Anda > **OAuth2**.
4. Update **Redirects** dengan URL Vercel yang baru:
   `https://<domain-vercel-anda>/callback`
5. Simpan perubahan di Discord.

## Selesai
Website Anda sudah online dan bisa digunakan!
