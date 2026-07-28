import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CertificateGallery } from "@/components/sections/CertificateGallery";
import { PageIntro } from "@/components/ui/PageIntro";
import { certificates } from "@/data/certificates";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "Galeri sertifikat, pelatihan, kepemimpinan, workshop, dan pencapaian Reza Firdaus.",
};

export default function CertificatesPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="main-content">
        <PageIntro
          eyebrow="Certificates & Credentials"
          title="Evidence behind the learning and experience."
          description="Galeri dokumen yang mendukung pencapaian, kepemimpinan, workshop, dan materi pelatihan yang pernah diikuti."
        />
        <section className="bg-[#050816] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <CertificateGallery certificates={certificates} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
