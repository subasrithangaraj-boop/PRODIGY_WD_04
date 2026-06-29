export interface Skill {
  name: string;
  category: 'programming' | 'web-dev';
  percentage: number;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  badge: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  status: string;
  period: string;
  achievements: string[];
  grade?: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}
