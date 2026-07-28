import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Experience } from "@/components/sections/Experience";
import { Leadership } from "@/components/sections/Leadership";
import { PageIntro } from "@/components/ui/PageIntro";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Experience",
  "Timeline pengalaman profesional, industri kreatif, relawan, dan kepemimpinan organisasi Reza Firdaus.",
  "/experience",
);

export default function ExperiencePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="main-content">
        <PageIntro
          eyebrow="Experience & Leadership"
          title="Responsibility across technology, operations, and creative work."
          description="Timeline pengalaman yang menjelaskan peran, kontribusi, bukti kegiatan, dan batas tanggung jawab secara transparan."
        />
        <Experience showHeaderLink={false} />
        <Leadership showHeaderLink={false} />
      </main>
      <Footer />
    </>
  );
}
