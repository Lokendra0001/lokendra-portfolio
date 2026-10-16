import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'

export type Crumb = { label: string; href?: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="size-3.5" aria-hidden="true" />
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-foreground">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

type PageHeroProps = {
  eyebrow?: string
  title: string
  description?: string
  breadcrumbs?: Crumb[]
  children?: ReactNode
  aside?: ReactNode
}

export function PageHero({ eyebrow, title, description, breadcrumbs, children, aside }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="ambient-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-page relative py-14 md:py-20">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <div className={aside ? 'mt-8 grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]' : 'mt-8'}>
          <div className="max-w-3xl 2xl:max-w-4xl">
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            <h1 className="text-4xl font-semibold leading-[1.08] md:text-5xl lg:text-6xl 2xl:text-7xl">{title}</h1>
            {description && (
              <p className="mt-6 max-w-2xl 2xl:max-w-3xl text-pretty text-lg 2xl:text-xl leading-relaxed text-muted-foreground">{description}</p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>
          {aside && <div className="min-w-0">{aside}</div>}
        </div>
      </div>
    </section>
  )
}
