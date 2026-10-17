import { ArrowRight } from 'lucide-react'
import { ButtonLink } from './button-link'

type CtaSectionProps = {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CtaSection({
  title = 'Have a project in mind?',
  description = "Tell me what you're planning. I'll review your requirements and reply with questions, a suggested approach, and a scoped estimate.",
  primaryLabel = 'Start a Project',
  primaryHref = '/contact',
  secondaryLabel = 'View Projects',
  secondaryHref = '/projects',
}: CtaSectionProps) {
  return (
    <section aria-labelledby="cta-heading" className="container-page py-20 md:py-28">
      <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-linear-to-br from-primary/[0.14] via-card to-card px-6 py-12 md:px-12 md:py-16">
        <div
          className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 id="cta-heading" className="text-2xl font-semibold leading-tight sm:text-3xl 2xl:text-4xl">
              {title}
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground md:text-lg">{description}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryHref} size="lg">
              {primaryLabel}
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={secondaryHref} variant="secondary" size="lg">
              {secondaryLabel}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
