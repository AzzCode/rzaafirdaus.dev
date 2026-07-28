# Sprint 6 — Production Readiness

Sprint ini bersifat kumulatif dan mencakup seluruh pekerjaan Sprint 1–5.

## Yang ditambahkan

- Navigasi responsif untuk mobile, tablet, dan desktop.
- Penanda halaman aktif menggunakan `aria-current`.
- Focus trap, Escape handling, body scroll lock, dan focus restoration pada
  preview sertifikat.
- Loading state, error boundary, dan halaman 404.
- Web App Manifest dan theme color.
- Security headers melalui `next.config.ts`.
- GitHub Actions untuk ESLint dan production build.
- Dependabot mingguan untuk pembaruan dependency.
- Panduan deployment Vercel, domain, access control, SEO, dan maintenance.

Tidak ada package npm baru pada sprint ini.

## Cara menerapkan

1. Pastikan Sprint 5 sudah di-commit dan `git status` bersih.
2. Ekstrak ZIP Sprint 6 langsung ke folder project.
3. Pilih **Replace/Overwrite**.
4. Tidak perlu menjalankan `npm install`.
5. Jalankan:

```powershell
npm run dev
```

Periksa tampilan pada lebar mobile, tablet, dan desktop. Periksa juga:

- menu navigasi;
- filter serta modal sertifikat;
- halaman `/resume` dan `/contact`;
- halaman acak untuk menguji 404;
- `/manifest.webmanifest`, `/sitemap.xml`, dan `/robots.txt`.

Setelah sesuai:

```powershell
npm run lint
npm run build
git add .
git commit -m "chore: finalize portfolio production readiness"
git push origin main
```

Setelah push, buka tab **Actions** di GitHub dan pastikan workflow
**Code quality** berwarna hijau.
