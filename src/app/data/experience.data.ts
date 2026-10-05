import { EducationItem, TimelineItem } from '../models/experience.model';

export const EXPERIENCE: TimelineItem[] = [
  {
    organization: 'NTI',
    role: 'Web Design Intern',
    period: 'October 2024 – December 2024',
    focus: [
      'Practiced HTML, CSS, and JavaScript for structured, responsive page layouts.',
      'Focused on frontend fundamentals used in production web interfaces.',
    ],
  },
  {
    organization: 'ITI',
    role: 'Backend .NET Development',
    period: 'July 2024 – September 2024',
    focus: [
      'Studied C# and .NET backend development concepts.',
      'Gained a clearer view of APIs, server-side logic, and how frontend clients consume services.',
    ],
  },
  {
    organization: 'DEPI',
    role: 'Full-Stack .NET Development Trainee',
    period: 'April 2024 – October 2024',
    focus: [
      'Worked across frontend and backend topics in a full-stack .NET track.',
      'Connected UI work with REST APIs, databases, and web application architecture.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor's Degree in Computers and Information",
    field: 'Information Systems',
    institution: 'Menoufia University',
    period: '2020 – January 2025',
  },
];
