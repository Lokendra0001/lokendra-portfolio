import { BookOpen, Sparkles } from 'lucide-react'
import { PageHero } from '@/components/layout/page-hero'
import { ButtonLink } from '@/components/common/button-link'
import { CtaSection } from '@/components/common/cta-section'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Blog & Technical Resources',
  description:
    'Articles, case notes, and practical web development guides on MERN applications, Shopify optimization, and small business websites.',
  path: '/blog',
})

const upcomingTopics = [
  {
    category: 'MERN Stack',
    title: 'Architecting Scalable MongoDB & Express APIs for Growing Teams',
    summary: 'Best practices for schema design, validation, authentication, and error handling.',
  },
  {
    category: 'Shopify & Ecommerce',
    title: 'Optimizing Shopify Liquid Themes for Speed and Conversion',
    summary: 'Practical tips to reduce script bloat, improve Core Web Vitals, and enhance mobile checkouts.',
  },
  {
    category: 'Business Websites',
    title: 'What Local Service Businesses Actually Need From Their Website',
    summary: 'Why clear contact channels, fast mobile loading, and local SEO matter more than flashy animations.',
  },
]

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Articles & Development Insights"
        description="Practical technical write-ups on full-stack web development, Shopify customization, performance optimization, and project planning."
        breadcrumbs={[{ label: 'Resources' }]}
      >
        <div className="flex gap-3">
          <ButtonLink href="/projects">View Projects</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Get In Touch
          </ButtonLink>
        </div>
      </PageHero>

      <section className="container-page py-16 md:py-24" aria-labelledby="upcoming-heading">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12 text-center max-w-3xl mx-auto shadow-xs">
          <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
            <BookOpen className="size-6" />
          </span>
          <h2 id="upcoming-heading" className="text-2xl font-semibold text-foreground">
            Articles Coming Soon
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
            I am currently preparing in-depth guides and technical notes drawn from real development workflows. Below is a preview of planned articles:
          </p>

          <div className="mt-10 grid gap-4 text-left">
            {upcomingTopics.map((topic) => (
              <div key={topic.title} className="rounded-xl border border-border bg-surface p-5">
                <span className="font-mono text-xs uppercase tracking-wider text-primary">{topic.category}</span>
                <h3 className="mt-1 text-base font-medium text-foreground">{topic.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{topic.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Have a specific development topic or project in mind?"
        description="Reach out directly to discuss your requirements or request advice on technology choices."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
        secondaryLabel="Explore Work"
        secondaryHref="/projects"
      />
    </>
  )
}
