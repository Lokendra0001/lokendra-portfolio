import Link from 'next/link'
import { ArrowRight, LayoutDashboard, Rocket, ShoppingBag, Store } from 'lucide-react'
import { services } from '@/data/services'
import { projects } from '@/data/projects'
import { techGroups } from '@/data/tech'
import { processStages } from '@/data/process'
import { faqPreview } from '@/data/faqs'
import { SectionHeading } from '@/components/common/section-heading'
import { Reveal } from '@/components/common/reveal'
import { ButtonLink } from '@/components/common/button-link'
import { TechBadge } from '@/components/common/badges'
import { FaqAccordion } from '@/components/common/faq-accordion'
import { ServiceCard } from '@/components/services/service-card'
import { ProjectCard } from '@/components/projects/project-card'
import { siteConfig } from '@/lib/site-config'

export function IntroSection() {
  return (
    <section aria-labelledby="intro-heading" className="container-page py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow mb-3">About me</p>
          <h2 id="intro-heading" className="text-3xl font-semibold leading-tight md:text-4xl">
            A full-stack developer with company experience, now taking on freelance work.
          </h2>
        </Reveal>
        <Reveal delay={80} className="space-y-5 text-pretty leading-relaxed text-muted-foreground md:text-lg">
          <p>
            {"I'm"} {siteConfig.name}, a Full-Stack Developer building modern websites, e-commerce experiences, and web
            applications. I work with MERN technologies and Shopify to help businesses turn their ideas into practical
            digital solutions.
          </p>
          <p>
            I currently work as a developer at a company, and I take on a limited number of independent projects
            alongside that role. The projects on this site are my own personal and concept work — built to show how I
            approach real problems.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline underline-offset-4"
          >
            More about me <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export function ServicesOverview() {
  return (
    <section
      aria-labelledby="services-heading"
      className="relative border-y border-border bg-gradient-to-b from-surface/70 via-background to-surface/70 py-20 md:py-28 overflow-hidden"
    >
      {/* Ambient background glow & subtle grid */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 size-[500px] rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative z-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="services-heading"
            eyebrow="Specialized Capabilities"
            title="What I can build for you"
            description="Three focused service areas, each scoped to your requirements rather than a one-size-fits-all package."
          />
          <ButtonLink href="/services" variant="secondary" className="shrink-0">
            Explore All Services
          </ButtonLink>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="li" key={service.slug} delay={i * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured)
  return (
    <section aria-labelledby="work-heading" className="container-page py-20 md:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          id="work-heading"
          eyebrow="Selected work"
          title="Personal, concept, and demo projects"
          description="Each project is clearly labelled. None of these are presented as paid client work."
        />
        <ButtonLink href="/projects" variant="secondary" className="shrink-0">
          View Projects
        </ButtonLink>
      </div>
      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal as="li" key={project.slug} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </ul>
    </section>
  )
}

export { TechStackSection } from './tech-section'

export function ProcessPreview() {
  return (
    <section aria-labelledby="process-heading" className="container-page py-20 md:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          id="process-heading"
          eyebrow="How it works"
          title="A clear process from first message to handover"
          description="Timelines depend on scope and how quickly content is available. Every stage has a clear checkpoint."
        />
        <ButtonLink href="/process" variant="secondary" className="shrink-0">
          See the full process
        </ButtonLink>
      </div>
      <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {processStages.slice(0, 7).map((stage) => (
          <li key={stage.step} className="bg-card p-6">
            <span className="font-mono text-sm text-primary">{stage.step}</span>
            <h3 className="mt-3 text-base font-semibold text-foreground">{stage.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.summary}</p>
          </li>
        ))}
        <li className="flex flex-col justify-between bg-primary/10 p-6">
          <p className="text-sm leading-relaxed text-foreground">Ready to begin with step one?</p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            Discuss Your Idea <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </li>
      </ol>
    </section>
  )
}

const audiences = [
  {
    icon: Store,
    title: 'Small & local businesses',
    description: 'Salons, restaurants, shops, and service providers who need a credible, mobile-friendly website.',
    href: '/services/business-websites',
  },
  {
    icon: Rocket,
    title: 'Startups',
    description: 'Founders who need a working product, landing page, or internal tool built on a solid foundation.',
    href: '/services/mern-development',
  },
  {
    icon: ShoppingBag,
    title: 'Ecommerce businesses',
    description: 'Brands launching on Shopify or improving the design and structure of an existing store.',
    href: '/services/shopify-development',
  },
  {
    icon: LayoutDashboard,
    title: 'Teams needing custom apps',
    description: 'Companies replacing spreadsheets with dashboards, CRUD workflows, and integrated systems.',
    href: '/services/mern-development',
  },
]

export function WhoIWorkWith() {
  return (
    <section aria-labelledby="audience-heading" className="border-y border-border bg-surface py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          id="audience-heading"
          eyebrow="Who I work with"
          title="Built for businesses at different stages"
          align="center"
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 60}>
              <Link
                href={item.href}
                className="lift-card group flex h-full flex-col rounded-xl border border-border bg-card p-6"
              >
                <item.icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-5 font-display text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function FaqPreview() {
  return (
    <section aria-labelledby="faq-heading" className="container-page py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading
            id="faq-heading"
            eyebrow="FAQ"
            title="Common questions"
            description="Straight answers about cost, timelines, and how we would work together."
          />
          <ButtonLink href="/faq" variant="secondary" className="mt-8">
            Read all FAQs
          </ButtonLink>
        </div>
        <FaqAccordion items={faqPreview} />
      </div>
    </section>
  )
}
