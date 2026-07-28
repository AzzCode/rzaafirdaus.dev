import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://rzaafirdaus.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Reza Firdaus — Aspiring Software Engineer",
    template: "%s — Reza Firdaus",
  },
  description:
    "Portofolio Reza Firdaus, fresh graduate Teknik Informatika yang berfokus pada software development, riset terapan, dan pengalaman lintas disiplin.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Reza Firdaus — Aspiring Software Engineer",
    description:
      "Software development, riset terapan, kepemimpinan organisasi, dan pengalaman industri kreatif.",
    url: siteUrl,
    siteName: "Reza Firdaus",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reza Firdaus — Aspiring Software Engineer",
    description:
      "Software development, riset terapan, kepemimpinan organisasi, dan pengalaman industri kreatif.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
