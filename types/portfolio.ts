export type PortfolioLink = {
  label: string;
  href: string;
  kind: "demo" | "evidence" | "source";
};

export type ProjectVisual = "software" | "road" | "safety";

export type Project = {
  slug: string;
  title: string;
  category: string;
  period: string;
  role: string;
  summary: string;
  challenge: string;
  contributions: readonly string[];
  technologies: readonly string[];
  learning: readonly string[];
  links: readonly PortfolioLink[];
  visual: ProjectVisual;
  featured: boolean;
};

export type ResearchProject = {
  slug: string;
  title: string;
  field: string;
  period: string;
  role: string;
  summary: string;
  objective: string;
  contributions: readonly string[];
  focusAreas: readonly string[];
  learning: readonly string[];
  links: readonly PortfolioLink[];
  visual: ProjectVisual;
  featured: boolean;
};
