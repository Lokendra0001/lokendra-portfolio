import { generalFaqs } from '@/data/faqs'
import { PageHero } from '@/components/layout/page-hero'
import { FaqAccordion } from '@/components/common/faq-accordion'
import { ButtonLink } from '@/components/common/button-link'
import { CtaSection } from '@/components/common/cta-section'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about web development, Shopify stores, MERN web applications, costs, timelines, and hosting.',
  path: '/faq',
})

const categories = [
  {
    title: 'Services & Capabilities',
    description: 'What I build, technical stacks, and platforms supported.',
    indices: [0, 1, 2, 8, 9, 10, 11],
  },
  {
    title: 'Estimates, Timelines & Costs',
    description: 'How pricing, project durations, and recurring third-party fees are handled.',
    indices: [3, 4, 5, 6],
  },
  {
    title: 'Post-Launch, Maintenance & Changes',
    description: 'Revisions, updates, ongoing maintenance, and how to get started.',
    indices: [7, 12, 13],
  },
]

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions."
        description="Clear, honest answers about website development, Shopify stores, custom MERN applications, costs, timelines, and collaboration."
        breadcrumbs={[{ label: 'FAQ' }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact">Have Another Question?</ButtonLink>
          <ButtonLink href="/process" variant="secondary">
            View Development Process
          </ButtonLink>
        </div>
      </PageHero>

      <div className="container-page py-16 md:py-24">
        <div className="space-y-16">
          {categories.map((cat) => {
            const items = cat.indices.map((idx) => generalFaqs[idx]).filter(Boolean)
            return (
              <section key={cat.title} aria-labelledby={cat.title.replace(/\s+/g, '-').toLowerCase()}>
                <div className="mb-6 max-w-xl">
                  <h2 id={cat.title.replace(/\s+/g, '-').toLowerCase()} className="text-2xl font-semibold text-foreground">
                    {cat.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
                </div>
                <FaqAccordion items={items} />
              </section>
            )
          })}
        </div>
      </div>

      <CtaSection
        title="Still have questions about your idea?"
        description="Every project has unique requirements. Reach out directly and I will happily explain the best options for your budget and timeline."
        primaryLabel="Ask a Question"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  )
}
