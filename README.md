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
  projects/           Halaman katalog software project
  research/           Halaman katalog penelitian
  experience/         Timeline pengalaman dan leadership
  certificates/       Galeri dan preview PDF sertifikat
  resume/             Resume online yang mengambil data portfolio
  contact/            Halaman kontak profesional
  sitemap.ts          Daftar route untuk mesin pencari
  robots.ts           Aturan crawler dan alamat sitemap
  opengraph-image.tsx Social preview image dinamis
components/
  layout/             Navbar dan Footer
  sections/           Section halaman
  cards/              ProjectCard dan ResearchCard
  ui/                 Heading, page intro, dan visual abstrak
data/                 Seluruh konten portfolio
  profile.ts          Profil, kontak, dan navigasi
  projects.ts         Data software project
  research.ts         Data penelitian
  experience.ts       Pengalaman profesional, kreatif, dan relawan
  leadership.ts       Pengalaman kepemimpinan serta dampak program
  skills.ts           Skill groups dan konteks technology stack
  certificates.ts     Metadata galeri sertifikat
types/                TypeScript types
lib/                  Helper metadata dan konfigurasi SEO
public/
  documents/          CV dan dokumen publik
  images/             Foto serta thumbnail
```

Konten profil dan tautan utama dapat diperbarui melalui `data/profile.ts`. Konten project berada di `data/projects.ts`, sedangkan penelitian berada di `data/research.ts`. Komponen tidak menyimpan fakta portfolio secara langsung agar pembaruan berikutnya lebih aman dan konsisten.

## Prinsip konten

- Tidak menambahkan pengalaman, prestasi, atau keahlian yang tidak memiliki sumber.
- Fokus utama: software engineering, research, leadership, lalu creative industry.
- React, Flutter, IoT, dan Excel dari mini bootcamp akan ditandai sebagai training exposure, bukan klaim penguasaan profesional.
- Aset bukti dan sertifikat akan dihubungkan dari data section terkait.
- Dokumen yang memuat nomor identitas tidak dipublikasikan tanpa versi yang sudah disanitasi.
- `Portfolio Stack` menjelaskan teknologi yang digunakan pada website ini, sedangkan `Training Exposure` menjelaskan materi pengenalan dari pelatihan.

## Deployment

Repository ini dapat dihubungkan langsung ke Vercel. Setiap push ke branch produksi akan memicu build dan deployment sesuai konfigurasi project Vercel.

## SEO

- Metadata global dan metadata unik per halaman.
- Canonical URL untuk seluruh route publik.
- Open Graph dan Twitter Card dengan social preview 1200 × 630.
- `sitemap.xml` dan `robots.txt` dibuat melalui Metadata Routes.
- Structured data `Person` dan `WebSite` menggunakan JSON-LD.

Domain utama dikonfigurasi melalui `lib/seo.ts`. Ubah `siteConfig.url` jika
website menggunakan domain produksi yang berbeda.
