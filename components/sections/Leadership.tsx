import { LeadershipCard } from "@/components/cards/LeadershipCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { leadershipExperiences } from "@/data/leadership";

type LeadershipSectionProps = {
  showHeaderLink?: boolean;
};

export function Leadership({
  showHeaderLink = true,
}: LeadershipSectionProps) {
  return (
    <section
      id="leadership"
      className="scroll-mt-24 border-y border-white/8 bg-[#080d1c] px-5 py-24 sm:px-8 sm:py-30 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="06"
          eyebrow="Leadership"
          title="Memimpin sistem kerja, bukan mengambil seluruh kredit."
          description="Kepemimpinan ditampilkan melalui koordinasi, tanggung jawab, dampak program, dan pembagian peran yang transparan."
          link={
            showHeaderLink
              ? {
                  label: "Lihat pengalaman lengkap",
                  href: "/experience#leadership",
                }
              : undefined
          }
        />
        <div className="space-y-6">
          {leadershipExperiences.map((leadership) => (
            <LeadershipCard key={leadership.id} leadership={leadership} />
          ))}
        </div>
      </div>
    </section>
  );
}
