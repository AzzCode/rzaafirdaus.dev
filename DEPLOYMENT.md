# Deployment ke Vercel

Panduan ini digunakan setelah Sprint 6 berhasil dijalankan, di-commit, dan
di-push ke branch `main` repository GitHub.

## 1. Persiapan

Pastikan pemeriksaan lokal berhasil:

```powershell
npm run lint
npm run build
git status
```

`git status` harus menampilkan `working tree clean` setelah commit terakhir.

## 2. Hubungkan repository

1. Masuk ke Vercel menggunakan akun yang akan menjadi pemilik website.
2. Pilih **Add New → Project**.
3. Import repository `AzzCode/rzaafirdaus.dev`.
4. Pastikan framework terdeteksi sebagai **Next.js**.
5. Gunakan root directory repository dan konfigurasi build bawaan.
6. Project ini tidak membutuhkan environment variable.
7. Jalankan deployment.

Setelah terhubung, push berikutnya ke `main` akan menghasilkan deployment
production baru. Pull request akan memperoleh deployment terpisah untuk
peninjauan sebelum digabungkan.

## 3. Hubungkan domain

Setelah deployment awal berhasil:

1. Buka **Project Settings → Domains**.
2. Tambahkan `rzaafirdaus.dev`.
3. Tambahkan juga `www.rzaafirdaus.dev` jika ingin memakai versi `www`.
4. Ikuti nilai DNS yang ditampilkan Vercel pada penyedia domain.
5. Tentukan salah satu domain sebagai primary domain agar pengalihan konsisten.

Jangan menyalin nilai DNS dari panduan umum. Gunakan nilai yang muncul pada
dashboard project karena nilai tersebut adalah sumber yang berlaku untuk
project dan akun terkait.

## 4. Verifikasi setelah online

Periksa route berikut menggunakan domain final:

- `/`
- `/projects`
- `/research`
- `/experience`
- `/certificates`
- `/resume`
- `/contact`
- `/sitemap.xml`
- `/robots.txt`
- `/manifest.webmanifest`
- `/opengraph-image`

Pastikan tombol email, GitHub, LinkedIn, Instagram, Download CV, PDF, dan bukti
Google Drive dapat dibuka.

## 5. Hak edit

Pengunjung website hanya dapat melihat konten. Perubahan website hanya dapat
dilakukan oleh akun yang memiliki akses tulis ke repository GitHub dan akses ke
project Vercel.

Untuk workflow yang lebih aman:

- Batasi collaborator repository hanya kepada orang yang dipercaya.
- Aktifkan two-factor authentication pada GitHub dan Vercel.
- Gunakan pull request sebelum perubahan besar masuk ke `main`.
- Periksa hasil workflow **Code quality** sebelum merge.

## 6. Pemeriksaan SEO

Setelah domain aktif:

1. Pastikan `lib/seo.ts` menggunakan domain produksi yang benar.
2. Daftarkan `/sitemap.xml` pada Google Search Console.
3. Uji structured data dengan Rich Results Test atau Schema Markup Validator.
4. Uji social preview menggunakan URL production, bukan `localhost`.
