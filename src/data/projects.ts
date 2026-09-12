export type Project = {
  slug: string
  title: string
  subtitle: string
  year: string
  category: string
  role: string
  stack: string[]
  shortDescription: string

  overview: string
  problem: string
  solution: string

  highlights: string[]
  responsibilities: string[]
  learnings: string[]

  accent: string
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    slug: 'smartnail',
    title: 'SmartNail',
    subtitle: 'AI-assisted nail booking platform',
    year: '2026',
    category: 'Full-stack Product',
    role: 'Full-stack Developer',
    stack: [
      'React',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Prisma',
      'JWT',
    ],

    shortDescription:
      'A full-stack nail booking platform that connects customers and nail artists through availability management, booking flows and role-based experiences.',

    overview:
      'SmartNail is a personal full-stack project built around a real nail salon booking scenario. The goal is to turn a traditionally manual booking process into a structured digital workflow for both customers and nail artists.',

    problem:
      'Many small nail businesses still manage bookings through social media messages, which makes availability difficult to track and creates unnecessary back-and-forth communication.',

    solution:
      'I designed and built a booking platform where customers can browse artists, view available time slots and create appointments, while artists can manage their profiles, availability and incoming bookings.',

    highlights: [
      'User registration, login and JWT-based authentication',
      'Role-based experiences for customers and artists',
      'Artist listing and detailed profile pages',
      'Availability and time-slot management',
      'Appointment creation with booking validation',
      'PostgreSQL database with Prisma ORM',
      'REST APIs built with NestJS',
    ],

    responsibilities: [
      'Designed the database schema for users, artists, availability and appointments',
      'Built REST APIs with NestJS controllers and services',
      'Implemented authentication using JWT',
      'Connected the React frontend with backend APIs',
      'Built artist discovery, detail and booking interfaces',
      'Added validation and booking conflict logic',
      'Created the product UI and interaction flow',
    ],

    learnings: [
      'How frontend, backend and database layers work together in a real application',
      'How authentication and authorization affect product architecture',
      'How to model relational data with Prisma and PostgreSQL',
      'How to structure a larger React and NestJS application',
      'How to move from a prototype into a usable MVP',
    ],

    accent: '#f3d7df',
  },

  {
    slug: 'ai-visibility-analytics',
    title: 'AI Visibility Analytics',
    subtitle: 'AI-powered advertising analysis platform',
    year: '2026',
    category: 'Capstone Project',
    role: 'Frontend & AI Integration',
    stack: [
      'React',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'LangChain',
      'LLM',
      'Redis',
    ],

    shortDescription:
      'A client-facing analytics platform that transforms advertising data into structured AI-assisted insights and interactive reports.',

    overview:
      'AI Visibility Analytics was developed as an eight-person university capstone project for an external client. The system transforms advertising data into searchable, comparable and structured reports.',

    problem:
      'The client previously relied heavily on offline PDF analysis and manual workflows, which made searching, comparing and aggregating advertising information difficult.',

    solution:
      'Our team designed an online platform combining data collection, structured storage, LLM-based extraction and interactive reporting to make advertising research easier to navigate and reuse.',

    highlights: [
      'Integrated advertising data from external APIs',
      'LLM-assisted structured attribute extraction',
      'Dashboard and report interfaces',
      'Domain and portfolio comparison workflows',
      'Prompt refinement for more consistent AI outputs',
      'PostgreSQL-backed data storage',
      'Redis caching and backend API integration',
    ],

    responsibilities: [
      'Translated client requirements into Figma prototypes',
      'Built major React pages and reusable frontend components',
      'Integrated frontend interfaces with backend APIs',
      'Implemented dashboard and reporting workflows',
      'Worked on LLM prompt engineering for structured extraction',
      'Created API documentation and testing materials',
      'Collaborated with an eight-person development team',
    ],

    learnings: [
      'How to translate an unclear business brief into product requirements',
      'How LLM output needs structure, validation and iteration',
      'How to collaborate across frontend, backend and AI workflows',
      'How to communicate progress with a real external client',
    ],

    accent: '#dce7f3',
  },

  {
    slug: 'hospital-management',
    title: 'Hospital Management System',
    subtitle: 'Healthcare management web application',
    year: '2025',
    category: 'Web Application',
    role: 'Developer',
    stack: ['React', 'JavaScript', 'REST API', 'SQL'],

    shortDescription:
      'A web application designed to organise hospital-related workflows and structured healthcare information.',

    overview:
      'This project focused on building a structured web application around healthcare management workflows.',

    problem:
      'Healthcare systems involve multiple types of users and large amounts of structured information that need to be organised clearly.',

    solution:
      'The project used a web-based interface and structured data model to support common hospital management operations.',

    highlights: [
      'Structured frontend interfaces',
      'CRUD workflows',
      'API-based data interaction',
      'Relational data modelling',
    ],

    responsibilities: [
      'Built frontend pages',
      'Implemented data interactions',
      'Worked with structured application state',
      'Contributed to application logic',
    ],

    learnings: [
      'Understanding CRUD application architecture',
      'Working with structured relational data',
      'Breaking large workflows into smaller UI modules',
    ],

    accent: '#e6e1d9',
  },
]

export const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug)
}