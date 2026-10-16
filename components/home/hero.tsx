import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/common/button-link'
import { ProjectPreview } from '@/components/projects/project-preview'
import { siteConfig } from '@/lib/site-config'
import { HERO_CONTENT } from '@/config/constant'

function CodePanel() {
  return (
    <div className="overflow-hidden rounded-xl border border-border/80 bg-slate-900/95 font-mono text-[11px] leading-relaxed shadow-[0_25px_50px_-20px_rgba(0,0,0,0.5)] backdrop-blur-md">
      <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-950/80 px-3.5 py-2 text-[10px] text-slate-400">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-[#ff5f56]/80" />
          <span className="size-2 rounded-full bg-[#ffbd2e]/80" />
          <span className="size-2 rounded-full bg-[#27c93f]/80" />
        </span>
        <span className="ml-2 font-mono text-slate-300">routes/inquiries.ts</span>
      </div>
      <pre className="overflow-hidden p-3.5 text-slate-200" aria-hidden="true">
        <code>
          <span className="text-slate-500">{'// validate & persist inquiry'}</span>
          {'\n'}
          <span className="text-emerald-400">router</span>.post(<span className="text-amber-300">{"'/'"}</span>, validate,{'\n'}
          {'  '}
          <span className="text-purple-400">async</span> (req, res) {'=> {'}
          {'\n'}
          {'    '}
          <span className="text-purple-400">const</span> doc = <span className="text-purple-400">await</span> Inquiry
          {'\n'}
          {'      '}.create(req.body){'\n'}
          {'    '}res.status(<span className="text-emerald-400">201</span>).json(doc){'\n'}
          {'  })'}
          <span className="animate-caret ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 bg-emerald-500" />
        </code>
      </pre>
    </div>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl 2xl:max-w-2xl" aria-hidden="true">
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-primary/15 blur-3xl" />
      {/* Layered perspective version on large screens; flat single mockup on small screens */}
      <div className="relative lg:hidden">
        <ProjectPreview variant="dashboard" />
      </div>
      <div className="relative hidden h-[460px] 2xl:h-[520px] [perspective:1600px] lg:block">
        <div className="absolute inset-0 [transform-style:preserve-3d] [transform:rotateY(-14deg)_rotateX(6deg)]">
          <div className="absolute left-0 top-6 w-[86%] [transform:translateZ(0px)]">
            <ProjectPreview variant="dashboard" />
          </div>
          <div className="animate-float-slow absolute right-0 top-[210px] 2xl:top-[240px] w-[58%] [transform:translateZ(60px)]">
            <ProjectPreview variant="store" />
          </div>
          <div className="absolute -left-6 top-[300px] 2xl:top-[340px] w-[52%] [transform:translateZ(90px)]">
            <CodePanel />
          </div>
        </div>
      </div>
    </div>
  )
}

export function HomeHero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden border-b border-border">
      <div className="ambient-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-page relative grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:py-28 2xl:py-32">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            {HERO_CONTENT.BADGE}
          </p>
          <h1
            id="hero-heading"
            className="mt-6 text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl 2xl:text-7xl"
          >
            Websites and Web Applications Built for{' '}
            <span className="text-primary">Real Business Needs.</span>
          </h1>
          <p className="mt-6 max-w-xl 2xl:max-w-2xl text-pretty text-lg 2xl:text-xl leading-relaxed text-muted-foreground">
            {HERO_CONTENT.SUBTITLE}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" size="lg">
              Start a Project <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/projects" variant="secondary" size="lg">
              View My Work
            </ButtonLink>
          </div>
          <p className="mt-8 font-mono text-xs text-muted-foreground">
            {HERO_CONTENT.TECH_STACK}
          </p>
        </div>
        <HeroVisual />
      </div>
    </section>
  )
}
