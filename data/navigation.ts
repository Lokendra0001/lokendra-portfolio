export type NavLink = { label: string; href: string; description?: string }

export const mainNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
]

export const serviceNav: NavLink[] = [
  {
    label: 'Custom Web Development',
    href: '/services/mern-development',
    description: 'Bespoke websites, web apps, and digital platforms.',
  },
  {
    label: 'Shopify Development',
    href: '/services/shopify-development',
    description: 'Store setup, theme customization, and storefronts.',
  },
  {
    label: 'Business Websites',
    href: '/services/business-websites',
    description: 'Professional sites for local and service businesses.',
  },
]

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: 'Services',
    links: [{ label: 'All Services', href: '/services' }, ...serviceNav],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Projects', href: '/projects' },
      { label: 'About', href: '/about' },
      { label: 'Process', href: '/process' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Resources', href: '/blog' },
    ],
  },
]
