export type NavigationItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type ProfileMetric = {
  value: string;
  label: string;
};

export type Profile = {
  name: string;
  initials: string;
  eyebrow: string;
  headline: string;
  disciplines: readonly string[];
  summary: string;
  about: readonly string[];
  location: string;
  availability: string;
  portrait: string;
  cvPath: string;
  email: string;
  socialLinks: readonly SocialLink[];
  metrics: readonly ProfileMetric[];
};
