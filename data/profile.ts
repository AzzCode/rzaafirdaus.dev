import type { NavigationItem, Profile } from "@/types/profile";

export const profile: Profile = {
  name: "Reza Firdaus",
  initials: "RF",
  eyebrow: "Fresh Graduate Teknik Informatika",
  headline: "Aspiring Software Engineer",
  disciplines: [
    "Software Development",
    "Applied Research",
    "Creative Technology",
  ],
  summary:
    "Saya membangun solusi digital melalui pengembangan perangkat lunak dan riset terapan, dengan pengalaman lintas disiplin pada organisasi serta industri kreatif.",
  about: [
    "Lulusan S1 Teknik Informatika Universitas Dinamika Bangsa dengan minat utama pada software development, data, dan artificial intelligence.",
    "Pengalaman saya mencakup pengembangan website Laravel, penelitian computer vision dan GIS, kepemimpinan organisasi multimedia, serta kolaborasi dalam produksi kreatif.",
  ],
  location: "Jambi, Indonesia",
  availability: "Terbuka untuk peluang di bidang software development",
  portrait: "/images/reza-firdaus-portrait.jpeg",
  cvPath: "/documents/reza-firdaus-cv.pdf",
  email: "reza.firdaus.7604@gmail.com",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/AzzCode",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rzaafirdaus",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/rzaafs_/",
    },
  ],
  metrics: [
    {
      value: "3.96",
      label: "IPK / 4.00",
    },
    {
      value: "3",
      label: "Proyek & riset utama",
    },
    {
      value: "520",
      label: "Skor TOEFL",
    },
  ],
};

export const navigation: readonly NavigationItem[] = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Experience", href: "/experience" },
  { label: "Certificates", href: "/certificates" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];
