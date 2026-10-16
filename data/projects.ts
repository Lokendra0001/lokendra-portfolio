export type ProjectStatus =
  | 'Personal Project'
  | 'Concept Project'
  | 'Demo Store'
  | 'Independent Project'
  | 'Client Project'

export type ProjectCategory =
  | 'business-websites'
  | 'shopify-ecommerce'
  | 'mern-applications'
  | 'dashboards'
  | 'ui-concepts'

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
  /** Only add entries you have genuinely encountered and documented. */
  challenges: { challenge: string; solution: string }[]
  nextSteps: string[]
  /** Honest note about what is real vs. sample / frontend-only. */
  dataNote: string
  preview: PreviewVariant
  /** Leave empty until the deployment or repository is public. */
  liveUrl: string
  repoUrl: string
  relatedService: string
}

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: 'business-websites', label: 'Business Websites' },
  { id: 'shopify-ecommerce', label: 'Shopify & Ecommerce' },
  { id: 'mern-applications', label: 'MERN Applications' },
  { id: 'dashboards', label: 'Dashboards' },
  { id: 'ui-concepts', label: 'UI Concepts' },
]

export const projects: Project[] = [
  {
    slug: 'salon-website-concept',
    title: "Darshan's Hairport — Website Concept",
    status: 'Concept Project',
    type: 'Business Website',
    categories: ['business-websites', 'ui-concepts'],
    featured: true,
    summary:
      'A concept website showing how a local salon or barbershop could present services, photos, location, and WhatsApp inquiries.',
    overview:
      'This concept explores how a neighbourhood salon or barbershop could build a credible online presence with a fast, mobile-first website. It focuses on the information visitors look for first: services, how to get there, and how to get in touch.',
    scenario:
      'Many local salons rely on word of mouth and social media posts. Visitors searching on their phones often struggle to find a clear list of services, opening details, directions, or a quick way to ask a question. This concept addresses that scenario using clearly marked sample content.',
    goals: [
      'Present services in a clear, scannable format',
      'Make directions and contact options reachable in one tap on mobile',
      'Create a premium visual identity appropriate for a grooming business',
      'Lay a basic on-page SEO foundation for local discovery',
    ],
    intendedUsers: [
      'Local customers browsing on their phones',
      'New visitors comparing nearby salons',
      'Returning customers looking for contact details',
    ],
    designDirection:
      'Charcoal, black, warm gold, and off-white with elegant serif headings and generous spacing to suggest a calm, premium in-store experience.',
    features: [
      'Salon-inspired visual design',
      'Service presentation with sample categories',
      'Photo gallery layout',
      'Business introduction section',
      'Contact information block',
      'Google Maps directions embed',
      'WhatsApp inquiry call-to-action',
      'Responsive mobile layout',
      'Basic SEO structure and metadata',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Google Maps Embed', 'WhatsApp Click-to-Chat'],
    decisions: [
      {
        title: 'Mobile-first contact actions',
        detail:
          'Call, WhatsApp, and directions buttons are prioritised near the top of the mobile layout because those are the most common actions for a local business visitor.',
      },
      {
        title: 'Static generation',
        detail:
          'Content rarely changes, so pages are statically generated for fast loading and low hosting overhead.',
      },
      {
        title: 'Sample content only',
        detail:
          'All copy, services, and imagery are placeholders. No business details are published without confirmation and approval.',
      },
    ],
    challenges: [],
    nextSteps: [
      'Add an online booking integration if a business requests one',
      'Connect a lightweight CMS so the owner can update services and prices',
      'Add structured data once real, verified business details are available',
    ],
    dataNote:
      'Concept project with sample content. It does not represent, and is not endorsed by, any real business.',
    preview: 'salon',
    liveUrl: '',
    repoUrl: '',
    relatedService: 'business-websites',
  },
  {
    slug: 'shopify-storefront-demo',
    title: 'Modern Shopify Store — Demo',
    status: 'Demo Store',
    type: 'Ecommerce Storefront',
    categories: ['shopify-ecommerce', 'ui-concepts'],
    featured: true,
    summary:
      'A storefront prototype demonstrating homepage, collections, product detail, navigation, and cart interface patterns.',
    overview:
      'A demonstration storefront built to show consistent ecommerce design and the key templates a typical store needs: homepage, collection listing, product detail, navigation, and a cart drawer.',
    scenario:
      'Small brands launching online often need a storefront that feels trustworthy and is easy to browse on mobile. This demo explores those patterns using fictional sample products.',
    goals: [
      'Demonstrate a clear browsing path from homepage to product to cart',
      'Show consistent typography, spacing, and product card design',
      'Make collection navigation and filtering easy on small screens',
    ],
    intendedUsers: ['Shoppers browsing on mobile and desktop', 'Store owners evaluating storefront layouts'],
    designDirection:
      'Clean, product-forward layout with neutral backgrounds, large imagery areas, and a single accent colour for primary actions.',
    features: [
      'Homepage with featured collections',
      'Product listing grid',
      'Product detail layout with variant selection',
      'Collection pages',
      'Header navigation and mobile menu',
      'Cart drawer interface',
      'Responsive layouts',
    ],
    stack: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'Shopify Theme Editor'],
    decisions: [
      {
        title: 'Theme-editor friendly sections',
        detail:
          'Sections are structured so a store owner can reorder and edit content from the Shopify theme editor without touching code.',
      },
      {
        title: 'Mobile-first product cards',
        detail: 'Product cards keep price and title readable at small sizes and avoid hover-only interactions.',
      },
    ],
    challenges: [],
    nextSteps: [
      'Connect real product data via the Storefront API',
      'Add product filtering by multiple attributes',
      'Test checkout flow end-to-end on a live development store',
    ],
    dataNote:
      'Storefront prototype using fictional products. There is no real inventory, customer reviews, or payment processing.',
    preview: 'store',
    liveUrl: '',
    repoUrl: '',
    relatedService: 'shopify-development',
  },
  {
    slug: 'business-operations-dashboard',
    title: 'Business Operations Dashboard',
    status: 'Personal Project',
    type: 'MERN Web Application',
    categories: ['mern-applications', 'dashboards'],
    featured: true,
    summary:
      'An admin dashboard demonstrating data tables, search, filters, CRUD workflows, form validation, and charts on sample data.',
    overview:
      'A personal project exploring how a small business could manage everyday records — such as orders, products, or customers — from a single admin dashboard built on the MERN stack.',
    scenario:
      'Small teams often manage operations in spreadsheets that become hard to search, share, and keep consistent. This project explores a structured alternative using sample data.',
    goals: [
      'Build reusable data-table, form, and filter components',
      'Implement create, read, update, and delete workflows against a REST API',
      'Validate input on both client and server',
      'Present summary information with simple charts',
    ],
    intendedUsers: ['Business owners', 'Operations staff', 'Administrators managing records'],
    designDirection:
      'Dense but readable dashboard layout with a persistent sidebar, clear table hierarchy, and restrained colour reserved for status and actions.',
    features: [
      'Dashboard overview with summary cards',
      'Searchable, filterable data tables',
      'Create, read, update, and delete workflows',
      'Forms with validation and error messages',
      'Charts based on sample data',
      'REST API integration',
      'Responsive layout',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Tailwind CSS'],
    decisions: [
      {
        title: 'Shared validation schema',
        detail: 'Validation rules are defined once and reused by the API and the forms to keep behaviour consistent.',
      },
      {
        title: 'Server-side pagination and filtering',
        detail: 'Filtering happens in the API so the interface stays fast as the dataset grows.',
      },
    ],
    challenges: [],
    nextSteps: [
      'Add authentication and role-based access',
      'Add CSV export for filtered views',
      'Write integration tests for API endpoints',
    ],
    dataNote: 'Uses generated sample data only. It contains no real customer or business information.',
    preview: 'dashboard',
    liveUrl: '',
    repoUrl: '',
    relatedService: 'mern-development',
  },
  {
    slug: 'taskflow-task-management',
    title: 'TaskFlow — Task Management Demo',
    status: 'Personal Project',
    type: 'MERN Web Application',
    categories: ['mern-applications', 'ui-concepts'],
    featured: false,
    summary:
      'A task management app with a board view, priorities, due dates, status tracking, and filtering.',
    overview:
      'TaskFlow is a personal project exploring task creation, prioritisation, and status tracking with a responsive board and list view.',
    scenario:
      'Small teams and individuals need a lightweight way to track work without the complexity of enterprise tools. TaskFlow explores the essential features for that use case.',
    goals: [
      'Support creating, editing, and moving tasks between statuses',
      'Make priorities and due dates visible at a glance',
      'Provide filtering by status, priority, and due date',
    ],
    intendedUsers: ['Individuals organising personal work', 'Small teams coordinating tasks'],
    designDirection:
      'Calm, focused interface with column-based boards, compact cards, and colour-coded priority labels with text equivalents for accessibility.',
    features: [
      'Task creation and editing',
      'Status tracking across board columns',
      'Priority labels',
      'Due dates',
      'Board and list views',
      'Filtering',
      'Responsive dashboard',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    decisions: [
      {
        title: 'Accessible priority indicators',
        detail: 'Priority is communicated with both colour and text so it remains clear for all users.',
      },
      {
        title: 'Keyboard-friendly status changes',
        detail: 'Tasks can change status through a menu as well as drag-and-drop, so the board works without a mouse.',
      },
    ],
    challenges: [],
    nextSteps: ['Add shared workspaces', 'Add due-date reminders', 'Add activity history for each task'],
    dataNote: 'Demo data only. Persistence details should be confirmed in the repository README.',
    preview: 'tasks',
    liveUrl: '',
    repoUrl: '',
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
