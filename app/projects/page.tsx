import { ProjectCard } from "@/components/cards/ProjectCard";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageIntro } from "@/components/ui/PageIntro";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Projects",
  "Project software development Reza Firdaus, mencakup konteks, kontribusi, teknologi, dan bukti pengerjaan.",
  "/projects",
);

export default function ProjectsPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="main-content">
        <PageIntro
          eyebrow="Software Development"
          title="Projects built around systems, data, and real workflows."
          description="Kumpulan project pengembangan yang disusun sebagai studi kasus, dengan fokus pada cara berpikir, kontribusi, dan bukti pengerjaan."
        />
        <section className="bg-[#050816] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl space-y-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
