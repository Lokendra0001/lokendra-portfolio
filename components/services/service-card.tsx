import Link from 'next/link'
import { ArrowRight, Check, Code2, ShoppingBag, Building2, Sparkles } from 'lucide-react'
import type { Service, ServiceIcon as ServiceIconType } from '@/data/services'
import { cn } from '@/lib/utils'

const serviceThemes: Record<
  ServiceIconType,
  {
    badge: string
    gradient: string
    iconBg: string
    iconColor: string
    accentColor: string
    Icon: typeof Code2
  }
> = {
  code: {
    badge: 'Custom Web & Apps',
    gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    iconBg: 'bg-emerald-500/10 border-emerald-500/25',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    accentColor: 'text-emerald-600 dark:text-emerald-400',
    Icon: Code2,
  },
  store: {
    badge: 'Shopify & Commerce',
    gradient: 'from-amber-500/10 via-orange-500/5 to-transparent',
    iconBg: 'bg-amber-500/10 border-amber-500/25',
    iconColor: 'text-amber-600 dark:text-amber-400',
    accentColor: 'text-amber-600 dark:text-amber-400',
    Icon: ShoppingBag,
  },
  building: {
    badge: 'High-Impact Web',
    gradient: 'from-blue-500/10 via-indigo-500/5 to-transparent',
    iconBg: 'bg-blue-500/10 border-blue-500/25',
    iconColor: 'text-blue-600 dark:text-blue-400',
    accentColor: 'text-blue-600 dark:text-blue-400',
    Icon: Building2,
  },
}

export function ServiceCard({ service }: { service: Service }) {
  const theme = serviceThemes[service.icon] || serviceThemes.code
  const IconComponent = theme.Icon

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xs transition-colors duration-300 hover:bg-surface/60">
      {/* Top Hairline Active Indicator */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        aria-hidden="true"
      />

      {/* Decorative gradient top accent */}
      <div
        className={cn(
          'pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b opacity-70 transition-opacity duration-300 group-hover:opacity-100',
          theme.gradient,
        )}
        aria-hidden="true"
      />

      {/* Card Header */}
      <div className="relative p-6 sm:p-7 pb-4">
        <div className="flex items-center justify-between gap-3">
          <span
            className={cn(
              'flex size-11 items-center justify-center rounded-lg border shadow-2xs',
              theme.iconBg,
              theme.iconColor,
            )}
            aria-hidden="true"
          >
            <IconComponent className="size-5" />
          </span>

          <span className="inline-flex items-center gap-1 rounded-full border border-border/80 bg-background/90 px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
            <Sparkles className="size-3 text-primary" />
            {theme.badge}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
          <Link
            href={`/services/${service.slug}`}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {service.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {service.tagline}
        </p>
      </div>

      {/* Capabilities List */}
      <div className="relative px-6 sm:px-7 py-3 flex-1">
        <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground/80 font-semibold mb-2.5">
          Key Capabilities
        </p>
        <ul className="space-y-2">
          {service.capabilities.slice(0, 5).map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85 transition-colors group-hover:text-foreground"
            >
              <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center bg-primary/10 text-primary">
                <Check className="size-2.5 stroke-[2.5]" aria-hidden="true" />
              </span>
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>

        {/* Stack pills preview */}
        {service.stack && service.stack.length > 0 && (
          <div className="mt-5 pt-3 border-t border-border/50 flex flex-wrap gap-1.5">
            {service.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="border border-border/70 bg-secondary/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Action Footer */}
      <div className="relative mt-auto border-t border-border/60 bg-surface/30 px-6 sm:px-7 py-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-all group-hover:gap-2">
            <span>Explore Scope & Pricing</span>
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
          <span className="font-mono text-[11px] text-muted-foreground">
            Custom Scoped
          </span>
        </div>
      </div>
    </article>
  )
}
