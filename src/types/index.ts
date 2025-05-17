export  type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  highlight?: string;
};

export type PageTransitionProps = {
  children: React.ReactNode;
};

export type SkillBarProps = {
  level: number;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
};

export type ProjectCardProps = {
  project: Project;
};

export type ContactInfo = {
  icon: JSX.Element;
  label: string;
  value: string;
  link: string;
};
 