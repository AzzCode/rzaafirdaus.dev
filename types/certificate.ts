export type CertificateCategory =
  | "Achievement"
  | "Leadership"
  | "Workshop"
  | "Training";

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: CertificateCategory;
  summary: string;
  thumbnail: string;
  documentPath: string;
  featured: boolean;
  privacyNote?: string;
};
