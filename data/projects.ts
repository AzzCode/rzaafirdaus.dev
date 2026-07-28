import type { Project } from "@/types/portfolio";

export const projects: readonly Project[] = [
  {
    slug: "website-layanan-jasa-games",
    title: "Website Layanan Jasa Games",
    category: "Software Development",
    period: "2025",
    role: "Web Developer — Proyek Akademik",
    summary:
      "Website operasional berbasis Laravel untuk mendukung layanan dan pengelolaan jasa games.",
    challenge:
      "Menyusun proses layanan agar alur operasional, data, dan fitur pengelolaan dapat berjalan lebih terorganisir serta terdokumentasi.",
    contributions: [
      "Merancang alur sistem dan struktur database.",
      "Mengembangkan fitur layanan untuk mendukung proses operasional.",
      "Menyusun dokumentasi sistem sebagai bagian dari pengembangan.",
    ],
    technologies: ["Laravel", "Web Development", "Database / SQL"],
    learning: ["Problem Solving", "System Design", "Technical Documentation"],
    links: [
      {
        label: "Video Demo",
        href: "https://drive.google.com/file/d/1UEFe6OSS_cwridzAYuLQNA7FOikAqmtg/view?usp=drive_link",
        kind: "demo",
      },
      {
        label: "GitHub Profile",
        href: "https://github.com/AzzCode",
        kind: "source",
      },
    ],
    visual: "software",
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
