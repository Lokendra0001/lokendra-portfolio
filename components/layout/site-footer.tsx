import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import { footerNav } from '@/data/navigation'
import { siteConfig } from '@/lib/site-config'
import { Logo } from './site-header'
import { ContactMethods } from '@/components/contact/contact-methods'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {siteConfig.role} building business websites, Shopify storefronts, and custom web applications.{' '}
            {siteConfig.availability}
          </p>
        </div>

        {footerNav.map((group) => (
          <nav key={group.title} aria-label={`Footer ${group.title}`}>
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">{group.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-foreground/80 transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">Contact</h2>
          <ContactMethods variant="compact" className="mt-4" />
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
            Back to top <ArrowUp className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
