import { ArrowRight, CheckCircle2, Clock, FileText, HelpCircle, Layers, Sparkles } from 'lucide-react'
import { processStages } from '@/data/process'
import { PageHero } from '@/components/layout/page-hero'
import { ButtonLink } from '@/components/common/button-link'
import { CtaSection } from '@/components/common/cta-section'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Development Process',
  description:
    'A transparent 7-step development process from initial discovery to handover and ongoing maintenance.',
  path: '/process',
})

const processPrinciples = [
  {
    icon: Clock,
    title: 'Realistic Timelines',
    desc: 'Timelines are agreed after the project scope is clearly defined and dependencies are understood. No rushed work or unachievable delivery promises.',
  },
  {
    icon: FileText,
    title: 'Transparent Written Scope',
    desc: 'Every deliverable is written down before work begins. Third-party hosting, Shopify subscriptions, and domain fees are clearly separated.',
  },
  {
    icon: CheckCircle2,
    title: 'Checkpoints at Every Stage',
    desc: 'You review work at each milestone before proceeding to the next step, ensuring complete alignment from structure to final launch.',
  },
]

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Workflow"
        title="A clear process from first conversation to handover."
        description="Every project is built in deliberate, transparent phases with clear checkpoints so you always know what is being built, what is next, and what is required from you."
        breadcrumbs={[{ label: 'Process' }]}
      >
        <ButtonLink href="/contact">
          Discuss Your Project <ArrowRight className="size-4" aria-hidden="true" />
        </ButtonLink>
      </PageHero>

      {/* Process Principles */}
      <section className="border-b border-border bg-surface py-12 md:py-16" aria-labelledby="principles-heading">
        <div className="container-page">
          <h2 id="principles-heading" className="sr-only">
            Process Guiding Principles
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {processPrinciples.map((p) => (
              <div key={p.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                <p.icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed 7 Stages */}
      <section className="container-page py-16 md:py-24" aria-labelledby="stages-heading">
        <div className="max-w-2xl">
          <h2 id="stages-heading" className="eyebrow">
            The 7 Stages
          </h2>
          <h3 className="mt-3 text-3xl font-semibold text-foreground">How We Build Your Project</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            From first requirement gathering to final domain connection and optional post-launch care.
          </p>
        </div>

        <ol className="mt-14 space-y-8">
          {processStages.map((stage) => (
            <li
              key={stage.step}
              className="relative border border-border bg-card p-6 transition-colors duration-200 hover:bg-surface/70 md:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="font-mono text-sm font-semibold text-primary">{stage.step}</span>
                  <h4 className="mt-1 text-2xl font-semibold text-foreground">{stage.title}</h4>
                  <p className="mt-2 text-pretty text-base text-muted-foreground">{stage.summary}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary">
                  Stage {stage.step}
                </span>
              </div>

              <div className="mt-8 grid gap-6 border-t border-border pt-6 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">What Happens</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90">{stage.whatHappens}</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">You Provide</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90">{stage.clientProvides}</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">I Deliver</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90">{stage.developerDelivers}</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-primary">Approval Milestone</p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-foreground">{stage.approval}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Scope Changes & Timelines Notice */}
      <section className="border-t border-border bg-surface py-16 md:py-20" aria-labelledby="scope-heading">
        <div className="container-page max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 id="scope-heading" className="text-xl font-semibold text-foreground">
              What happens if your requirements change during the project?
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                It is normal for new ideas to emerge as you see the project take shape. If a change falls within the
                agreed scope, it is simply incorporated into the revisions.
              </p>
              <p>
                If a request introduces completely new features, extra pages, or unanticipated integrations, I will
                prepare a separate scope and estimate for your review before doing the additional work. Nothing is
                invoiced without your explicit prior approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to begin with step one?"
        description="Share your requirements through the contact form or send a message. I'll review your project details and follow up with questions and next steps."
        primaryLabel="Start Discovery"
        primaryHref="/contact"
        secondaryLabel="View Work"
        secondaryHref="/projects"
      />
    </>
  )
}
