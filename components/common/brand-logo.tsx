'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface BrandLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

/**
 * Pure Typographic "Lokendra Dev" Brand Logo
 * Contains exclusively the brand wordmark "Lokendra Dev" in a luxury, modern tech typographic style.
 * Zero extra icons or badges.
 * Automatically switches between Light and Dark mode variants for crystal-clear readability.
 */
export function BrandLogo({ className, size = 'md' }: BrandLogoProps) {
  const heightClass = size === 'sm' ? 'h-6 sm:h-7' : size === 'lg' ? 'h-9 sm:h-10' : 'h-7 sm:h-8'

  return (
    <Link
      href="/"
      className={cn('group inline-flex items-center select-none transition-transform duration-200 hover:scale-[1.03]', className)}
      aria-label="Lokendra Dev — Home"
    >
      {/* Light Theme: Deep Obsidian 'Lokendra' + Rich Emerald 'Dev' */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/lokendra-dev-light.png"
        alt="Lokendra Dev"
        className={cn(
          'block dark:hidden w-auto object-contain transition-all duration-300 drop-shadow-[0_1px_4px_rgba(5,150,105,0.15)] group-hover:drop-shadow-[0_2px_8px_rgba(5,150,105,0.25)]',
          heightClass,
        )}
      />

      {/* Dark Theme: Crisp Pure White 'Lokendra' + Neon Emerald Glowing 'Dev' */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/lokendra-dev-dark.png"
        alt="Lokendra Dev"
        className={cn(
          'hidden dark:block w-auto object-contain transition-all duration-300 drop-shadow-[0_0_12px_rgba(16,185,129,0.25)] group-hover:drop-shadow-[0_0_18px_rgba(16,185,129,0.45)]',
          heightClass,
        )}
      />
    </Link>
  )
}

/**
 * Standard Logo export used across site-header and site-footer
 */
export function Logo({ className, size }: BrandLogoProps) {
  return <BrandLogo className={className} size={size} />
}
