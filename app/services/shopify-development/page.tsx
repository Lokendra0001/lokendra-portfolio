import { ServicePage } from '@/components/services/service-page'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Shopify Store Development',
  description:
    'Shopify store setup, theme customization, product and collection structure, app integrations, and ongoing store improvements.',
  path: '/services/shopify-development',
})

export default function ShopifyDevelopmentPage() {
  return <ServicePage slug="shopify-development" />
}
