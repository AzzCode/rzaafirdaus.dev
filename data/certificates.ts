import type {
  Certificate,
  CertificateCategory,
} from "@/types/certificate";

export const certificateCategories: readonly (
  | "All"
  | CertificateCategory
)[] = ["All", "Achievement", "Leadership", "Workshop", "Training"];

export const certificates: readonly Certificate[] = [
  {
    id: "lo-kreatif-photography-finalist-2024",
    title: "Finalis Nasional Fotografi LO Kreatif 2024",
    issuer: "LO Kreatif 2024 / APTISI Wilayah VII Jawa Timur",
    date: "6 November 2024",
    category: "Achievement",
    summary:
      "Pengakuan sebagai finalis nasional kategori Fotografi pada LO Kreatif 2024.",
    thumbnail: "/images/certificates/lo-kreatif-2024.webp",
    documentPath: "/documents/certificates/lo-kreatif-2024.pdf",
    featured: true,
  },
  {
    id: "ketua-umum-mkp-2025-2026",
    title: "Ketua Umum UKM Multimedia Kampus Pink",
    issuer: "Universitas Dinamika Bangsa",
    date: "Periode 2025 - 2026",
    category: "Leadership",
    summary:
      "Sertifikat kepemimpinan sebagai Ketua Umum UKM Multimedia Kampus Pink.",
    thumbnail: "/images/certificates/ketua-umum-mkp-2025-2026.webp",
    documentPath: "/documents/certificates/ketua-umum-mkp-2025-2026.pdf",
    featured: true,
    privacyNote:
      "Versi publik: NIM pemilik dan NIK pembina telah dihapus dari dokumen.",
  },
  {
    id: "roemah-tumbuh-film-lab-2025",
    title: "Media Partner Roemah Tumbuh Film Lab",
    issuer:
      "Roemah Tumbuh & Dinas Pariwisata dan Kebudayaan Kota Jambi",
    date: "28 - 30 April 2025",
    category: "Workshop",
    summary:
      "Partisipasi sebagai tim Media Partner dari UKM Multimedia Kampus Pink.",
    thumbnail: "/images/certificates/roemah-tumbuh-film-lab-2025.webp",
    documentPath:
      "/documents/certificates/roemah-tumbuh-film-lab-2025.pdf",
    featured: true,
  },
  {
    id: "react-js-edspert-2023",
    title: "Introduction to React JS",
    issuer: "Edspert.id",
    date: "12 September 2023",
    category: "Training",
    summary:
      "Mini bootcamp pengenalan React JS dan jalur karier web developer.",
    thumbnail: "/images/certificates/react-js-edspert-2023.webp",
    documentPath: "/documents/certificates/react-js-edspert-2023.pdf",
    featured: true,
  },
  {
    id: "iot-edspert-2023",
    title: "Introduction to Internet of Things",
    issuer: "Edspert.id",
    date: "13 September 2023",
    category: "Training",
    summary:
      "Mini bootcamp pengenalan IoT dan prospek karier pada bidang terkait.",
    thumbnail: "/images/certificates/iot-edspert-2023.webp",
    documentPath: "/documents/certificates/iot-edspert-2023.pdf",
    featured: false,
  },
  {
    id: "flutter-edspert-2023",
    title: "Introduction to Flutter",
    issuer: "Edspert.id",
    date: "11 September 2023",
    category: "Training",
    summary:
      "Mini bootcamp pengenalan Flutter dan peluang karier mobile developer.",
    thumbnail: "/images/certificates/flutter-edspert-2023.webp",
    documentPath: "/documents/certificates/flutter-edspert-2023.pdf",
    featured: false,
  },
  {
    id: "excel-edspert-2023",
    title: "Introduction to Excel",
    issuer: "Edspert.id",
    date: "14 September 2023",
    category: "Training",
    summary:
      "Mini bootcamp pengenalan Microsoft Excel untuk mendukung potensi karier.",
    thumbnail: "/images/certificates/excel-edspert-2023.webp",
    documentPath: "/documents/certificates/excel-edspert-2023.pdf",
    featured: false,
  },
];

export const featuredCertificates = certificates.filter(
  (certificate) => certificate.featured,
);
