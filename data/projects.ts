export type ProjectStatus =
  | 'Personal Project'
  | 'Concept Project'
  | 'Demo Store'
  | 'Independent Project'
  | 'Client Project'
  | 'NPM Package'
  | 'Package'

export type ProjectCategory =
  | 'web-applications'
  | 'client-websites'
  | 'shopify-stores'

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
  /** Screenshot shown in light theme (and in dark theme when imageDark is not set) */
  image: string
  /** Optional screenshot for dark theme */
  imageDark?: string
  /** Extra product screenshots shown on the case-study page */
  gallery?: { src: string; width: number; height: number; caption: string }[]
  /** Live deployment URL */
  liveUrl: string
  /** Source code repository URL */
  repoUrl: string
  /** LinkedIn showcase URL */
  linkedinUrl?: string
  relatedService: string
}

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: 'web-applications', label: 'Web Applications' },
  { id: 'client-websites', label: 'Client Websites' },
  { id: 'shopify-stores', label: 'Shopify Stores' },
]

export const projects: Project[] = [
  {
    slug: 'aurachat-instagram-automation',
    title: 'AuraChat — Instagram DM & Comment Automation',
    status: 'Personal Project',
    type: 'SaaS Web Application',
    categories: ['web-applications'],
    featured: true,
    image: '/images/projects/aurachat.png',
    gallery: [
      {
        src: '/images/projects/aurachat-dashboard.webp',
        width: 1918,
        height: 869,
        caption:
          'Dashboard: messages sent, automations triggered and conversations over the last 7 days, plus connected Instagram, Messenger and WhatsApp channels. Account details replaced with sample data.',
      },
    ],
    summary:
      'Automation platform that answers Instagram comments, DMs, story replies and live chats — plus Facebook Page and WhatsApp messages — within seconds using keyword triggers.',
    overview:
      'AuraChat connects to Instagram, Facebook Pages and WhatsApp through the official Meta APIs and replies automatically whenever a follower uses a chosen keyword. Links can be gated behind a follow or an email, and timed follow-up sequences keep the conversation going.',
    scenario:
      'Creators and small businesses lose buyers in the comment section: someone asks for a price or a link and waits hours for a human reply. AuraChat answers every comment and message the moment it arrives, day or night.',
    goals: [
      'Let anyone connect an account and publish a first automation in under two minutes',
      'Cover every surface a follower reaches out from — comments, DMs, stories, mentions and live chats',
      'Use only official Meta APIs so accounts stay safe and passwords are never stored',
      'Keep the core automation suite completely free for creators and small businesses',
    ],
    intendedUsers: [
      'Creators delivering freebies and growing followers',
      'Online stores selling from reels and live streams',
      'Coaches and consultants filling calendars from DMs',
      'Local businesses answering on WhatsApp and Messenger',
    ],
    designDirection:
      'Calm editorial look with a serif display headline, soft gradient glows, light and dark themes, and live comment-to-DM cards that show the product working.',
    features: [
      'Keyword-triggered replies on Instagram posts, reels and DMs',
      'Story replies, story mentions, shares and live broadcast comment triggers',
      'Facebook Page comments and Messenger replies from the same dashboard',
      'WhatsApp keyword replies and step-by-step flows with human handoff',
      'Follow and email gates with timed follow-up DM sequences',
      'Contacts list with follow status and per-automation analytics',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Meta Graph API', 'WhatsApp Cloud API', 'Webhooks', 'Vercel'],
    decisions: [
      {
        title: 'Official Meta APIs only',
        detail:
          "Accounts connect through Meta's sign-in, so no passwords are stored and users can disconnect in one click.",
      },
      {
        title: 'One rule engine for every channel',
        detail:
          'Comments, DMs, stories, live chats, Messenger and WhatsApp all feed the same keyword-trigger funnel, so one automation behaves the same everywhere.',
      },
    ],
    challenges: [
      {
        challenge: 'Replying within seconds across many event sources',
        solution:
          'Incoming events are received through webhooks and matched against keyword rules immediately, so replies go out without polling.',
      },
      {
        challenge: "Meta's messaging rules: replies can fail outside the 24-hour window or without the right permission",
        solution:
          'Rejected sends are tracked and surfaced on the dashboard with the likely cause, so users can see and fix them instead of losing replies silently.',
      },
    ],
    nextSteps: ['Advanced analytics dashboards', 'Agency workspaces for managing multiple client accounts'],
    dataNote: 'Live deployment on Vercel with a working demo.',
    liveUrl: 'https://aurachat-frontend-wz7l.vercel.app',
    repoUrl: '',
    relatedService: 'ai-automation',
  },
  {
    slug: 'bhandari-techfab-gfrp',
    title: 'Bhandari TechFab — GFRP Rebar Manufacturer Website',
    status: 'Client Project',
    type: 'Corporate Product Website',
    categories: ['client-websites', 'web-applications'],
    featured: true,
    image: '/images/projects/bhandari-techfab.png',
    summary:
      'Premium corporate website for a Glass Fiber Reinforced Polymer (GFRP) rebar manufacturer, with an interactive 3D product model, GFRP-vs-steel comparison, a rebar calculator and a knowledge hub.',
    overview:
      'Bhandari TechFab LLP manufactures corrosion-free GFRP rebars, mesh, bends and custom fabricated products as a replacement for steel. The site explains a new material to engineers and buyers through 3D visuals, side-by-side technical metrics, a calculator, certificates and project case studies.',
    scenario:
      'GFRP is still new to many builders, who default to steel. The website had to educate as much as sell: show why GFRP is stronger, lighter and rust-free, prove it with certificates and data, and make it easy to estimate quantities and get in touch.',
    goals: [
      'Position the brand as a premium, engineering-led GFRP manufacturer',
      'Explain GFRP benefits over steel with clear technical comparisons',
      'Help engineers estimate requirements with a built-in calculator',
      'Generate enquiries through brochure downloads and contact forms',
    ],
    intendedUsers: [
      'Civil engineers and structural consultants',
      'Contractors and builders comparing reinforcement options',
      'Infrastructure buyers and distributors',
    ],
    designDirection:
      'Dark, premium industrial look with large tight-tracked headlines, a bold yellow accent, a scrolling marquee of product claims, smooth scrolling and a WebGL 3D rebar model.',
    features: [
      'Interactive 3D GFRP product model rendered with Three.js',
      '18-point attribute grid explaining GFRP properties',
      'GFRP vs metal rebar comparison table with key metrics',
      'Rebar calculator for estimating requirements',
      'Product pages for rebars, mesh, bends and custom fabrication',
      'Knowledge hub, blogs, certificates, projects and downloadable brochure',
    ],
    stack: ['Next.js', 'React', 'Three.js', 'Lenis', 'Tailwind CSS', 'Vercel'],
    decisions: [
      {
        title: '3D model instead of static product photos',
        detail:
          'A WebGL model lets visitors see the rebar up close, which makes an unfamiliar material feel tangible and premium.',
      },
      {
        title: 'Education-first content structure',
        detail:
          'Comparison tables, a calculator and a knowledge hub answer engineers’ technical questions before they reach out, so enquiries arrive better qualified.',
      },
    ],
    challenges: [
      {
        challenge: 'Keeping a heavy 3D scene from slowing down the first view',
        solution:
          'The hero text and calls-to-action render first while the 3D model loads separately, so the page is usable before the WebGL scene is ready.',
      },
    ],
    nextSteps: [],
    dataNote: 'Live website at bhandaritechfab.com.',
    liveUrl: 'https://www.bhandaritechfab.com',
    repoUrl: '',
    relatedService: 'business-websites',
  },
  {
    slug: 'ijarmy-research-journal',
    title: 'IJARMY — International Research Journal Platform',
    status: 'Client Project',
    type: 'Full-Stack Journal Publishing Platform',
    categories: ['client-websites', 'web-applications'],
    featured: true,
    image: '/images/projects/ijarmy.png',
    summary:
      'Publishing platform for a UGC-recognised, peer-reviewed multidisciplinary journal (ISSN 2583-794X) with online paper submission, author accounts and current and past issue archives.',
    overview:
      'IJARMY (International Journal for Advanced Research in Multidisciplinary) is an open-access quarterly journal published by Jump2Learn Publication, India. The platform handles everything from author sign-in and manuscript submission to editorial board listings and issue archives, backed by a dedicated REST API.',
    scenario:
      'A growing academic journal needed more than a static page: authors had to submit papers online, readers needed free access to every issue, and the editorial team needed one place to publish guidelines, policies and forms.',
    goals: [
      'Give authors a simple online submission flow with their own accounts',
      'Publish current and past issues openly for readers',
      'Present journal credentials — ISSN, indexing and review process — clearly to build trust',
      'Keep author guidelines, policies and downloadable forms in one place',
    ],
    intendedUsers: [
      'Researchers, scholars and academicians submitting papers',
      'Readers browsing open-access issues',
      'Editors and reviewers managing the journal',
    ],
    designDirection:
      'Classic academic journal layout with a saffron and navy palette, a prominent masthead, sidebar widgets for updates and downloads, and a clear details table for journal facts.',
    features: [
      'Author sign-in and online manuscript submission',
      'Current and past issue archives with open access',
      'Editorial board and reviewer directories',
      'Author guidelines, research areas, plagiarism, correction and publication-charge policies',
      'Downloadable copyright form and paper template',
      'Journal updates, impact factor and indexing details',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'REST API', 'Nginx', 'Vercel'],
    decisions: [
      {
        title: 'Separate frontend and API',
        detail:
          'The Next.js frontend runs on Vercel while a versioned REST API (api/v1) on its own server handles accounts, submissions and issue data.',
      },
      {
        title: 'Policy pages as first-class routes',
        detail:
          'Each guideline and policy has its own page so authors can find and link exactly what they need before submitting.',
      },
    ],
    challenges: [],
    nextSteps: ['Reviewer dashboard for tracking manuscript status', 'DOI assignment for published articles'],
    dataNote: 'Live journal platform at ijarmy.com.',
    liveUrl: 'https://www.ijarmy.com',
    repoUrl: '',
    relatedService: 'mern-development',
  },
  {
    slug: 'shree-samarth-polytechnic',
    title: 'Shree Samarth Polytechnic — College Website & Portal',
    status: 'Client Project',
    type: 'Educational Institute Website',
    categories: ['client-websites', 'web-applications'],
    featured: true,
    image: '/images/projects/samarth.png',
    gallery: [
      {
        src: '/images/projects/samarth-dashboard.webp',
        width: 1920,
        height: 841,
        caption:
          'Admin console: new student and teacher accounts, active users by role, people by department and subject coverage.',
      },
    ],
    summary:
      'Full college website for a diploma engineering institute in Parner, Ahmednagar, with programs, admissions, academics, placements, a notice board, online applications and a portal login.',
    overview:
      'Shree Samarth Polytechnic offers four three-year diploma programs. The site brings together everything students and parents need: programs, admissions and fees, academics and results, training and placement, industry connect and campus life, with a portal login and live notices.',
    scenario:
      'Prospective students and parents had no single, trustworthy place to compare programs, check fees and intake, or apply. The new site puts all of it in one structured, mobile-friendly place and moves admissions online.',
    goals: [
      'Present all four diploma programs with their labs and specialisations',
      'Move admission enquiries and applications online',
      'Publish notices, results and academic calendars without developer help',
      'Show placement results and industry tie-ups to build trust with parents',
    ],
    intendedUsers: [
      'Prospective students and parents comparing colleges',
      'Current students checking notices, syllabus and results',
      'College staff publishing notices and updates',
    ],
    designDirection:
      'Institutional and trustworthy: a notice ticker, a full-width campus photo slider, bold stat counters and clearly grouped mega-menus for a large amount of content.',
    features: [
      'Program pages for Computer, Mechanical, Civil and E&TC diplomas',
      'Admissions section with intake, procedure, brochure, fees and online application',
      'Academics: calendar, syllabus, examinations, results and faculty',
      'Training & placement statistics, recruiters and career opportunities',
      'Industry connect: MoUs, workshops, internships and industrial visits',
      'Notice board and authenticated portal login',
      'Admin console with dashboards for accounts, departments, admissions, faculty and attendance',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Next.js API Routes', 'Authentication', 'Vercel'],
    decisions: [
      {
        title: 'Mega-menu information architecture',
        detail:
          'More than 50 pages are grouped under About, Programs, Admissions, Academics, Placements and Campus Life so visitors reach any page in two clicks.',
      },
      {
        title: 'Dynamic notices through API routes',
        detail:
          'Notices and portal sign-in are served by Next.js API routes, so staff can publish updates without redeploying the site.',
      },
    ],
    challenges: [],
    nextSteps: ['Online fee payment', 'Student dashboard with attendance and results'],
    dataNote: 'Live deployment on Vercel.',
    liveUrl: 'https://samarth-institute-sage.vercel.app',
    repoUrl: '',
    relatedService: 'business-websites',
  },
  {
    slug: 'ms-patil-construction',
    title: 'Ms Patil Construction — Infrastructure Contractor Website',
    status: 'Client Project',
    type: 'Corporate Business Website',
    categories: ['client-websites'],
    featured: true,
    image: '/images/projects/ms-patil-construction.png',
    summary:
      'Corporate website for a PWD Class IV registered civil contractor in Dhule, Maharashtra, presenting 20+ years of infrastructure work, in-house manufacturing plants and projects across five states.',
    overview:
      'A multi-page business website for M/S Chetankumar Bhagwan Suryawanshi (Ms Patil Construction), covering services, sectors, a project portfolio, a blog and quotation requests. Built to win trust with government bodies and industrial clients.',
    scenario:
      'The firm runs its own stone crusher, ready-mix concrete plant, sand processing unit and fly ash brick factory, but had no online presence that showed this scale. The site turns two decades of work into a credible, easy-to-browse portfolio for tender and industrial clients.',
    goals: [
      'Present the firm as a credible, compliant government and industrial contractor',
      'Showcase vertical integration — crusher, RMC, sand and brick plants — as a key advantage',
      'Organise work by sector: railway, industrial, government & civic, residential & institutional',
      'Turn visitors into enquiries through quotation and contact calls-to-action',
    ],
    intendedUsers: [
      'Government departments and PWD tender officers',
      'Industrial clients planning plants and heavy foundations',
      'Builders and developers buying ready-mix concrete',
    ],
    designDirection:
      'Bold industrial look with full-bleed site photography in a hero slider, heavy uppercase headlines, a construction-green accent and animated stat counters.',
    features: [
      'Hero slider with real site and plant photography',
      'Services, sectors and project portfolio pages',
      'Animated counters for experience, turnover, projects and states',
      'Sector mega-menu: railway, industrial, government and residential',
      'Blog section and contact / quotation request flow',
      'Fully responsive layout with top contact bar',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    decisions: [
      {
        title: 'Sector-based information architecture',
        detail:
          'Grouped services and projects by sector so tender officers and industrial buyers can jump straight to relevant past work.',
      },
      {
        title: 'Proof before pitch',
        detail:
          'Registrations, owned machinery and plant capacities are placed up front, since compliance is what government clients check first.',
      },
    ],
    challenges: [],
    nextSteps: ['Add downloadable company profile and certificates', 'Expand the project gallery with case photos'],
    dataNote: 'Live client website deployed on Vercel.',
    liveUrl: 'https://ms-patil-client.vercel.app',
    repoUrl: '',
    relatedService: 'business-websites',
  },
  {
    slug: 'gabriel-waves-shopify-store',
    title: 'Gabriel Waves — Chakra Healing Shopify Store',
    status: 'Client Project',
    type: 'Shopify E-commerce Store',
    categories: ['shopify-stores', 'client-websites'],
    featured: true,
    image: '/images/projects/gabriel-waves.png',
    summary:
      'Shopify store for a wellness brand selling chakra healing pyramids, pendants and essential oils, with collection-led shopping, GST-inclusive pricing, customer reviews, chakra scanning and bulk-order enquiries.',
    overview:
      'Gabriel Waves helps people balance their chakras with healing products for each of the seven chakras. The custom Shopify storefront presents three product lines — pyramids, pendants and essential oils — alongside reviews, a blog, a chakra scanning page and WhatsApp support.',
    scenario:
      'The brand sells high-value spiritual wellness products that buyers need to trust before paying. The store pairs warm, premium product imagery with real customer reviews, clear pricing and quick WhatsApp contact to turn interest into orders.',
    goals: [
      'Present each chakra product line clearly across pyramids, pendants and oils',
      'Show sale pricing with GST included so buyers know the final price',
      'Build trust with customer reviews and educational blog content',
      'Capture bulk orders and enquiries through dedicated pages and WhatsApp',
    ],
    intendedUsers: [
      'Wellness and spirituality buyers across India',
      'Customers looking for chakra healing products as gifts',
      'Bulk buyers and resellers',
    ],
    designDirection:
      'Warm saffron and gold palette with rich lifestyle banners, a serif display font and rounded product cards for a premium, spiritual feel.',
    features: [
      'Hero banner slider with product campaigns',
      'Collections for healing pyramids, pendants and essential oils',
      'Product cards with sale price, compare-at price and GST note',
      'Customer review carousel with ratings',
      'Chakra scanning, blog, bulk order and support pages',
      'Floating WhatsApp enquiry button and social links',
    ],
    stack: ['Shopify', 'Liquid', 'Shopify Theme Editor', 'JavaScript', 'CSS'],
    decisions: [
      {
        title: 'Collection-led home page',
        detail:
          'The home page is built from collection sections — one per product line — so shoppers can compare all seven chakra variants side by side.',
      },
      {
        title: 'WhatsApp as the main support channel',
        detail:
          'A floating WhatsApp button with a pre-filled message matches how the brand’s customers already prefer to ask questions before buying.',
      },
    ],
    challenges: [],
    nextSteps: [],
    dataNote: 'Live Shopify store at gabrielwaves.in.',
    liveUrl: 'https://gabrielwaves.in',
    repoUrl: '',
    relatedService: 'shopify-development',
  },
  {
    slug: 'dauji-fashion-shopify-store',
    title: 'Dauji Fashion — Handwoven Saree Shopify Store',
    status: 'Client Project',
    type: 'Shopify E-commerce Store',
    categories: ['shopify-stores', 'client-websites'],
    featured: true,
    image: '/images/projects/dauji.png',
    summary:
      'Custom Shopify theme for an ethnic-wear brand selling authentic handwoven sarees — pure silk, bandhani, gaji silk and satin silk — with a bundle builder, wishlist and cash-on-delivery checkout.',
    overview:
      'Dauji Fashion sells handloom sarees made by skilled artisans. The store is a custom Shopify theme built from sections, blocks and snippets, giving the brand a rich festive storefront it can update itself from the Shopify theme editor.',
    scenario:
      'Saree buyers shop by fabric and occasion and want reassurance before paying online. The store organises the catalogue by fabric, highlights authenticity, free shipping and easy exchanges up front, and offers cash on delivery.',
    goals: [
      'Showcase handwoven sarees with rich, festive product imagery',
      'Let shoppers browse by fabric: bandhani, gaji silk and satin silk',
      'Increase order value with a bundle builder',
      'Build trust with authenticity, shipping, exchange and COD guarantees',
    ],
    intendedUsers: [
      'Shoppers buying sarees for festivals and weddings',
      'Repeat customers building saree bundles',
      'The brand team managing products and promotions in Shopify',
    ],
    designDirection:
      'Regal deep-plum and gold palette with an elegant serif headline, full-width fabric photography and a festive announcement bar.',
    features: [
      'Custom Shopify theme built with sections, blocks and snippets',
      'Fabric-based collections: all sarees, bandhani, gaji silk, satin silk',
      'Bundle builder for buying sarees together',
      'Predictive product search, wishlist and slide-out cart',
      'Trust bar: authentic handloom, free express shipping, 7-day exchange, COD',
      'Sign-up discount offer and Instagram, Facebook and WhatsApp links',
    ],
    stack: ['Shopify', 'Liquid', 'Shopify Theme Editor', 'JavaScript', 'CSS'],
    decisions: [
      {
        title: 'Section-based custom theme',
        detail:
          'Every homepage block is a configurable Shopify section, so the brand can change banners, collections and offers without code.',
      },
      {
        title: 'Trust signals above the fold',
        detail:
          'Authenticity, free shipping, easy exchange and cash on delivery sit right under the hero, answering the main doubts of online saree buyers.',
      },
    ],
    challenges: [],
    nextSteps: [],
    dataNote: 'Custom Shopify theme; the live store is currently offline.',
    liveUrl: '',
    repoUrl: '',
    relatedService: 'shopify-development',
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
