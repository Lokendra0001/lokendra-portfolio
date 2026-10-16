'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { DesktopNav } from '@/components/navigation/desktop-nav'
import { MobileNav } from '@/components/navigation/mobile-nav'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import { BrandLogo } from '@/components/common/brand-logo'

export function Logo() {
  return <BrandLogo />
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 transition-colors">
      <a
        href="#main"
        className="sr-only rounded-md bg-primary px-3 py-2 text-xs text-primary-foreground focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50"
      >
        Skip to content
      </a>

      <div className="container-page relative flex h-20 items-center justify-between gap-6">
        <Logo />

        <DesktopNav />

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-2xs hover:bg-primary/90 transition-colors"
          >
            <span>Start a Project</span>
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
