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
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-14 text-center md:px-12 md:py-20">
        <div className="ambient-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl 2xl:max-w-3xl">
          <h2 id="cta-heading" className="text-3xl font-semibold leading-tight md:text-4xl 2xl:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground md:text-lg 2xl:text-xl">{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
