import { notFound } from 'next/navigation'
import { ArrowRight, Check, Info, Minus } from 'lucide-react'
import { getService } from '@/data/services'
import { getProject, type Project } from '@/data/projects'
import { processStages } from '@/data/process'
import { PageHero } from '@/components/layout/page-hero'
import { SectionHeading } from '@/components/common/section-heading'
import { ButtonLink } from '@/components/common/button-link'
import { TechBadge } from '@/components/common/badges'
import { FaqAccordion } from '@/components/common/faq-accordion'
import { CtaSection } from '@/components/common/cta-section'
import { ProjectPreview } from '@/components/projects/project-preview'
import { RelatedProjects } from '@/components/projects/related-projects'

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-pretty leading-relaxed text-foreground/85">
          <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export function ServicePage({ slug }: { slug: string }) {
  const service = getService(slug)
  if (!service) notFound()

  const examples = service.exampleProjectSlugs.map(getProject).filter((p): p is Project => Boolean(p))
  const contactHref = `/contact?type=${encodeURIComponent(service.inquiryType)}`

  return (
    <>
      <PageHero
        eyebrow={service.title}
        title={service.heroTitle}
        description={service.heroDescription}
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: service.shortTitle }]}
        aside={examples[0] ? <ProjectPreview variant={examples[0].preview} /> : undefined}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={contactHref} size="lg">
            {service.ctaLabel} <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
          {examples[0] && (
            <ButtonLink href={`/projects/${examples[0].slug}`} variant="secondary" size="lg">
              See an example
            </ButtonLink>
          )}
        </div>
      </PageHero>

      <section aria-labelledby="overview-heading" className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 id="overview-heading" className="eyebrow mb-3">
              What it is
            </h2>
            <p className="font-display text-2xl font-medium leading-snug text-foreground text-pretty">
              {service.whatItIs}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Who needs it</h3>
            <div className="mt-4">
              <CheckList items={service.whoNeedsIt} />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Problems it solves</h3>
            <div className="mt-4">
              <CheckList items={service.problems} />
            </div>
          </div>
        </div>
      </section>

      {service.explainer && (
        <section aria-labelledby="explainer-heading" className="border-y border-border bg-surface py-16 md:py-24">
          <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading id="explainer-heading" eyebrow="In plain language" title={service.explainer.title} />
            <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground md:text-lg">
              {service.explainer.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      <section aria-labelledby="offerings-heading" className="container-page py-16 md:py-24">
        <SectionHeading
          id="offerings-heading"
          eyebrow="What I can help with"
          title={service.offeringsTitle}
          description="These are capabilities, not a fixed package. Your project includes only what we agree on in the scope."
        />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {service.offerings.map((o) => (
            <li key={o.title} className="bg-card p-6">
              <h3 className="font-display text-base font-semibold text-foreground">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="deliverables-heading" className="border-y border-border bg-surface py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="deliverables-heading" eyebrow="Typical deliverables" title="What you can expect" />
            <div className="mt-8">
              <CheckList items={service.deliverables} />
            </div>
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold">Technology stack</h3>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                {service.stack.map((tech) => (
                  <li key={tech}>
                    <TechBadge className="text-sm">{tech}</TechBadge>
                  </li>
                ))}
              </ul>
            </div>
            {service.clientProvides && (
              <div>
                <h3 className="text-lg font-semibold">What you may need to provide</h3>
                <div className="mt-4">
                  <CheckList items={service.clientProvides} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section aria-labelledby="cost-heading" className="container-page py-16 md:py-24">
        <SectionHeading id="cost-heading" eyebrow="Costs, explained honestly" title={service.costNote.title} />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
            <h3 className="font-display text-base font-semibold">Development fee covers</h3>
            <ul className="mt-4 space-y-2.5">
              {service.costNote.development.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground/85">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-display text-base font-semibold">Separate third-party costs</h3>
            <ul className="mt-4 space-y-2.5">
              {service.costNote.thirdParty.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground/85">
                  <Minus className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 flex gap-3 rounded-lg border border-border bg-card p-4 text-sm leading-relaxed text-muted-foreground">
          <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span>
            {service.costNote.note} {service.scopeNote}
          </span>
        </p>
      </section>

      <section aria-labelledby="workflow-heading" className="border-y border-border bg-surface py-16 md:py-24">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading id="workflow-heading" eyebrow="Workflow" title="How the project moves forward" />
            <ButtonLink href="/process" variant="secondary" className="shrink-0">
              Full process details
            </ButtonLink>
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processStages.slice(0, 6).map((stage) => (
              <li key={stage.step} className="rounded-xl border border-border bg-card p-5">
                <span className="font-mono text-xs text-primary">{stage.step}</span>
                <h3 className="mt-2 text-sm font-semibold">{stage.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{stage.summary}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <RelatedProjects
        projects={examples}
        eyebrow="Example work"
        title="Relevant example projects"
      />

      <section aria-labelledby="service-faq-heading" className="container-page pb-4 pt-4 md:pt-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading id="service-faq-heading" eyebrow="FAQ" title={`${service.shortTitle} questions`} />
          <FaqAccordion items={service.faqs} />
        </div>
      </section>

      <CtaSection
        title={service.ctaTitle}
        primaryLabel={service.ctaLabel}
        primaryHref={contactHref}
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />
    </>
  )
}
