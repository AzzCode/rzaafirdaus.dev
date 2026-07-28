export type EvidenceLink = {
  label: string;
  href: string;
  note?: string;
};

export type Experience = {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  category: "Professional" | "Creative Industry" | "Volunteer";
  summary: string;
  highlights: readonly string[];
  skills: readonly string[];
  image?: {
    src: string;
    alt: string;
  };
  evidence: readonly EvidenceLink[];
};

export type LeadershipMetric = {
  value: string;
  label: string;
};

export type LeadershipExperience = {
  id: string;
  role: string;
  organization: string;
  period: string;
  summary: string;
  responsibilities: readonly string[];
  scopeNote?: string;
  metrics: readonly LeadershipMetric[];
  skills: readonly string[];
  evidence: readonly EvidenceLink[];
  gallery: readonly {
    src: string;
    alt: string;
  }[];
};
