import type { ResearchProject } from "@/types/portfolio";

export const researchProjects: readonly ResearchProject[] = [
  {
    slug: "optimasi-pemantauan-apd-konstruksi",
    title: "Optimasi Algoritma Pemantauan APD Konstruksi",
    field: "Computer Vision",
    period: "2026",
    role: "Peneliti — Proyek Akademik",
    summary:
      "Penelitian pemantauan kepatuhan penggunaan Alat Pelindung Diri di area konstruksi menggunakan pendekatan computer vision.",
    objective:
      "Menganalisis efektivitas algoritma dalam mendeteksi penggunaan APD untuk mendukung pemantauan keselamatan kerja.",
    contributions: [
      "Mengkaji pendekatan algoritma untuk pemantauan penggunaan APD.",
      "Menganalisis efektivitas deteksi kepatuhan penggunaan APD.",
      "Menyusun proses riset dan analisis berbasis teknologi.",
    ],
    focusAreas: ["Computer Vision", "Algorithm Analysis", "Data Analysis"],
    learning: ["Research", "Analytical Thinking", "Technology-based Problem Solving"],
    links: [
      {
        label: "Laporan Penelitian",
        href: "https://drive.google.com/file/d/1H5XW7sIFSbYJOvE1kw0AjQROdJVwEPAQ/view?usp=drive_link",
        kind: "evidence",
      },
    ],
    visual: "safety",
    featured: true,
  },
  {
    slug: "deep-learning-kerusakan-jalan-gis",
    title: "Deep Learning untuk Analisis Kerusakan Jalan Berbasis GIS",
    field: "Deep Learning & GIS",
    period: "2025",
    role: "Peneliti — Proyek Akademik",
    summary:
      "Penerapan deep learning dan data visual untuk mengidentifikasi serta mengklasifikasikan kerusakan jalan di wilayah Kota Jambi.",
    objective:
      "Mendukung analisis kondisi infrastruktur jalan melalui klasifikasi data visual dan pemetaan berbasis GIS.",
    contributions: [
      "Mengumpulkan dan mengolah data visual kondisi jalan.",
      "Menganalisis data untuk mendukung klasifikasi kerusakan jalan.",
      "Menggunakan pemetaan GIS untuk menyajikan konteks lokasi penelitian.",
    ],
    focusAreas: ["Deep Learning", "Computer Vision", "GIS", "Data Analysis"],
    learning: ["Machine Learning", "Visual Data Processing", "Data-driven Research"],
    links: [
      {
        label: "Laporan Penelitian",
        href: "https://drive.google.com/file/d/1XFoY0lNzRMKQVIjiGpe158vt2cCV-KPF/view?usp=drive_link",
        kind: "evidence",
      },
    ],
    visual: "road",
    featured: true,
  },
];

export const featuredResearch = researchProjects.filter(
  (research) => research.featured,
);
