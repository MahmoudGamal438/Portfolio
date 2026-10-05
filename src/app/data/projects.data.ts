import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    slug: 'dental-v2',
    name: 'Dental System V2',
    shortDescription:
      'Angular clinic platform with a public website, authentication, and an internal clinic workspace.',
    overview:
      'An Angular application for a dental clinic. It combines a public-facing site with a protected clinic area for day-to-day operational screens.',
    purpose:
      'Provide both a public clinic presence and an internal workspace to manage patients, appointments, treatments, billing, and settings.',
    technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3'],
    features: [
      'Public pages for home, services, doctors, about, contact, and booking',
      'Login flow with route guards for public-only and authenticated access',
      'Clinic dashboard with dedicated layout',
      'Patient list, create, and edit screens',
      'Appointment list, create, and edit screens',
      'Treatments board and billing screens',
      'Clinic settings screen',
      'Lazy-loaded routes and feature-based folder structure',
    ],
    architecture:
      'Standalone Angular architecture with public and clinic layouts, feature modules for auth/public/clinic, core guards, and lazy-loaded routes.',
    githubUrl: 'https://github.com/MahmoudGamal438/DentalV2',
    liveUrl: 'https://dentalsystemv2.vercel.app',
    category: 'angular',
    accent: '#3EE0C2',
    year: '2026',
    featured: true,
  },
  {
    slug: 'fci-new-version',
    name: 'FCI New Version',
    shortDescription:
      'Angular faculty website covering programs, student services, portals, news, and authentication pages.',
    overview:
      'An Angular 22 faculty website built with Bootstrap and ng-bootstrap. It presents college content, academic programs, student services, and portal entry points.',
    purpose:
      'Present college information, academic programs, and student-facing services in a structured, responsive institutional interface.',
    technologies: ['Angular', 'TypeScript', 'Bootstrap', 'HTML5', 'CSS3'],
    features: [
      'Home, college, contact, news, login, and register pages',
      'About pages for vision, mission, history, library, and related content',
      'Program pages for bachelor, diploma, master, and PhD tracks',
      'Student services and electronic portal routes',
      'Lazy-loaded standalone components',
      'Shared loading, empty, error, and success UI states',
      'Responsive layout for phone, tablet, and desktop',
      'Reduced-motion support in the global design system',
    ],
    architecture:
      'Angular standalone components with routed pages, shared components, services, interfaces, pipes, and directives.',
    githubUrl: 'https://github.com/MahmoudGamal438/FCI-NewVersion',
    liveUrl: 'https://fci-new-version.vercel.app',
    category: 'angular',
    accent: '#6EA8FF',
    year: '2026',
    featured: true,
  },
  {
    slug: 'dental-clinical-system',
    name: 'Dental Clinical System',
    shortDescription:
      'Angular clinical system for dashboard, patient records, appointments, and settings.',
    overview:
      'An Angular clinical system focused on clinic operations. The app is organized into dashboard, patients, appointments, and settings features.',
    purpose:
      'Support clinic workflows for viewing a dashboard, managing patient records, and handling appointments.',
    technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3'],
    features: [
      'Dashboard route as the default entry point',
      'Patient list with create and edit forms',
      'Appointment list with create and edit forms',
      'Settings screen',
      'Feature-based structure with core, features, and shared folders',
    ],
    architecture:
      'Angular standalone routing with feature folders for dashboard, patients, appointments, and settings.',
    githubUrl: 'https://github.com/MahmoudGamal438/Dental-Clinical-System',
    liveUrl: 'https://dental-clinical-system-ten.vercel.app',
    category: 'angular',
    accent: '#7C9CFF',
    year: '2026',
    featured: true,
  },
  {
    slug: 'sign',
    name: 'Sign',
    shortDescription:
      'Angular application built with standalone components, models, services, and SCSS.',
    overview:
      'An Angular project structured around components, models, and services, styled with SCSS.',
    purpose:
      'Practice Angular application structure with typed models and service-based logic.',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML5'],
    features: [
      'Angular standalone application setup',
      'Component-based UI structure',
      'Dedicated models and services folders',
      'SCSS styling',
    ],
    githubUrl: 'https://github.com/MahmoudGamal438/sign',
    liveUrl: 'https://sign-dun-one.vercel.app',
    category: 'angular',
    accent: '#C9A227',
    year: '2026',
    featured: false,
  },
  {
    slug: 'fcai-el-azhar',
    name: 'FCAI El-Azhar',
    shortDescription:
      'Faculty website for FCAI El-Azhar, built as a frontend HTML project and deployed on Vercel.',
    overview:
      'A frontend faculty website for FCAI El-Azhar, implemented in HTML and published as a live site.',
    purpose:
      'Present faculty-related pages in a browser-ready frontend layout.',
    technologies: ['HTML5', 'CSS3'],
    features: [
      'Public faculty website',
      'HTML-based frontend implementation',
      'Live deployment on Vercel',
    ],
    githubUrl: 'https://github.com/MahmoudGamal438/FCAI-ElAzhar',
    liveUrl: 'https://fcai-el-azhar.vercel.app',
    category: 'frontend',
    accent: '#4FD1C5',
    year: '2026',
    featured: false,
  },
  {
    slug: 'coffee-shop',
    name: 'Coffee Shop Website',
    shortDescription:
      'Responsive coffee shop website with home, shop, cart, and contact pages.',
    overview:
      'A multi-page coffee shop website built with HTML, CSS, and JavaScript. It includes a landing page, product shop, cart behavior, and supporting pages.',
    purpose:
      'Present a coffee shop online with product browsing, cart actions, and a contact form layout.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Home page with hero section and shop intro',
      'Shop page displaying products',
      'Shopping cart with add and remove items',
      'About, services, experience, and contact pages',
      'Responsive layout for mobile, tablet, and desktop',
    ],
    githubUrl: 'https://github.com/MahmoudGamal438/Coffee',
    liveUrl: 'https://mahmoudgamal438.github.io/Coffee/',
    category: 'frontend',
    accent: '#D4A574',
    year: '2025',
    featured: false,
  },
  {
    slug: 'cruds-website',
    name: 'CRUDS Website',
    shortDescription:
      'Vanilla JavaScript CRUDS app for creating, searching, updating, and deleting product records.',
    overview:
      'A lightweight CRUDS application built with HTML, CSS, and JavaScript only. Users can manage product records in a table, including price calculations and search.',
    purpose:
      'Manage product data in the browser with create, read, update, delete, and search operations.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Create, read, update, and delete records',
      'Search by title or category',
      'Price, taxes, ads, discount, and total calculation',
      'Count and category fields',
      'Responsive table-based layout',
      'No external libraries',
    ],
    githubUrl: 'https://github.com/MahmoudGamal438/CRUDS-website',
    liveUrl: 'https://mahmoudgamal438.github.io/CRUDS-website/',
    category: 'frontend',
    accent: '#9B8AFB',
    year: '2025',
    featured: false,
  },
];
