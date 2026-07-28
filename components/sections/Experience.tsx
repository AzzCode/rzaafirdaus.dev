import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";

type ExperienceSectionProps = {
  showHeaderLink?: boolean;
};

export function Experience({
  showHeaderLink = true,
}: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-[#050816] px-5 py-24 sm:px-8 sm:py-30 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="05"
          eyebrow="Experience"
          title="Pengalaman lintas peran, dengan tanggung jawab yang jelas."
          description="Pengalaman profesional, produksi kreatif, dan kolaborasi media yang memperkuat kemampuan bekerja dengan data, dokumentasi, serta tim lintas disiplin."
          link={
            showHeaderLink
              ? { label: "Lihat timeline lengkap", href: "/experience" }
              : undefined
          }
        />
        <div>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
