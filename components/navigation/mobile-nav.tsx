'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { mainNav, serviceNav } from '@/data/navigation'
import { buttonClasses } from '@/components/common/button-link'
import { isActivePath } from './desktop-nav'
import { cn } from '@/lib/utils'

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.querySelector<HTMLElement>('a')?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <div className="md:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
        className="flex size-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-secondary"
      >
        {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
      </button>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto border-t border-border bg-background/95 backdrop-blur-xl"
      >
        <nav aria-label="Mobile" className="container-page flex min-h-full flex-col py-6">
          <ul className="space-y-1">
            {mainNav.map((item) => {
              const active = isActivePath(pathname, item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium transition-colors',
                      active
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground',
                    )}
                  >
                    <span>{item.label}</span>
                    {active && <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />}
                  </Link>

                  {item.href === '/services' && (
                    <ul className="my-1.5 ml-3 space-y-1 border-l border-border pl-3">
                      {serviceNav.map((service) => (
                        <li key={service.href}>
                          <Link
                            href={service.href}
                            onClick={close}
                            className={cn(
                              'block rounded-md px-3 py-1.5 text-xs transition-colors',
                              pathname === service.href
                                ? 'text-primary font-semibold'
                                : 'text-muted-foreground hover:text-foreground',
                            )}
                          >
                            {service.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
            <li>
              <Link
                href="/faq"
                onClick={close}
                aria-current={pathname === '/faq' ? 'page' : undefined}
                className={cn(
                  'block rounded-lg px-3 py-2.5 text-base font-medium transition-colors',
                  pathname === '/faq'
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground',
                )}
              >
                FAQ
              </Link>
            </li>
          </ul>

          <div className="mt-auto pt-6">
            <Link
              href="/contact"
              onClick={close}
              className={buttonClasses({ size: 'md', className: 'w-full rounded-lg' })}
            >
              Start a Project <ArrowRight className="size-4 ml-1" />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}
