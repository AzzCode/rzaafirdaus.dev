import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Contact } from "@/components/sections/Contact";
import { PageIntro } from "@/components/ui/PageIntro";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Contact",
  "Hubungi Reza Firdaus untuk peluang software development, interview, dan kolaborasi profesional.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="main-content">
        <PageIntro
          eyebrow="Contact"
          title="A direct line for opportunities and collaboration."
          description="Informasi kontak profesional Reza Firdaus untuk interview, kesempatan kerja, dan kolaborasi yang relevan."
        />
        <Contact compact />
      </main>
      <Footer />
    </>
  );
}
