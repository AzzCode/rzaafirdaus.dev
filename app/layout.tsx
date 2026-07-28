import type { Metadata, Viewport } from "next";

import { JsonLd } from "@/components/ui/JsonLd";
import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  authors: [{ name: profile.name, url: siteConfig.url }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  keywords: [
    "Reza Firdaus",
    "Software Engineer",
    "Software Developer",
    "Laravel Developer",
    "Computer Vision",
    "Machine Learning",
    "Portfolio",
    "Jambi",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `Portofolio profesional ${profile.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#050816",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: profile.name,
        url: siteConfig.url,
        image: `${siteConfig.url}${profile.portrait}`,
        email: `mailto:${profile.email}`,
        jobTitle: profile.headline,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jambi",
          addressCountry: "ID",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Universitas Dinamika Bangsa",
        },
        sameAs: profile.socialLinks.map((link) => link.href),
        knowsAbout: [
          "Software Development",
          "Laravel",
          "Database",
          "Machine Learning",
          "Computer Vision",
          "GIS",
          "Leadership",
          "Cinematography",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "id-ID",
        author: {
          "@id": `${siteConfig.url}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="id">
      <body className="min-h-screen antialiased">
        <JsonLd data={jsonLd} />
        {children}
      </body>
    </html>
  );
}
