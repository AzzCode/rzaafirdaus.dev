import type { Metadata } from "next";

export const siteConfig = {
  name: "Reza Firdaus",
  title: "Reza Firdaus — Aspiring Software Engineer",
  description:
    "Portofolio Reza Firdaus, fresh graduate Teknik Informatika yang berfokus pada software development, riset terapan, dan pengalaman lintas disiplin.",
  url: "https://rzaafirdaus.dev",
  locale: "id_ID",
  ogImage: "/opengraph-image",
} as const;

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} — ${siteConfig.name}`,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `Portofolio ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${siteConfig.name}`,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
