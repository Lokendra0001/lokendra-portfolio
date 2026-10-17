export type ProjectStatus =
  | 'Personal Project'
  | 'Concept Project'
  | 'Demo Store'
  | 'Independent Project'
  | 'Client Project'
  | 'NPM Package'
  | 'Package'

export type ProjectCategory =
  | 'mern-applications'
  | 'packages'
  | 'web-applications'

export type PreviewVariant = 'salon' | 'store' | 'dashboard' | 'tasks'

export type Project = {
  slug: string
  title: string
  status: ProjectStatus
  type: string
  categories: ProjectCategory[]
  featured: boolean
  summary: string
  overview: string
  scenario: string
  goals: string[]
  intendedUsers: string[]
  designDirection: string
  features: string[]
  stack: string[]
  decisions: { title: string; detail: string }[]
  challenges: { challenge: string; solution: string }[]
  nextSteps: string[]
  dataNote: string
  preview: PreviewVariant
  /** Screenshot shown in light theme (and in dark theme when imageDark is not set) */
  image?: string
  /** Optional screenshot for dark theme */
  imageDark?: string
  /** Live deployment URL */
  liveUrl: string
  /** Source code repository URL */
  repoUrl: string
  /** LinkedIn showcase URL */
  linkedinUrl?: string
  relatedService: string
}

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: 'mern-applications', label: 'MERN Applications' },
  { id: 'packages', label: 'NPM Packages' },
  { id: 'web-applications', label: 'Web Applications' },
]

export const projects: Project[] = [
  {
    slug: 'veloxchat-realtime-chat',
    title: 'VeloxChat — Real-Time Messaging Platform',
    status: 'Personal Project',
    type: 'Full-Stack MERN Web Application',
    categories: ['mern-applications', 'web-applications'],
    featured: true,
    image: '/images/projects/veloxchat.png',
    summary:
      'High-performance real-time messaging application with bi-directional WebSocket communication, instant delivery status, and responsive dark-mode UI.',
    overview:
      'VeloxChat is an instantaneous collaboration application engineered with React, Node.js, and WebSocket architecture. Designed to handle concurrent live conversations with low latency and clean message delivery.',
    scenario:
      'Remote teams and distributed developers frequently deal with cumbersome, slow messaging clients. VeloxChat was created to deliver an agile, ultra-responsive chatting experience with instant notification and presence indicators.',
    goals: [
      'Enable sub-50ms bi-directional message dispatch using Socket.io and Node.js',
      'Create an intuitive, mobile-first dark UI that feels responsive and distraction-free',
      'Support user sessions, room management, and persistent message history with MongoDB',
      'Deploy full-stack architecture with production reliability on Vercel',
    ],
    intendedUsers: [
      'Remote teams needing lightweight communication',
      'Developers collaborating on code and tasks',
      'Community members joining dedicated topic rooms',
    ],
    designDirection:
      'Emerald neon highlights over deep space obsidian background, minimal clutter, intuitive channel drawer, and clean chat bubbles with timestamps.',
    features: [
      'Real-time bi-directional messaging with Socket.io',
      'Online user presence and typing activity indicators',
      'Group channels and direct peer messaging',
      'Persistent MongoDB message storage and pagination',
      'JWT session management and secure authentication',
      'Fluid responsive mobile drawer and desktop multi-column view',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'Tailwind CSS', 'Vercel'],
    decisions: [
      {
        title: 'Event-driven Socket pooling',
        detail:
          'Used room-scoped socket broadcasts to avoid unnecessary message traffic to idle users across different channels.',
      },
      {
        title: 'Optimistic UI message insertion',
        detail:
          'Messages appear immediately in the sender timeline before server round-trip acknowledgement for instantaneous feel.',
      },
    ],
    challenges: [
      {
        challenge: 'Re-establishing socket connection on mobile network toggling',
        solution:
          'Configured automatic exponential backoff reconnection with state reconciliation to catch up on missed messages.',
      },
    ],
    nextSteps: [
      'Add end-to-end client-side encryption for 1-on-1 private messaging',
      'Introduce media file upload and image previews via cloud storage',
    ],
    dataNote:
      'Live full-stack deployment hosted on Vercel with real-time socket connectivity.',
    preview: 'tasks',
    liveUrl: 'https://veloxchat.vercel.app',
    repoUrl: 'https://github.com/Lokendra0001/VeloxChat',
    linkedinUrl: 'https://www.linkedin.com/in/lokendrarajpurohit',
    relatedService: 'mern-development',
  },
  {
    slug: 'jobhunt-recruitment-platform',
    title: 'JobHunt — Full-Stack Recruitment Portal',
    status: 'Personal Project',
    type: 'MERN Web Application',
    categories: ['mern-applications', 'web-applications'],
    featured: true,
    image: '/images/projects/jobhunt.png',
    summary:
      'Comprehensive recruitment platform connecting job seekers with verified employers, featuring real-time application tracking and recruiter admin dashboards.',
    overview:
      'JobHunt is an end-to-end hiring portal built on the MERN stack with Redux state management. Provides job posting tools for recruiters and advanced search, filtering, and application workflows for candidates.',
    scenario:
      'Job seekers often struggle with cluttered job boards and opaque hiring updates, while employers spend excessive time filtering unqualified applicants. JobHunt streamlines job discovery and application tracking into a focused, modern interface.',
    goals: [
      'Deliver a streamlined dual-role system for candidates and hiring managers',
      'Implement fast full-text job search with location, salary, and job-type filtering',
      'Manage complex multi-step application states with Redux Toolkit',
      'Provide recruiters with candidate evaluation and status management dashboards',
    ],
    intendedUsers: [
      'Job seekers filtering career opportunities',
      'Recruiters creating and managing job postings',
      'Hiring teams reviewing candidate resumes and interview stages',
    ],
    designDirection:
      'Modern professional layout with crisp card typography, status badges, scannable salary tags, and structured employer detail views.',
    features: [
      'Candidate resume submission and application history tracking',
      'Employer dashboard with applicant status management',
      'Multi-filter search (remote, full-time, salary ranges, skills)',
      'Role-based access control (Admin, Recruiter, Applicant)',
      'Redux-powered reactive filtering and state management',
      'Responsive design across mobile and desktop devices',
    ],
    stack: ['React', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    decisions: [
      {
        title: 'Redux Toolkit state slice architecture',
        detail:
          'Separated user auth, job listings, and applicant data into isolated slices with async thunks for predictable state transitions.',
      },
      {
        title: 'Compound indexing in MongoDB',
        detail:
          'Created compound indexes on job category, location, and post date to ensure instant search queries under large datasets.',
      },
    ],
    challenges: [
      {
        challenge: 'Synchronizing applicant review status across both candidate and recruiter views',
        solution:
          'Implemented optimistic state updates in Redux with server verification to keep status labels consistent.',
      },
    ],
    nextSteps: [
      'Implement automated email alerts for matching job postings',
      'Add PDF resume parsing for auto-filling profile credentials',
    ],
    dataNote:
      'Complete live deployment on Vercel with REST API backend and MongoDB Atlas database.',
    preview: 'dashboard',
    liveUrl: 'https://jobhunt-pi-nine.vercel.app',
    repoUrl: 'https://github.com/Lokendra0001/JobHunt',
    linkedinUrl: 'https://www.linkedin.com/in/lokendrarajpurohit',
    relatedService: 'mern-development',
  },
  {
    slug: 'cineverse-movie-platform',
    title: 'Cineverse — Movie Discovery & Entertainment Platform',
    status: 'Personal Project',
    type: 'Entertainment Web Application',
    categories: ['mern-applications', 'web-applications'],
    featured: true,
    image: '/images/projects/cineverse.png',
    summary:
      'Interactive entertainment portal for discovering trending movies and TV shows, browsing cast catalogs, streaming previews, and exploring cinema recommendations.',
    overview:
      'Cineverse is a dynamic entertainment exploration platform built with React, Redux, and modern styling. Delivers seamless catalog navigation, rich movie detail overviews, and responsive streaming interfaces.',
    scenario:
      'Movie lovers need an intuitive, distraction-free space to browse trending titles, watch previews, and manage their watchlists across multiple genres.',
    goals: [
      'Build responsive media catalog with search, filter, and genre categorization',
      'Manage global search and watchlist bookmarks with Redux Toolkit',
      'Provide fluid dark-mode cinematic interface optimized for high engagement',
    ],
    intendedUsers: [
      'Cinema enthusiasts and streaming watchers',
      'Users looking for personalized movie recommendations',
    ],
    designDirection:
      'Deep cinema dark theme with radiant golden accents, high-contrast poster cards, and immersive full-bleed preview layouts.',
    features: [
      'Live keyword search and category filtering for movies and TV shows',
      'Interactive movie details with genre tags and descriptions',
      'Global state management with Redux Toolkit',
      'Responsive dark cinema UI across all viewports',
    ],
    stack: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Vite', 'RESTful APIs', 'Vercel'],
    decisions: [
      {
        title: 'Centralized Redux search slice',
        detail:
          'Routed keyword queries through a single store slice to instantly synchronize cross-page movie results.',
      },
    ],
    challenges: [],
    nextSteps: ['Add ticket booking seat-selection visualization', 'Integrate trailer video player modals'],
    dataNote: 'Showcased on LinkedIn profile.',
    preview: 'dashboard',
    liveUrl: '',
    repoUrl: '',
    linkedinUrl: 'https://www.linkedin.com/in/lokendrarajpurohit',
    relatedService: 'mern-development',
  },
  {
    slug: 'travelvista-tour-travel-portal',
    title: 'TravelVista — Tour & Travel Exploration Agency',
    status: 'Personal Project',
    type: 'Tour & Travel Web Application',
    categories: ['mern-applications', 'web-applications'],
    featured: true,
    image: '/images/projects/travelvista.png',
    summary:
      'Full-stack tour and travel agency platform featuring AI trip planning, hotel discovery, vacation rental booking, verified reviews, and interactive adventure guides.',
    overview:
      'TravelVista is an adventure discovery and travel booking web platform designed to help travelers find destinations, explore recommended hotels, and organize custom itineraries with AI assistance.',
    scenario:
      'Travelers require a modern, comprehensive agency experience that unifies accommodation search, destination guides, and tour reservations into a single smooth flow.',
    goals: [
      'Provide destination search with hotel, flight, and restaurant categories',
      'Integrate AI trip builder recommendations for customized itineraries',
      'Create high-converting, visually rich layout with editorial destination highlights',
    ],
    intendedUsers: [
      'Travelers exploring holiday destinations and hotel reservations',
      'Tour agency clients booking custom vacation packages',
    ],
    designDirection:
      'Fresh travel lifestyle aesthetic with emerald call-to-actions, clean editorial typography, and high-resolution destination showcases.',
    features: [
      'Multi-category exploration: Hotels, Flights, Restaurants, Vacation Rentals',
      'AI Trip Builder feature for generating instant travel ideas',
      'Traveler review ratings and curated Best of the Best hotel lists',
      'Full responsive experience across mobile and desktop devices',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Vercel'],
    decisions: [
      {
        title: 'Modular category navigation',
        detail:
          'Structured travel categories into independent filters to support rapid browsing without full page refreshes.',
      },
    ],
    challenges: [],
    nextSteps: ['Connect Stripe Checkout for online deposit payments', 'Add downloadable PDF booking invoices'],
    dataNote: 'Live deployment running on Vercel.',
    preview: 'salon',
    liveUrl: 'https://travelvista-ten.vercel.app',
    repoUrl: 'https://github.com/Lokendra0001/TravelVista',
    linkedinUrl: 'https://www.linkedin.com/in/lokendrarajpurohit',
    relatedService: 'mern-development',
  },
  {
    slug: 'create-mern-boilerkit-npm',
    title: 'create-mern-boilerkit — CLI Boilerplate Generator',
    status: 'NPM Package',
    type: 'NPM Package',
    categories: ['packages', 'mern-applications'],
    featured: true,
    image: '/images/projects/create-mern-boilerkit-light.png',
    imageDark: '/images/projects/create-mern-boilerkit.png',
    summary:
      'Production-ready CLI starter kit published on npm to instantly scaffold a modern MERN boilerplate with Express, JWT authentication, Mongoose, and React + Vite.',
    overview:
      'create-mern-boilerkit is an open-source CLI utility distributed through npm and npx. It allows developers to generate a production-ready, fully architected MERN stack project in seconds with a single terminal command.',
    scenario:
      'Setting up a new full-stack MERN application often requires hours of repetitive scaffolding for backend routing, JWT auth, MongoDB connections, CORS, and Vite configs. create-mern-boilerkit automates this completely.',
    goals: [
      'Enable instant zero-config project bootstrapping via `npx create-mern-boilerkit <app-name>`',
      'Provide a complete backend JWT authentication system with bcrypt password hashing',
      'Include a clean, responsive React 18 + Vite frontend with Tailwind CSS and Axios pre-configured',
      'Maintain an active open-source npm package with clean documentation and version releases',
    ],
    intendedUsers: [
      'Full-stack developers bootstrapping new web apps',
      'Students and engineers learning production MERN architecture',
      'Teams prototyping new MVPs in minutes',
    ],
    designDirection:
      'Terminal and CLI developer experience with colored logging, step-by-step progress spinners, and clear directory tree structure.',
    features: [
      'Single-command scaffolding: `npx create-mern-boilerkit my-app`',
      'Complete Express backend with user signup, signin, and JWT verification middleware',
      'Modular React 18 + Vite frontend with React Router DOM and Axios utilities',
      'Pre-configured MongoDB Mongoose connection and environment variable templates',
      'Published and actively maintained on the public npm registry',
    ],
    stack: ['Node.js', 'CLI', 'NPM Package', 'Express.js', 'MongoDB', 'React 18', 'Vite', 'JWT Authentication'],
    decisions: [
      {
        title: 'NPM bin execution with npx',
        detail:
          'Configured executable bin entry in package.json to enable global npx execution without requiring local installation.',
      },
    ],
    challenges: [],
    nextSteps: ['Add optional TypeScript template flag', 'Support Docker compose generation'],
    dataNote: 'Published package available worldwide on npm registry.',
    preview: 'dashboard',
    liveUrl: 'https://www.npmjs.com/package/create-mern-boilerkit',
    repoUrl: 'https://github.com/Lokendra0001/mern-boiler-template',
    linkedinUrl: 'https://www.linkedin.com/in/lokendrarajpurohit',
    relatedService: 'mern-development',
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(slug: string, limit = 2) {
  const current = getProject(slug)
  if (!current) return []
  return projects
    .filter((p) => p.slug !== slug)
    .map((p) => ({ p, score: p.categories.filter((c) => current.categories.includes(c)).length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ p }) => p)
}

export function getCategoryLabel(id: ProjectCategory) {
  return projectCategories.find((c) => c.id === id)?.label ?? id
}
