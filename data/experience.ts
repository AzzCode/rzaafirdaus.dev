import type { Experience } from "@/types/experience";

export const experiences: readonly Experience[] = [
  {
    id: "atta-production-event-organizer",
    role: "Event Organizer",
    organization: "Atta Production",
    location: "Kota Jambi",
    period: "Juli 2026",
    category: "Professional",
    summary:
      "Mendukung administrasi operasional dan pelaporan kegiatan melalui pengelolaan data, lini masa, serta dokumen kemitraan.",
    highlights: [
      "Mengelola data riwayat peserta didik, lini masa kegiatan, surat resmi, dan proposal kemitraan.",
      "Mengoordinasikan rekapitulasi performa harian dan menyusun laporan aktivitas berkala.",
      "Mendukung transparansi data serta kelancaran pelaksanaan kegiatan.",
    ],
    skills: [
      "Data Processing",
      "Documentation",
      "Reporting",
      "Project Coordination",
    ],
    evidence: [],
  },
  {
    id: "panggil-aku-kulup-director-of-photography",
    role: "Sinematografer / Director of Photography",
    organization: "Nusantara Project Ridelima",
    location: "Kota Jambi",
    period: "Februari - April 2026",
    category: "Creative Industry",
    summary:
      'Bertanggung jawab pada arah visual produksi film kebudayaan lokal "Panggil Aku Kulup".',
    highlights: [
      "Mengelola estetika visual, komposisi kamera, dan pencahayaan sepanjang produksi.",
      "Berkolaborasi dengan sutradara dan kru kreatif untuk menerjemahkan narasi pelestarian budaya.",
      "Menjaga konsistensi pendekatan visual pada proses produksi.",
    ],
    skills: [
      "Cinematography",
      "Visual Storytelling",
      "Team Collaboration",
      "Video Production",
    ],
    image: {
      src: "/images/experience/panggil-aku-kulup.jpeg",
      alt: 'Dokumentasi Reza Firdaus pada produksi film "Panggil Aku Kulup"',
    },
    evidence: [],
  },
  {
    id: "roemah-tumbuh-film-lab-media-partner",
    role: "Media Partner",
    organization: "Roemah Tumbuh Film Lab",
    location: "Kota Jambi",
    period: "28 - 30 April 2025",
    category: "Volunteer",
    summary:
      "Mendukung publikasi, dokumentasi, dan penyebaran informasi workshop film melalui kerja sama media UKM Multimedia Kampus Pink.",
    highlights: [
      "Mendukung kebutuhan publikasi dan dokumentasi selama kegiatan.",
      "Berkontribusi dalam koordinasi komunikasi serta penyebaran informasi.",
      "Mewakili tim media partner UKM Multimedia Kampus Pink.",
    ],
    skills: ["Media Publication", "Communication", "Documentation", "Teamwork"],
    evidence: [
      {
        label: "Sertifikat Media Partner",
        href: "/documents/organization/roemah-tumbuh-film-lab.pdf",
        note: "Roemah Tumbuh Film Lab & Dinas Pariwisata dan Kebudayaan Kota Jambi",
      },
    ],
  },
];
