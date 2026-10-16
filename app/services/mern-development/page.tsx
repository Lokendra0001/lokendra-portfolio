import { ServicePage } from '@/components/services/service-page'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'MERN Stack & Custom Web App Development',
  description:
    'Custom web applications, admin dashboards, APIs, and database-driven features built with React, Next.js, Node.js, Express, MongoDB, and PostgreSQL.',
  path: '/services/mern-development',
})

export default function MernDevelopmentPage() {
  return <ServicePage slug="mern-development" />
}
