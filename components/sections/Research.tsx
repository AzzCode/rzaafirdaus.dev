import { ResearchCard } from "@/components/cards/ResearchCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredResearch } from "@/data/research";

export function Research() {
  return (
    <section
      id="research"
      className="scroll-mt-24 border-y border-white/8 bg-[#080d1c] px-5 py-24 sm:px-8 sm:py-30 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="03"
          eyebrow="Research"
          title="Riset terapan untuk membaca persoalan di lapangan."
          description="Eksplorasi deep learning, computer vision, dan GIS untuk analisis infrastruktur jalan serta pemantauan keselamatan konstruksi."
          link={{ label: "Lihat seluruh research", href: "/research" }}
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredResearch.map((research) => (
            <ResearchCard key={research.slug} research={research} />
          ))}
        </div>
      </div>
    </section>
  );
}
