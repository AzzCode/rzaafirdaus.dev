# Sprint 5 — Contact, Online Resume, dan SEO

Sprint ini bersifat kumulatif dan sudah mencakup seluruh pekerjaan Sprint 1–4.

## Yang ditambahkan

- Section contact pada homepage.
- Halaman `/contact` dengan email dan professional links.
- Halaman `/resume` yang mengambil isi dari data project, research, experience,
  leadership, dan skills.
- Metadata unik dan canonical URL untuk setiap halaman.
- Dynamic Open Graph image 1200 × 630 dan Twitter Card.
- Structured data `Person` dan `WebSite`.
- Route `/sitemap.xml` dan `/robots.txt`.

Tidak ada dependency npm baru pada sprint ini.

## Cara menerapkan di VS Code

Pastikan perubahan sebelumnya sudah di-commit dan `git status` bersih.

1. Ekstrak ZIP Sprint 5 langsung ke folder project
   `C:\PROJEK PORTO\rzaafirdaus.dev`.
2. Pilih **Replace/Overwrite** ketika Windows meminta konfirmasi.
3. Karena `package.json` dan `package-lock.json` tidak berubah, tidak perlu
   menjalankan `npm install`.
4. Jalankan:

```powershell
npm run dev
```

Periksa halaman:

- `http://localhost:3000`
- `http://localhost:3000/contact`
- `http://localhost:3000/resume`
- `http://localhost:3000/sitemap.xml`
- `http://localhost:3000/robots.txt`

Setelah tampilan sesuai, hentikan server dengan `Ctrl + C`, lalu jalankan:

```powershell
npm run lint
npm run build
```

Jika keduanya berhasil:

```powershell
git add .
git commit -m "feat: add contact resume and SEO foundation"
git push origin main
```

## Konfigurasi domain

Domain produksi tersimpan di `lib/seo.ts`:

```ts
url: "https://rzaafirdaus.dev"
```

Jika domain final berbeda, ubah nilai tersebut sebelum deployment agar
canonical URL, sitemap, robots, dan structured data tetap konsisten.
