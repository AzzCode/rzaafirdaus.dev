export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  skills: readonly string[];
};

export type StackCategory =
  | "Core Practice"
  | "Applied Research"
  | "Portfolio Stack"
  | "Training Exposure";

export type StackItem = {
  name: string;
  shortLabel: string;
  category: StackCategory;
  context: string;
};
