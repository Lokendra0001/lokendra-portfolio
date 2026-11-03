import Link from 'next/link'
import { ArrowRight, Award, Briefcase, CheckCircle2, Download, Code2, Cpu, Globe2, GraduationCap, ShieldCheck, Terminal } from 'lucide-react'
import { isConfigured, siteConfig } from '@/lib/site-config'
import { PageHero } from '@/components/layout/page-hero'
import { ButtonLink, buttonClasses } from '@/components/common/button-link'
import { CtaSection } from '@/components/common/cta-section'
import { TechBadge } from '@/components/common/badges'
import { techGroups } from '@/data/tech'
import { achievements, education, experience, type TimelineEntry } from '@/data/profile'
import { ContactMethods } from '@/components/contact/contact-methods'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'About Me',
  description:
    'Full Stack Developer at Tech Samrajya building client websites, Shopify stores, web applications and AI automation — available for selected freelance work.',
  path: '/about',
})

const philosophies = [
  {
    title: 'Code Built to Last',
    description:
      'I write structured, clean, and maintainable code that can be easily extended by any developer in the future — no quick hacks or fragile shortcuts.',
  },
  {
    title: 'Plain Language Communication',
    description:
      'No unnecessary jargon. We discuss your project in terms of business goals, user experience, timelines, and deliverables.',
  },
  {
    title: 'Performance & Usability First',
    description:
      'Fast loading times, mobile-first responsiveness, and intuitive UI ensure your visitors have a smooth experience on any device.',
  },
  {
    title: 'Honest Scope & Transparent Costs',
    description:
      'Clear written estimates before starting. Third-party costs (domains, hosting, Shopify fees) are always identified separately.',
  },
]

const projectFocusAreas = [
  {
    icon: Globe2,
    title: 'Business & Local Services',
    desc: 'Salons, restaurants, clinics, and professional firms needing a fast, mobile-ready web presence with WhatsApp, directions, and inquiry forms.',
  },
  {
    icon: Code2,
    title: 'Custom Web Apps & Dashboards',
    desc: 'Internal business tools, inventory management, task boards, and customer portals built on the MERN stack.',
  },
  {
    icon: Cpu,
    title: 'Shopify Storefronts',
    desc: 'Custom ecommerce storefronts, theme customizations, collection setup, and app integrations that streamline online shopping.',
  },
]

function Timeline({
  icon: Icon,
  label,
  entries,
}: {
  icon: typeof Briefcase
  label: string
  entries: TimelineEntry[]
}) {
  return (
    <div>
      <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
        <Icon className="size-4" aria-hidden="true" /> {label}
      </h4>
      <ol className="mt-5 space-y-6 border-l border-border pl-6">
        {entries.map((e) => (
          <li key={e.title + e.period} className="relative">
            <span
              className={`absolute -left-[29px] top-1.5 size-2.5 rounded-full border-2 border-surface ${e.current ? 'bg-primary' : 'bg-border-strong'}`}
              aria-hidden="true"
            />
            <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
            <p className="mt-1 font-display text-base font-semibold text-foreground">{e.title}</p>
            <p className="text-sm text-muted-foreground">{e.organisation}</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">{e.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Me"
        title="Full-Stack Developer with company experience, available for selected freelance work."
        description={siteConfig.positioning}
        breadcrumbs={[{ label: 'About' }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact">
            Start a Project <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="/projects" variant="secondary">
            View My Work
          </ButtonLink>
          {isConfigured(siteConfig.resumeUrl) && (
            <a href={siteConfig.resumeUrl} download className={buttonClasses({ variant: 'ghost' })}>
              <Download className="size-4" aria-hidden="true" /> Download Resume
            </a>
          )}
        </div>
      </PageHero>

      {/* Background & Introduction */}
      <section className="container-page py-16 md:py-24" aria-labelledby="background-heading">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="space-y-6">
            <h2 id="background-heading" className="eyebrow">
              Background & Experience
            </h2>
            <h3 className="text-2xl font-semibold leading-snug text-foreground md:text-3xl">
              Bridging engineering rigor with practical business needs.
            </h3>
            <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                I work as a Full Stack Developer at Tech Samrajya in Surat, where I joined as an intern in September 2025
                and moved to a full-time role in March 2026. I build production web applications, REST APIs, Shopify
                storefronts and AI-powered automation for real clients. Alongside that role, I take on a small number of
                freelance projects for business owners and teams who need dependable technical execution.
              </p>
              <p>
                The projects in this portfolio are live work for real clients and products — from AuraChat, an Instagram
                and WhatsApp automation platform, to a research journal portal, a college website with an admin console,
                a 3D product site for a GFRP manufacturer, and Shopify stores. Each one is shown with what it actually
                does, without inflated numbers.
              </p>
              <p>
                Whether you need a new web application from scratch, an upgrade to your existing Shopify storefront, or a
                high-converting business website, I focus on delivering reliable, accessible software with transparent
                communication.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="font-display text-lg font-semibold text-foreground">How Freelance Collaboration Works</h4>
              <ul className="mt-4 space-y-3">
                {[
                  'Defined project scope, timeline, and written estimate upfront',
                  'Regular asynchronous progress demos so you always know what is being built',
                  'Direct communication via email, WhatsApp, or scheduled calls',
                  'Full ownership of all source code, domain accounts, and deployment environments',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-foreground/85">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            {/* Quick Facts Card */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 text-primary">
                <Terminal className="size-4" aria-hidden="true" />
                <h4 className="font-mono text-xs uppercase tracking-wider">Quick Details</h4>
              </div>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Name</dt>
                  <dd className="mt-0.5 font-medium text-foreground">{siteConfig.name}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Role</dt>
                  <dd className="mt-0.5 font-medium text-foreground">{siteConfig.role}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Currently</dt>
                  <dd className="mt-0.5 font-medium text-foreground">Full Stack Developer, Tech Samrajya</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Location</dt>
                  <dd className="mt-0.5 font-medium text-foreground">{siteConfig.location}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Availability</dt>
                  <dd className="mt-0.5 font-medium text-foreground">{siteConfig.availability}</dd>
                </div>
              </dl>
            </div>

            {/* Direct Connect Methods */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Get In Touch</h4>
              <ContactMethods variant="compact" className="mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience, Education & Achievements */}
      <section className="border-t border-border bg-surface py-16 md:py-24" aria-labelledby="journey-heading">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2 id="journey-heading" className="eyebrow">
              Journey
            </h2>
            <h3 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">Experience & Education</h3>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <Timeline icon={Briefcase} label="Experience" entries={experience} />
            <div className="space-y-10">
              <Timeline icon={GraduationCap} label="Education" entries={education} />
              <div>
                <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                  <Award className="size-4" aria-hidden="true" /> Achievements
                </h4>
                <ul className="mt-4 space-y-3">
                  {achievements.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-foreground/85">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Philosophies */}
      <section className="border-y border-border py-16 md:py-24" aria-labelledby="philosophy-heading">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2 id="philosophy-heading" className="eyebrow">
              Philosophy
            </h2>
            <h3 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">How I Approach Every Project</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Guiding principles that guarantee clarity, stability, and mutual respect throughout the build.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {philosophies.map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-card p-6">
                <ShieldCheck className="size-6 text-primary" aria-hidden="true" />
                <h4 className="mt-4 font-display text-base font-semibold text-foreground">{p.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="container-page py-16 md:py-24" aria-labelledby="focus-heading">
        <div className="max-w-2xl">
          <h2 id="focus-heading" className="eyebrow">
            What I Like Building
          </h2>
          <h3 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">Ideal Project Types</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            I focus on projects where clean engineering and good user experience make a tangible difference.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projectFocusAreas.map((f) => (
            <div key={f.title} className="lift-card flex flex-col rounded-xl border border-border bg-card p-6 md:p-7">
              <f.icon className="size-6 text-primary" aria-hidden="true" />
              <h4 className="mt-4 font-display text-lg font-semibold text-foreground">{f.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-t border-border bg-surface py-16 md:py-24" aria-labelledby="tech-heading">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 id="tech-heading" className="eyebrow">
              Technologies
            </h2>
            <h3 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">Tools & Frameworks</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A modern, battle-tested toolset selected for security, speed, and long-term ecosystem stability.
            </p>
          </div>
          <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {techGroups.map((group) => (
              <div key={group.title} className="bg-card p-5">
                <dt className="font-mono text-xs uppercase tracking-wider text-primary">{group.title}</dt>
                <dd className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <TechBadge key={item}>{item}</TechBadge>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaSection
        title="Ready to discuss your project?"
        description="Whether you have an exact specification or just an early concept, let's talk through your goals."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="View Projects"
        secondaryHref="/projects"
      />
    </>
  )
}
