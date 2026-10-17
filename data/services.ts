import type { Faq } from './faqs'

export type ServiceIcon = 'code' | 'store' | 'building'

export type Service = {
  slug: string
  title: string
  shortTitle: string
  icon: ServiceIcon
  tagline: string
  heroTitle: string
  heroDescription: string
  whatItIs: string
  whoNeedsIt: string[]
  problems: string[]
  deliverables: string[]
  capabilities: string[]
  explainer?: { title: string; body: string[] }
  offeringsTitle: string
  offerings: { title: string; description: string }[]
  stack: string[]
  clientProvides?: string[]
  costNote: { title: string; development: string[]; thirdParty: string[]; note: string }
  scopeNote: string
  exampleProjectSlugs: string[]
  faqs: Faq[]
  ctaTitle: string
  ctaLabel: string
  inquiryType: string
}

export const services: Service[] = [
  {
    slug: 'mern-development',
    title: 'Custom Website & Web App Development',
    shortTitle: 'Custom Website Development',
    icon: 'code',
    tagline: 'Tailored websites, responsive web apps, and bespoke digital platforms.',
    heroTitle: 'Custom Websites & Web Applications Built for Real Business Growth.',
    heroDescription:
      'From fast high-converting marketing sites to database-driven custom web applications, I design and build modern digital solutions with Next.js, React, Node.js, and modern databases — crafted specifically around your business goals.',
    whatItIs:
      'Bespoke website and application development from scratch: responsive frontends that visitors love, scalable backend systems, and clean code that is easy to maintain and grow.',
    whoNeedsIt: [
      'Businesses needing a unique, high-performing website that stands out',
      'Companies outgrowing generic templates and slow site builders',
      'Startups building modern web apps or digital customer portals',
      'Teams requiring custom forms, workflows, or third-party integrations',
    ],
    problems: [
      'Generic website templates that look cookie-cutter and slow down',
      'Manual processes that could be automated through a web portal',
      'Websites that fail to convert visitors into paying inquiries',
      'Rigid platforms that cannot adapt to your custom business rules',
    ],
    deliverables: [
      'Custom responsive frontend (Next.js / React / Tailwind)',
      'Secure backend API & database architecture',
      'Custom admin dashboard & content management',
      'High-performance optimization (95+ Core Web Vitals)',
      'SEO-ready semantic structure & analytics integration',
    ],
    capabilities: [
      'Bespoke website design & development',
      'Responsive, mobile-first interfaces',
      'Modern Next.js & React architectures',
      'Full-stack web applications & portals',
      'Secure authentication & user roles',
      'Database modeling (PostgreSQL / MongoDB)',
      'Custom API & third-party integrations',
      'Speed optimization & SEO best practices',
      'Ongoing feature additions & maintenance',
    ],
    explainer: {
      title: 'Why custom development matters',
      body: [
        'Off-the-shelf templates and site builders often carry heavy bloat, generic layouts, and rigid constraints that limit your brand.',
        'A custom-built website or web application is engineered specifically for your audience: lightning-fast page loads, bespoke UI/UX, robust security, and the flexibility to add any feature your business requires as it scales.',
      ],
    },
    offeringsTitle: 'Types of applications',
    offerings: [
      { title: 'Admin dashboards', description: 'Manage records, view summaries, and control settings from one place.' },
      { title: 'Inventory management', description: 'Track products, stock levels, and movements with searchable records.' },
      { title: 'Task management', description: 'Create, assign, prioritise, and track work through clear statuses.' },
      { title: 'Booking and inquiry systems', description: 'Collect requests, manage availability, and follow up efficiently.' },
      { title: 'Authentication and user roles', description: 'Secure sign-in with permissions for admins, staff, and customers.' },
      { title: 'API integrations', description: 'Connect payment, messaging, mapping, or AI services to your app.' },
      { title: 'Database-driven features', description: 'Search, filter, report on, and export the data that matters to you.' },
      { title: 'AI automation', description: 'Automate repetitive workflows with tools such as n8n and AI APIs.' },
    ],
    stack: ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Docker', 'Nginx', 'PM2'],
    costNote: {
      title: 'What the estimate covers',
      development: ['Planning and scoping', 'Interface and API development', 'Database design', 'Testing and deployment setup'],
      thirdParty: ['Hosting or cloud servers', 'Managed database plans', 'Domain registration', 'Paid third-party APIs'],
      note: 'Third-party services are billed by their providers and are usually recurring.',
    },
    scopeNote:
      'Every application is different. Scope, timeline, and cost depend on the features, integrations, and data involved, and are agreed in writing before development starts.',
    exampleProjectSlugs: ['veloxchat-realtime-chat', 'jobhunt-recruitment-platform', 'cineverse-movie-platform'],
    faqs: [
      {
        question: 'Do I need MERN specifically?',
        answer:
          'Not necessarily. I will recommend the stack that fits your requirements. MERN works well for interactive, data-driven applications; PostgreSQL may suit highly relational data better.',
      },
      {
        question: 'Can you work on an existing application?',
        answer:
          'Yes, after reviewing the codebase. Adding features to an existing project starts with understanding how it is structured and any technical constraints.',
      },
      {
        question: 'Who owns the code?',
        answer:
          'Ownership terms are agreed in the project scope. Typically, the client owns the delivered code once the project is paid in full.',
      },
      {
        question: 'Can the app be deployed with Docker?',
        answer:
          'Yes. I can containerise the application with Docker and configure Nginx and PM2 or a managed platform, depending on your hosting preferences.',
      },
    ],
    ctaTitle: 'Have an application idea?',
    ctaLabel: 'Discuss a Custom App',
    inquiryType: 'MERN Web Application',
  },
  {
    slug: 'shopify-development',
    title: 'Shopify Development',
    shortTitle: 'Shopify Development',
    icon: 'store',
    tagline: 'Store setup, theme customization, and storefronts.',
    heroTitle: 'Shopify Stores That Are Clear, Consistent, and Easy to Manage.',
    heroDescription:
      'I help businesses launch new Shopify stores or improve existing ones — from theme customization and product organization to responsive storefront design.',
    whatItIs:
      'Setting up and customising a Shopify store so it reflects your brand, presents products clearly, and is easy for you to manage day to day.',
    whoNeedsIt: [
      'Brands launching their first online store',
      'Existing stores that feel outdated or hard to navigate',
      'Businesses moving from social-media selling to a proper store',
      'Owners who need theme changes beyond the default editor',
    ],
    problems: [
      'Default themes that look like every other store',
      'Products and collections that are hard to browse',
      'Poor mobile shopping experience',
      'Uncertainty about which apps and settings are needed',
    ],
    deliverables: [
      'Configured Shopify store and theme',
      'Customised theme sections and templates',
      'Organised products, collections, and navigation',
      'Mobile-optimised storefront',
      'Handover walkthrough of the admin',
    ],
    capabilities: [
      'Shopify store setup',
      'Theme customization',
      'Storefront design',
      'Product and collection organization',
      'Responsive storefronts',
      'Navigation and collection pages',
      'App integrations',
      'Payment and shipping configuration assistance',
      'Store improvements and maintenance',
    ],
    offeringsTitle: 'What a Shopify project can include',
    offerings: [
      { title: 'Store design and setup', description: 'Configure your store, theme, and core settings from the ground up.' },
      { title: 'Theme customization', description: 'Adjust layouts, sections, and styles to match your brand.' },
      { title: 'Product and collection setup', description: 'Structure products, variants, and collections logically.' },
      { title: 'Navigation and filtering', description: 'Help shoppers find products with clear menus and filters.' },
      { title: 'Mobile optimization', description: 'Make browsing and buying comfortable on small screens.' },
      { title: 'App integrations', description: 'Select and configure apps for reviews, email, and more.' },
      { title: 'Basic SEO setup', description: 'Titles, descriptions, and structure for search engine foundations.' },
      { title: 'Store testing', description: 'Test navigation, product pages, cart, and checkout flow before launch.' },
      { title: 'Handover and maintenance', description: 'Admin walkthrough plus optional ongoing support.' },
    ],
    stack: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'Shopify Theme Editor', 'Shopify Apps'],
    costNote: {
      title: 'Development fees vs. recurring Shopify costs',
      development: ['Store setup and configuration', 'Theme customization', 'Product and collection organization', 'Testing and handover'],
      thirdParty: [
        'Shopify subscription plan (monthly or annual)',
        'Domain registration and renewal',
        'Paid themes (one-time)',
        'Paid apps (often monthly)',
        'Payment gateway and transaction fees',
      ],
      note: 'Third-party costs are paid directly to Shopify and other providers and are not part of development fees.',
    },
    scopeNote:
      'I cannot guarantee sales, search rankings, or revenue. My focus is a well-built, easy-to-use store that gives your products a solid foundation.',
    exampleProjectSlugs: ['travelvista-tour-travel-portal'],
    faqs: [
      {
        question: 'Do I need a paid theme?',
        answer:
          'Not always. Many stores work well on a free Shopify theme with customisation. A paid theme may make sense if it already includes features you need.',
      },
      {
        question: 'Can you improve my existing store?',
        answer:
          'Yes. I can review your current store and suggest improvements to design, navigation, product presentation, and mobile experience.',
      },
      {
        question: 'Will I be able to manage the store myself?',
        answer:
          'Yes. Shopify stores are managed from the Shopify admin. I provide a walkthrough so you can update products, collections, and content confidently.',
      },
      {
        question: 'Can you set up payments and shipping?',
        answer:
          'I can assist with configuring payment providers and shipping settings. Final business decisions such as rates and policies remain yours.',
      },
    ],
    ctaTitle: 'Ready to launch or improve your store?',
    ctaLabel: 'Start a Shopify Project',
    inquiryType: 'Shopify Store',
  },
  {
    slug: 'business-websites',
    title: 'Business Website Development',
    shortTitle: 'Business Websites',
    icon: 'building',
    tagline: 'Professional websites for local and service businesses.',
    heroTitle: 'A Professional Website Your Customers Can Actually Use.',
    heroDescription:
      'Clear, fast, mobile-friendly websites for salons, restaurants, shops, consultants, and service providers — with the information and contact options your customers look for first.',
    whatItIs:
      'A professional website that explains what your business offers, where you are, and how to get in touch — designed to work well on the phones most visitors use.',
    whoNeedsIt: [
      'Salons and barbershops',
      'Restaurants and cafes',
      'Retail shops',
      'Consultants and service providers',
      'Local businesses',
      'Startups and independent professionals',
    ],
    problems: [
      'No website, or one that looks outdated',
      'Customers cannot quickly find services, hours, or location',
      'Relying only on social media for an online presence',
      'Inquiries scattered across calls and messages',
    ],
    deliverables: [
      'Responsive, multi-page website',
      'Services and business information pages',
      'Contact form and WhatsApp inquiry button',
      'Google Maps location and directions',
      'Basic on-page SEO foundations',
    ],
    capabilities: [
      'Websites for local businesses',
      'Service business websites',
      'Salon and barbershop websites',
      'Restaurant and cafe websites',
      'Business landing pages',
      'Contact and inquiry forms',
      'WhatsApp integration',
      'Google Maps integration',
      'Responsive design',
      'Basic on-page SEO foundations',
      'AI automation with tools like n8n',
      'Demo AI projects',
    ],
    offeringsTitle: 'What a business website gives you',
    offerings: [
      { title: 'Professional online presence', description: 'A credible place to send customers instead of only social profiles.' },
      { title: 'Services and business information', description: 'Clearly presented services, details, and opening information.' },
      { title: 'Photo galleries', description: 'Show your space, products, or work with approved photos.' },
      { title: 'Location and directions', description: 'Embedded maps and one-tap directions for local visitors.' },
      { title: 'WhatsApp inquiry buttons', description: 'Let customers message you directly from any page.' },
      { title: 'Contact forms', description: 'Collect structured inquiries with the details you need.' },
      { title: 'Mobile-friendly layouts', description: 'Comfortable to read and use on phones and tablets.' },
      { title: 'Basic SEO foundations', description: 'Page titles, descriptions, and structure search engines understand.' },
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Google Maps', 'WhatsApp Click-to-Chat', 'n8n'],
    clientProvides: [
      'Business name, description, and contact details',
      'List of services and any information you want published',
      'Approved photos of your business, products, or work',
      'Logo and brand colours, if available',
      'Domain name preferences (or an existing domain)',
    ],
    costNote: {
      title: 'Development fees vs. domain and hosting',
      development: ['Page design and development', 'Contact, WhatsApp, and map integrations', 'Mobile testing', 'Launch and handover'],
      thirdParty: ['Domain registration and yearly renewal', 'Website hosting', 'Business email (optional)', 'Paid plugins or services (if any)'],
      note: 'Domain and hosting accounts are registered in your name and billed by those providers.',
    },
    scopeNote:
      'The final scope depends on the number of pages, features, and how ready your content is. I do not guarantee search rankings, but every site is built with solid SEO foundations.',
    exampleProjectSlugs: ['jobhunt-recruitment-platform', 'travelvista-tour-travel-portal'],
    faqs: [
      {
        question: 'I do not have photos or written content. Can you still help?',
        answer:
          'Yes. We can plan the content together, and placeholder layouts can be prepared while you gather photos. Final content should be approved by you before launch.',
      },
      {
        question: 'Can you add a booking system?',
        answer: 'Yes. Simple booking can be added through a trusted third-party service or as a custom feature, depending on your needs.',
      },
      {
        question: 'Will my business appear on Google?',
        answer:
          'The site will include basic SEO foundations, but rankings depend on many factors outside a website build. I can also guide you on setting up a Google Business Profile.',
      },
    ],
    ctaTitle: 'Need a website for your business?',
    ctaLabel: 'Request an Estimate',
    inquiryType: 'Business Website',
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
