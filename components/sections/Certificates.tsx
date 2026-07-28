import { CertificateGallery } from "@/components/sections/CertificateGallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredCertificates } from "@/data/certificates";

export function Certificates() {
  return (
    <section
      id="certificates"
      className="scroll-mt-24 bg-[#050816] px-5 py-24 sm:px-8 sm:py-30 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="07"
          eyebrow="Certificates"
          title="Bukti pembelajaran, kepemimpinan, dan pencapaian."
          description="Setiap dokumen dapat dipreview. Sertifikat yang memuat nomor identitas menggunakan versi publik yang telah disanitasi."
          link={{
            label: "Lihat semua sertifikat",
            href: "/certificates",
          }}
        />
        <CertificateGallery
          certificates={featuredCertificates}
          showFilters={false}
        />
      </div>
    </section>
  );
}
