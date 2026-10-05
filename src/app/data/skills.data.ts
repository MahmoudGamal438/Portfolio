import { ServiceItem, SkillGroup } from '../models/skill.model';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    category: 'Backend',
    items: ['C#', '.NET'],
  },
  {
    category: 'Database',
    items: ['SQL Server'],
  },
  {
    category: 'API & Web',
    items: ['REST APIs', 'Responsive Web Design'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub'],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Frontend Development',
    description:
      'Building clean, maintainable user interfaces with HTML, CSS, JavaScript, and TypeScript.',
  },
  {
    title: 'Angular Development',
    description:
      'Developing Angular applications with standalone components, routing, forms, and a clear feature structure.',
  },
  {
    title: 'Responsive Web Design',
    description:
      'Delivering layouts that stay usable and consistent across mobile, tablet, and desktop screens.',
  },
  {
    title: 'Web UI Development',
    description:
      'Turning product requirements into structured pages, dashboards, and interaction-ready interfaces.',
  },
  {
    title: 'API Integration',
    description:
      'Connecting frontend applications to REST APIs and handling client-server data flow with TypeScript.',
  },
];
