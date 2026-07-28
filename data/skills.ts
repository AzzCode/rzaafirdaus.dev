import type { SkillGroup, StackItem } from "@/types/skill";

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "technical",
    title: "Technical",
    description:
      "Kemampuan yang digunakan dalam project, penelitian, pengolahan data, dan dokumentasi.",
    skills: [
      "Laravel & Web Development",
      "Database / SQL",
      "Data Entry & Data Processing",
      "Data Analysis",
      "Microsoft Excel",
      "Machine Learning & Artificial Intelligence",
      "Computer Vision & GIS",
      "Documentation & Reporting",
    ],
  },
  {
    id: "professional",
    title: "Professional",
    description:
      "Kemampuan kerja yang berkembang melalui organisasi, riset, dan koordinasi kegiatan.",
    skills: [
      "Leadership",
      "Teamwork",
      "Communication",
      "Public Speaking",
      "Presentation Skills",
      "Analytical Thinking",
      "Problem Solving",
      "Time Management",
      "Project Coordination",
      "Community Management",
    ],
  },
  {
    id: "creative",
    title: "Creative",
    description:
      "Kompetensi lintas disiplin yang mendukung komunikasi visual dan kerja kolaboratif.",
    skills: [
      "Video Production",
      "Cinematography",
      "Photography",
      "Media Publication",
    ],
  },
];

export const stackItems: readonly StackItem[] = [
  {
    name: "Laravel",
    shortLabel: "LA",
    category: "Core Practice",
    context: "Digunakan pada pengembangan Website Layanan Jasa Games.",
  },
  {
    name: "Database / SQL",
    shortLabel: "DB",
    category: "Core Practice",
    context: "Perancangan struktur data dan pengelolaan proses operasional.",
  },
  {
    name: "Machine Learning",
    shortLabel: "ML",
    category: "Applied Research",
    context: "Diterapkan pada penelitian analisis kerusakan jalan.",
  },
  {
    name: "Computer Vision",
    shortLabel: "CV",
    category: "Applied Research",
    context: "Digunakan pada riset jalan dan pemantauan APD konstruksi.",
  },
  {
    name: "GIS",
    shortLabel: "GIS",
    category: "Applied Research",
    context: "Pemetaan konteks lokasi pada analisis infrastruktur jalan.",
  },
  {
    name: "Next.js",
    shortLabel: "NX",
    category: "Portfolio Stack",
    context: "Framework yang digunakan untuk membangun website portfolio ini.",
  },
  {
    name: "TypeScript",
    shortLabel: "TS",
    category: "Portfolio Stack",
    context: "Digunakan pada struktur data dan komponen website portfolio.",
  },
  {
    name: "Tailwind CSS",
    shortLabel: "TW",
    category: "Portfolio Stack",
    context: "Digunakan untuk design system dan responsive layout portfolio.",
  },
  {
    name: "Git & GitHub",
    shortLabel: "GIT",
    category: "Portfolio Stack",
    context: "Digunakan dalam workflow version control dan deployment portfolio.",
  },
  {
    name: "React JS",
    shortLabel: "RE",
    category: "Training Exposure",
    context: "Pengenalan melalui mini bootcamp Edspert.id.",
  },
  {
    name: "Flutter",
    shortLabel: "FL",
    category: "Training Exposure",
    context: "Pengenalan melalui mini bootcamp Edspert.id.",
  },
  {
    name: "Internet of Things",
    shortLabel: "IoT",
    category: "Training Exposure",
    context: "Pengenalan melalui mini bootcamp Edspert.id.",
  },
];
