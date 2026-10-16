import { Suspense } from 'react'
import { PageHero } from '@/components/layout/page-hero'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactMethods } from '@/components/contact/contact-methods'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Contact & Start a Project',
  description:
    'Start a freelance web development project. Fill in the project inquiry form or reach out via email and WhatsApp.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's build something practical together."
        description="Have a website, Shopify store, or custom web application in mind? Send an inquiry with your requirements and I'll reply with questions, a proposed approach, and an honest estimate."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <div className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <h2 className="eyebrow mb-3">Project Inquiry</h2>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Tell me about your project</h3>
            <Suspense fallback={<div className="p-8 text-muted-foreground">Loading inquiry form...</div>}>
              <ContactForm />
            </Suspense>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="eyebrow mb-3">Direct Channels</h2>
              <h3 className="text-xl font-semibold text-foreground mb-6">Alternative contact options</h3>
              <ContactMethods variant="full" />
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h4 className="font-display text-base font-semibold text-foreground">What happens after you reach out?</h4>
              <ol className="mt-4 space-y-3 text-xs leading-relaxed text-muted-foreground">
                <li className="flex gap-2.5">
                  <span className="font-mono font-semibold text-primary">1.</span>
                  <span>I review your project notes and check feasibility and schedule.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="font-mono font-semibold text-primary">2.</span>
                  <span>We clarify any technical or feature questions via email or WhatsApp.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="font-mono font-semibold text-primary">3.</span>
                  <span>You receive a clear written scope, timeline, and cost estimate.</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
