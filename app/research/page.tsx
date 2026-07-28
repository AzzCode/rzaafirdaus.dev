import { ResearchCard } from "@/components/cards/ResearchCard";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageIntro } from "@/components/ui/PageIntro";
import { researchProjects } from "@/data/research";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Research",
  "Penelitian terapan Reza Firdaus pada deep learning, computer vision, GIS, dan analisis data.",
  "/research",
);

export default function ResearchPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="main-content">
        <PageIntro
          eyebrow="Applied Research"
          title="Exploring technology through evidence and analysis."
          description="Riset akademik yang membahas kondisi infrastruktur jalan dan pemantauan keselamatan konstruksi melalui pendekatan berbasis data."
        />
        <section className="bg-[#050816] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            {researchProjects.map((research) => (
              <ResearchCard key={research.slug} research={research} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
