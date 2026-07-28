import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-[#050816] px-5 py-24 sm:px-8 sm:py-30 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="02"
          eyebrow="Featured Projects"
          title="Pengembangan yang berangkat dari kebutuhan nyata."
          description="Project ditampilkan sebagai studi kasus: konteks, kontribusi, teknologi, bukti pengerjaan, dan hal yang dipelajari."
          link={{ label: "Lihat semua project", href: "/projects" }}
        />
        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
