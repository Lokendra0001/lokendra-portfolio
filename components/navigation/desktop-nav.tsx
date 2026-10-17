'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'
import { ArrowRight, ChevronDown, Code2, ShoppingBag, Building2 } from 'lucide-react'
import { mainNav, serviceNav } from '@/data/navigation'
import { cn } from '@/lib/utils'

export function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

const linkClasses = (active: boolean) =>
  cn(
    'relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors select-none',
    active
      ? 'text-primary bg-primary/10 font-semibold'
      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60',
  )

type ServicePreviewData = {
  icon: typeof Code2
  bg: string
  border: string
  text: string
  tag: string
  showcaseTitle: string
  showcaseSubtitle: string
  url: string
  imageUrl: string
  badges: string[]
  metric: string
  statusText: string
  slug: string
}

const serviceDetails: Record<string, ServicePreviewData> = {
  '/services/mern-development': {
    icon: Code2,
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-600 dark:text-emerald-400',
    tag: 'Next.js 15 · Full-Stack',
    showcaseTitle: 'Modern Next.js SaaS Web Application',
    showcaseSubtitle: 'Custom responsive web portal with real-time analytics, user authentication, and REST/GraphQL APIs.',
    url: 'app.nextflow-saas.com',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    badges: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL'],
    metric: '$48,290 MRR · 14ms latency',
    statusText: 'Production App · Live',
    slug: '/services/mern-development',
  },
  '/services/shopify-development': {
    icon: ShoppingBag,
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    text: 'text-amber-600 dark:text-amber-400',
    tag: 'Shopify Plus · Liquid',
    showcaseTitle: 'Bespoke Shopify Storefront & Dashboard',
    showcaseSubtitle: 'Custom Liquid themes, instant 1-click cart, inventory synchronization, and conversion-optimized checkout.',
    url: 'nordic-apparel.store',
    imageUrl: 'https://images.unsplash.com/photo-1688561807440-8a57dfa77ee3?auto=format&fit=crop&w=1200&q=80',
    badges: ['Shopify Plus', 'Liquid', 'Storefront API', 'Instant Cart'],
    metric: '$14,250 Today · 4.8% Conv.',
    statusText: 'Live Storefront · Ready',
    slug: '/services/shopify-development',
  },
  '/services/business-websites': {
    icon: Building2,
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-600 dark:text-blue-400',
    tag: 'SEO · High-Converting',
    showcaseTitle: 'High-Impact Business & Marketing Website',
    showcaseSubtitle: 'Fast, professional marketing websites engineered to turn organic traffic into qualified paying inquiries.',
    url: 'apex-studio.agency',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    badges: ['100% Core Web Vitals', 'Semantic SEO', 'Mobile First', 'Lead Gen'],
    metric: '+160% Qualified Leads · 0.8s LCP',
    statusText: 'Live Website · 100/100 Lighthouse',
    slug: '/services/business-websites',
  },
}

export function DesktopNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [activePreviewKey, setActivePreviewKey] = useState<string>('/services/mern-development')
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const menuId = useId()
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setOpen(false)
    }, 220)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const currentPreview = serviceDetails[activePreviewKey] || serviceDetails['/services/mern-development']

  return (
    <>
      <nav aria-label="Main" className="hidden md:flex items-center gap-1">
        {mainNav.map((item) => {
          const active = isActivePath(pathname, item.href)
          if (item.href === '/services') {
            return (
              <div
                key={item.href}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  ref={buttonRef}
                  type="button"
                  aria-expanded={open}
                  aria-controls={menuId}
                  onClick={() => setOpen((v) => !v)}
                  className={cn(
                    linkClasses(active),
                    'flex items-center gap-1.5 cursor-pointer',
                    open && !active && 'bg-secondary text-foreground',
                  )}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={cn('size-3.5 transition-transform duration-200', open && 'rotate-180')}
                    aria-hidden="true"
                  />
                </button>
              </div>
            )
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? 'page' : undefined}
              className={linkClasses(active)}
            >
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Full-screen-width header-aligned Mega Menu Dropdown (Solid, Opaque Background) */}
      {open && (
        <div
          id={menuId}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="hidden md:block fixed inset-x-0 top-20 w-full border-b border-border bg-popover text-popover-foreground shadow-2xl z-50 animate-in fade-in-0 duration-150 before:absolute before:-top-3 before:inset-x-0 before:h-3"
        >
          <div className="container-page py-6 lg:py-7">
            <div className="grid grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Services List (7 columns) */}
              <div className="col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-border text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                    <span>Specialized Services</span>
                    <span className="text-primary font-bold">Hover to Preview</span>
                  </div>

                  <div className="space-y-2">
                    {serviceNav.map((item) => {
                      const details = serviceDetails[item.href] || serviceDetails['/services/mern-development']
                      const Icon = details.icon
                      const isHovered = activePreviewKey === item.href

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          onMouseEnter={() => setActivePreviewKey(item.href)}
                          className={cn(
                            'group flex items-start gap-3.5 rounded-xl p-3 transition-all duration-150 border',
                            isHovered
                              ? 'bg-secondary border-border shadow-2xs'
                              : 'border-transparent hover:bg-secondary/60',
                          )}
                        >
                          <span
                            className={cn(
                              'flex size-10 shrink-0 items-center justify-center rounded-lg border shadow-2xs mt-0.5 transition-transform duration-200',
                              details.bg,
                              details.border,
                              details.text,
                              isHovered && 'scale-105',
                            )}
                          >
                            <Icon className="size-5" />
                          </span>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <span
                                className={cn(
                                  'text-sm font-bold transition-colors',
                                  isHovered ? 'text-primary' : 'text-foreground group-hover:text-primary',
                                )}
                              >
                                {item.label}
                              </span>
                              <div className="flex items-center gap-1.5">
                                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground px-2 py-0.5 rounded-md bg-background border border-border/70">
                                  {details.tag}
                                </span>
                                <ArrowRight
                                  className={cn(
                                    'size-3.5 transition-all duration-200',
                                    isHovered
                                      ? 'text-primary translate-x-0 opacity-100'
                                      : 'text-muted-foreground -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100',
                                  )}
                                />
                              </div>
                            </div>
                            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                  <Link
                    href="/services"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>Explore all services, deliverables & process</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    Custom Scoped & Fixed Pricing
                  </span>
                </div>
              </div>

              {/* Right Column: ONLY the image shape (5 columns) - No text */}
              <div className="col-span-5">
                <Link
                  href={currentPreview.slug}
                  onClick={() => setOpen(false)}
                  className="group block overflow-hidden rounded-xl border border-border bg-card shadow-md hover:shadow-xl transition-all duration-300"
                  aria-label="View service preview"
                >
                  {/* Browser window frame dots (visual only, NO text) */}
                  <div className="flex items-center gap-1.5 border-b border-border bg-secondary/80 px-3.5 py-2">
                    <span className="size-2 rounded-full bg-[#ff5f56]/90" />
                    <span className="size-2 rounded-full bg-[#ffbd2e]/90" />
                    <span className="size-2 rounded-full bg-[#27c93f]/90" />
                  </div>

                  {/* Pure Image Shape */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      key={currentPreview.imageUrl}
                      src={currentPreview.imageUrl}
                      alt=""
                      className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
