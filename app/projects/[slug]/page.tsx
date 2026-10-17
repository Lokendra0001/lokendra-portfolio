import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Check, ExternalLink, Info, Layers, Sparkles, Target, Users } from 'lucide-react'
import { projects, getProject, getRelatedProjects } from '@/data/projects'
import { isConfigured, siteConfig } from '@/lib/site-config'
import { PageHero } from '@/components/layout/page-hero'
import { StatusBadge, TechBadge } from '@/components/common/badges'
import { ButtonLink } from '@/components/common/button-link'
import { LinkedinIcon } from '@/components/common/brand-icons'
import { ProjectScreenshot } from '@/components/projects/project-preview'
import { RelatedProjects } from '@/components/projects/related-projects'
import { CtaSection } from '@/components/common/cta-section'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // handled synchronously if resolved, or using async
  return params.then(({ slug }) => {
    const project = getProject(slug)
    if (!project) return { title: 'Project Not Found' }
    return pageMetadata({
      title: `${project.title} — Case Study`,
      description: project.summary,
      path: `/projects/${project.slug}`,
    })
  })
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const related = getRelatedProjects(slug, 2)
  const linkedinUrl = project.linkedinUrl || siteConfig.social.linkedin

  return (
    <>
      <PageHero
        eyebrow={project.type}
        title={project.title}
        description={project.summary}
        breadcrumbs={[{ label: 'Projects', href: '/projects' }, { label: project.title }]}
        aside={<ProjectScreenshot project={project} />}
      >
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} />
          {isConfigured(project.liveUrl) && (
            <ButtonLink href={project.liveUrl} external size="sm">
              Live Demo <ExternalLink className="size-3.5" aria-hidden="true" />
            </ButtonLink>
          )}
          {isConfigured(linkedinUrl) && (
            <ButtonLink href={linkedinUrl} external variant="secondary" size="sm">
              <LinkedinIcon className="size-4 text-[#0a66c2]" aria-hidden="true" /> View on LinkedIn
            </ButtonLink>
          )}
          <ButtonLink href="/contact" variant="secondary" size="sm">
            Discuss Similar Project
          </ButtonLink>
        </div>
      </PageHero>

      {/* Honest Scope Note */}
      {project.dataNote && (
        <aside aria-label="Scope and data disclaimer" className="border-b border-border bg-surface/80 py-4">
          <div className="container-page flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
            <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <p>
              <strong className="font-semibold text-foreground">Project Scope:</strong> {project.dataNote}
            </p>
          </div>
        </aside>
      )}

      {/* Overview & Scenario */}
      <section className="container-page py-16 md:py-24" aria-labelledby="overview-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 id="overview-heading" className="eyebrow">
              Project Overview
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-foreground/90">{project.overview}</p>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-base font-semibold text-foreground">Problem & Scenario</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.scenario}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-base font-semibold text-foreground">Design Direction</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.designDirection}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 text-primary">
                <Target className="size-4" aria-hidden="true" />
                <h3 className="font-mono text-xs uppercase tracking-wider">Project Goals</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {project.goals.map((goal) => (
                  <li key={goal} className="flex gap-2.5 text-sm text-foreground/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 text-primary">
                <Users className="size-4" aria-hidden="true" />
                <h3 className="font-mono text-xs uppercase tracking-wider">Intended Audience & Users</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {project.intendedUsers.map((user) => (
                  <li key={user} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-primary font-mono">•</span>
                    <span>{user}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Key Features & Stack */}
      <section className="container-page py-16 md:py-24" aria-labelledby="features-heading">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 id="features-heading" className="eyebrow">
              Functionality
            </h2>
            <h3 className="mt-3 text-2xl font-semibold text-foreground">Key Features & Capabilities</h3>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 text-sm text-foreground/90"
                >
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Implementation Decisions */}
            {project.decisions.length > 0 && (
              <div className="mt-12">
                <h4 className="font-display text-xl font-semibold text-foreground">Architecture & Decisions</h4>
                <div className="mt-6 space-y-4">
                  {project.decisions.map((dec) => (
                    <div key={dec.title} className="rounded-xl border border-border bg-card p-5">
                      <h5 className="font-medium text-foreground">{dec.title}</h5>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{dec.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {/* Tech Stack */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 text-primary">
                <Layers className="size-4" aria-hidden="true" />
                <h3 className="font-mono text-xs uppercase tracking-wider">Technology Stack</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                {project.stack.map((tech) => (
                  <li key={tech}>
                    <TechBadge>{tech}</TechBadge>
                  </li>
                ))}
              </ul>
            </div>

            {/* Next Steps / Future Roadmap */}
            {project.nextSteps.length > 0 && (
              <div className="rounded-xl border border-border bg-card p-6">
                <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Future Improvements</h4>
                <ul className="mt-4 space-y-2.5">
                  {project.nextSteps.map((step) => (
                    <li key={step} className="flex gap-2.5 text-xs text-muted-foreground">
                      <ArrowRight className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden="true" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related Service Link */}
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
              <h4 className="font-medium text-foreground">Need a similar solution?</h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                I build tailored applications and storefronts adapted specifically to your workflow and requirements.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <ButtonLink href={`/services/${project.relatedService}`} size="sm" variant="secondary">
                  Explore Related Service
                </ButtonLink>
                <ButtonLink href="/contact" size="sm">
                  Start a Project
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <RelatedProjects projects={related} />

      {/* Final CTA */}
      <CtaSection
        title="Want something like this built for you?"
        description="Let's talk through your business requirements, timeline, and budget. I will provide an honest recommendation on technology and scope."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="All Projects"
        secondaryHref="/projects"
      />
    </>
  )
}
