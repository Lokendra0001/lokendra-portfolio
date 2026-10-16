import { ServicePage } from '@/components/services/service-page'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Business Websites for Local Businesses',
  description:
    'Professional, mobile-friendly websites for salons, restaurants, shops, consultants, and service providers — with WhatsApp, maps, and contact forms.',
  path: '/services/business-websites',
})

export default function BusinessWebsitesPage() {
  return <ServicePage slug="business-websites" />
}
