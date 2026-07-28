# Dependency dan Security Maintenance

## Pemeriksaan rutin

Jalankan secara berkala:

```powershell
npm audit --omit=dev
npm outdated
npm run lint
npm run build
```

Jangan menjalankan `npm audit fix --force` tanpa memeriksa perubahan versi yang
ditawarkan. Perubahan major atau downgrade framework dapat merusak App Router
dan kompatibilitas React.

Repository memiliki konfigurasi Dependabot mingguan. Ketika pembaruan tersedia:

1. Baca paket dan versi yang berubah.
2. Terapkan pembaruan pada branch atau pull request terpisah.
3. Pastikan workflow **Code quality** berhasil.
4. Periksa halaman utama, gambar, PDF, sitemap, robots, dan Open Graph.
5. Merge setelah hasilnya sesuai.

## Pelaporan

Website ini adalah portofolio statis dan tidak menyimpan data pengunjung,
password, atau input formulir. Informasi kontak digunakan hanya sebagai tautan
email dan social profile.
