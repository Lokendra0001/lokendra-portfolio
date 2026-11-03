import { ServicePage } from '@/components/services/service-page'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'AI Automation & Intelligent Agents',
  description:
    'Instagram and WhatsApp auto-replies, lead capture, follow-up sequences and AI assistants built on official APIs — automation that saves hours every week.',
  path: '/services/ai-automation',
})

export default function AiAutomationPage() {
  return <ServicePage slug="ai-automation" />
}
