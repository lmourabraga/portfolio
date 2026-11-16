export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface ArticleItem {
  id: number | string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  link?: string;
  content?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  email: string;
  location: string;
  website: string;
  summary: string;
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
}
