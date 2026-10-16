import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Check, ExternalLink, Info, Layers, Sparkles, Target, Users } from 'lucide-react'
import { projects, getProject, getRelatedProjects } from '@/data/projects'
import { isConfigured } from '@/lib/site-config'
import { PageHero } from '@/components/layout/page-hero'
import { StatusBadge, TechBadge } from '@/components/common/badges'
import { ButtonLink } from '@/components/common/button-link'
import { GithubIcon } from '@/components/common/brand-icons'
import { ProjectPreview, PhoneFrame } from '@/components/projects/project-preview'
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

  return (
    <>
      <PageHero
        eyebrow={project.type}
        title={project.title}
        description={project.summary}
        breadcrumbs={[{ label: 'Projects', href: '/projects' }, { label: project.title }]}
        aside={<ProjectPreview variant={project.preview} />}
      >
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} />
          {isConfigured(project.liveUrl) && (
            <ButtonLink href={project.liveUrl} external size="sm">
              Live Demo <ExternalLink className="size-3.5" aria-hidden="true" />
            </ButtonLink>
          )}
          {isConfigured(project.repoUrl) && (
            <ButtonLink href={project.repoUrl} external variant="secondary" size="sm">
              <GithubIcon className="size-4" aria-hidden="true" /> Source Code
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

      {/* Visual Design & Responsive Preview */}
      <section className="border-y border-border bg-surface py-16 md:py-24" aria-labelledby="design-heading">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2 id="design-heading" className="eyebrow">
              Design & Interface
            </h2>
            <p className="mt-3 text-2xl font-semibold text-foreground">Responsive Presentation Across Viewports</p>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{project.designDirection}</p>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="overflow-hidden rounded-xl border border-border bg-card p-4 shadow-sm md:p-6">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Desktop Mockup</p>
              <ProjectPreview variant={project.preview} />
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 shadow-sm">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Mobile Viewport</p>
              <PhoneFrame variant={project.preview} />
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
        title={`Looking for a developer for your ${project.type.toLowerCase()}?`}
        description="Let's talk through your business requirements, timeline, and budget. I will provide an honest recommendation on technology and scope."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="All Projects"
        secondaryHref="/projects"
      />
    </>
  )
}
