export type ProjectCategory = 'all' | 'angular' | 'frontend';

export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  overview: string;
  purpose: string;
  technologies: string[];
  features: string[];
  architecture?: string;
  githubUrl: string;
  liveUrl?: string;
  category: Exclude<ProjectCategory, 'all'>;
  accent: string;
  year: string;
  featured: boolean;
}
