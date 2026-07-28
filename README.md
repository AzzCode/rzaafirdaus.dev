# rzaafirdaus.dev

Personal portfolio Reza Firdaus, dibangun dengan Next.js, TypeScript, Tailwind CSS, dan App Router.

Website ini memosisikan Reza sebagai fresh graduate Teknik Informatika yang berfokus pada software development dan riset terapan. Pengalaman kepemimpinan organisasi serta industri kreatif disajikan sebagai nilai tambah, bukan fokus utama.

## Menjalankan project

Gunakan Node.js versi LTS, lalu jalankan:

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

Untuk memeriksa versi produksi:

```bash
npm run lint
npm run build
npm run start
```

## Struktur utama

```text
app/                  Route, layout, metadata, dan global style
components/
  layout/             Navbar dan Footer
  sections/           Section halaman
  cards/              Card reusable (sprint berikutnya)
  ui/                 Komponen UI dasar (sprint berikutnya)
data/                 Seluruh konten portfolio
lib/                  Helper dan utility (sprint berikutnya)
types/                TypeScript types
public/
  documents/          CV dan dokumen publik
  images/             Foto serta thumbnail
```

Konten profil dan tautan utama dapat diperbarui melalui `data/profile.ts`. Komponen tidak menyimpan fakta profil secara langsung agar pembaruan berikutnya lebih aman dan konsisten.

## Prinsip konten

- Tidak menambahkan pengalaman, prestasi, atau keahlian yang tidak memiliki sumber.
- Fokus utama: software engineering, research, leadership, lalu creative industry.
- React, Flutter, IoT, dan Excel dari mini bootcamp akan ditandai sebagai training exposure, bukan klaim penguasaan profesional.
- Aset bukti dan sertifikat akan dihubungkan dari data section terkait.

## Deployment

Repository ini dapat dihubungkan langsung ke Vercel. Setiap push ke branch produksi akan memicu build dan deployment sesuai konfigurasi project Vercel.
