import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { services } from '@/data/services'
import { getProject } from '@/data/projects'
import { PageHero } from '@/components/layout/page-hero'
import { ButtonLink } from '@/components/common/button-link'
import { CtaSection } from '@/components/common/cta-section'
import { ServiceIcon } from '@/components/services/service-icon'
import { ProjectPreview } from '@/components/projects/project-preview'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Services',
  description:
    'MERN stack web applications, Shopify store development, and business websites — explained in plain language with clear deliverables.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Practical development services for growing businesses."
        description="Every project is scoped to your requirements. Below is what each service covers, who it suits, and what you would typically receive."
        breadcrumbs={[{ label: 'Services' }]}
      >
        <nav aria-label="Jump to service" className="flex flex-wrap gap-2">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="divide-y divide-border">
        {services.map((service, index) => {
          const example = getProject(service.exampleProjectSlugs[0])
          return (
            <section
              key={service.slug}
              id={service.slug}
              aria-labelledby={`${service.slug}-heading`}
              className="scroll-mt-24 py-16 md:py-24"
            >
              <div className="container-page">
                <div className="flex items-start gap-4">
                  <ServiceIcon icon={service.icon} />
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">{`0${index + 1}`}</p>
                    <h2 id={`${service.slug}-heading`} className="text-3xl font-semibold md:text-4xl">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
                  <div className="space-y-8">
                    <div>
                      <h3 className="eyebrow">What it is</h3>
                      <p className="mt-3 text-pretty text-lg leading-relaxed text-foreground/90">{service.whatItIs}</p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2">
                      <div>
                        <h3 className="text-base font-semibold">Who needs it</h3>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                          {service.whoNeedsIt.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold">Problems it solves</h3>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                          {service.problems.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">Capabilities</h3>
                      <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                        {service.capabilities.map((item) => (
                          <li key={item} className="flex gap-2.5 text-sm text-foreground/85">
                            <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-xs text-muted-foreground">
                        Not every capability is included in every project — the scope defines what is built.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="rounded-xl border border-border bg-card p-6">
                      <h3 className="text-base font-semibold">Typical deliverables</h3>
                      <ul className="mt-4 space-y-2.5">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex gap-2.5 text-sm text-foreground/85">
                            <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {example && (
                      <Link
                        href={`/projects/${example.slug}`}
                        className="lift-card group block rounded-xl border border-border bg-card p-4"
                      >
                        <ProjectPreview variant={example.preview} />
                        <div className="mt-4 flex items-center justify-between gap-4 px-1">
                          <div className="min-w-0">
                            <p className="text-xs text-muted-foreground">Example · {example.status}</p>
                            <p className="mt-0.5 truncate text-sm font-medium text-foreground">{example.title}</p>
                          </div>
                          <ArrowRight
                            className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </div>
                      </Link>
                    )}
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <ButtonLink href={`/contact?type=${encodeURIComponent(service.inquiryType)}`}>
                        {service.ctaLabel}
                      </ButtonLink>
                      <ButtonLink href={`/services/${service.slug}`} variant="secondary">
                        Service details
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      <CtaSection
        title="Not sure which service fits?"
        description="Describe what you need in a few sentences. I'll suggest the most practical approach and explain the options."
        primaryLabel="Discuss Your Idea"
        secondaryLabel="View Projects"
      />
    </>
  )
}
