import type { LeadershipExperience } from "@/types/experience";

export const leadershipExperiences: readonly LeadershipExperience[] = [
  {
    id: "ketua-umum-mkp-2025-2026",
    role: "Ketua Umum",
    organization: "UKM Multimedia Kampus Pink",
    period: "2025 - 2026",
    summary:
      "Memimpin koordinasi organisasi dalam perencanaan, pelaksanaan, dan evaluasi program kerja multimedia kampus selama satu periode kepengurusan.",
    responsibilities: [
      "Mengelola pembagian tugas, komunikasi internal, dan pengambilan keputusan organisasi.",
      "Mengoordinasikan program pengembangan anggota, karya multimedia, kolaborasi, dan pengabdian.",
      "Menjaga evaluasi kegiatan serta keberlanjutan organisasi bersama pengurus dan panitia pelaksana.",
    ],
    scopeNote:
      "HUT MKP ke-9, KURAB Vol. 8, dan Buka Bersama 2026 dijalankan oleh panitia kegiatan masing-masing. Sebagai Ketua Umum, Reza bertindak dalam koordinasi dan tanggung jawab umum, bukan sebagai pelaksana tunggal.",
    metrics: [
      { value: "10+", label: "Program kerja" },
      { value: "75", label: "Anggota muda baru" },
      { value: "Rp 0", label: "Ketergantungan dana kampus" },
    ],
    skills: [
      "Leadership",
      "Decision Making",
      "Team Management",
      "Community Management",
    ],
    evidence: [
      {
        label: "Lihat Rekap Program",
        href: "/documents/organization/mkp-recap-2025-2026.pdf",
        note: "Portofolio karya dan dedikasi satu periode kepengurusan",
      },
    ],
    gallery: [],
  },
  {
    id: "ketua-pelaksana-kurab-vol-7",
    role: "Ketua Pelaksana",
    organization: "Kumpul Akrab (KURAB) Vol. 7",
    period: "Desember 2024",
    summary:
      "Memimpin pelaksanaan KURAB Vol. 7 sebelum menjabat sebagai Ketua Umum UKM Multimedia Kampus Pink.",
    responsibilities: [
      "Mengoordinasikan panitia dalam persiapan dan pelaksanaan kegiatan.",
      "Menjadi penghubung koordinasi lapangan pada rangkaian acara.",
      "Mendukung keterlibatan anggota dan kelancaran kegiatan keakraban organisasi.",
    ],
    metrics: [],
    skills: ["Event Leadership", "Team Coordination", "Communication"],
    evidence: [],
    gallery: [
      {
        src: "/images/leadership/kurab-vol-7-leadership.jpg",
        alt: "Reza Firdaus memberikan arahan pada kegiatan KURAB Vol. 7",
      },
      {
        src: "/images/leadership/kurab-vol-7-team.jpg",
        alt: "Dokumentasi koordinasi peserta dan panitia KURAB Vol. 7",
      },
    ],
  },
];
