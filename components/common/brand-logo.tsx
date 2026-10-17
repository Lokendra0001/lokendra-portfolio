'use client'

import { useId } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface BrandLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  iconOnly?: boolean
  showBadge?: boolean
}

/**
 * 3D Faceted Hexagonal Emerald Prism SVG Icon
 * Designed specifically for Lokendra Dev portfolio.
 * Adapts with precision geometry, crystal facets, and AI spark to dark & light modes.
 */
export function BrandMark({
  className,
  size = 'md',
}: {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}) {
  const rawId = useId()
  const uid = rawId.replace(/[^a-zA-Z0-9_-]/g, '')

  const iconSizeClass =
    size === 'sm'
      ? 'size-7 sm:size-8'
      : size === 'lg'
      ? 'size-10 sm:size-11'
      : 'size-8 sm:size-9'

  const dtl = `p-d-tl-${uid}`
  const dtr = `p-d-tr-${uid}`
  const dl = `p-d-l-${uid}`
  const dr = `p-d-r-${uid}`
  const dbl = `p-d-bl-${uid}`
  const dbr = `p-d-br-${uid}`
  const drl = `p-d-rl-${uid}`
  const drr = `p-d-rr-${uid}`
  const dsnw = `p-d-snw-${uid}`
  const dsne = `p-d-sne-${uid}`
  const dssw = `p-d-ssw-${uid}`
  const dsse = `p-d-sse-${uid}`

  const ltl = `p-l-tl-${uid}`
  const ltr = `p-l-tr-${uid}`
  const ll = `p-l-l-${uid}`
  const lr = `p-l-r-${uid}`
  const lbl = `p-l-bl-${uid}`
  const lbr = `p-l-br-${uid}`
  const lrl = `p-l-rl-${uid}`
  const lrr = `p-l-rr-${uid}`
  const lsnw = `p-l-snw-${uid}`
  const lsne = `p-l-sne-${uid}`
  const lssw = `p-l-ssw-${uid}`
  const lsse = `p-l-sse-${uid}`

  return (
    <div
      className={cn(
        'relative shrink-0 flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-105 group-hover:rotate-1',
        iconSizeClass,
        className
      )}
    >
      {/* ---------------- DARK THEME VECTOR EMBLEM ---------------- */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden dark:block w-full h-full drop-shadow-[0_0_12px_rgba(16,185,129,0.35)] group-hover:drop-shadow-[0_0_20px_rgba(16,185,129,0.65)] transition-all duration-300"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={dtl} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a7f3d0" />
            <stop offset="100%" stopColor="#6ee7b7" />
          </linearGradient>
          <linearGradient id={dtr} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6ee7b7" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id={dl} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6ee7b7" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id={dr} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#022c22" />
          </linearGradient>
          <linearGradient id={dbl} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id={dbr} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#022c22" />
          </linearGradient>
          <linearGradient id={drl} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a7f3d0" />
            <stop offset="100%" stopColor="#6ee7b7" />
          </linearGradient>
          <linearGradient id={drr} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a7f3d0" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>

          {/* 3D Specular Facets of Central Spark */}
          <linearGradient id={dsnw} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#a7f3d0" />
          </linearGradient>
          <linearGradient id={dsne} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a7f3d0" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id={dssw} x1="0%" y1="100%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a7f3d0" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id={dsse} x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#022c22" />
          </linearGradient>
        </defs>

        {/* Outer Hexagon Bevels */}
        <polygon points="50,6 14,26 26,33 50,20" fill={`url(#${dtl})`} />
        <polygon points="14,26 14,74 26,67 26,33" fill={`url(#${dl})`} />
        <polygon points="14,74 50,94 50,80 26,67" fill={`url(#${dbl})`} />
        <polygon points="50,94 86,74 74,67 50,80" fill={`url(#${dbr})`} />
        <polygon points="86,74 86,26 74,33 74,67" fill={`url(#${dr})`} />
        <polygon points="86,26 50,6 50,20 74,33" fill={`url(#${dtr})`} />

        {/* Inner Chiseled Facets */}
        <polygon points="50,20 26,33 32,38 50,28" fill={`url(#${drl})`} opacity="0.9" />
        <polygon points="26,33 26,67 32,62 32,38" fill={`url(#${drl})`} opacity="0.75" />
        <polygon points="26,67 50,80 50,72 32,62" fill={`url(#${drr})`} opacity="0.85" />
        <polygon points="50,80 74,67 68,62 50,72" fill={`url(#${dr})`} opacity="0.9" />
        <polygon points="74,67 74,33 68,38 68,62" fill={`url(#${dr})`} opacity="0.7" />
        <polygon points="74,33 50,20 50,28 68,38" fill={`url(#${drr})`} opacity="0.95" />

        {/* Gem Ridge Accent Lines */}
        <line x1="50" y1="6" x2="50" y2="20" stroke="#a7f3d0" strokeWidth="1.2" strokeLinecap="round" opacity="0.9" />
        <line x1="14" y1="26" x2="26" y2="33" stroke="#a7f3d0" strokeWidth="1.2" strokeLinecap="round" opacity="0.9" />
        <line x1="14" y1="74" x2="26" y2="67" stroke="#6ee7b7" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
        <line x1="50" y1="94" x2="50" y2="80" stroke="#10b981" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
        <line x1="86" y1="74" x2="74" y2="67" stroke="#059669" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
        <line x1="86" y1="26" x2="74" y2="33" stroke="#a7f3d0" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />

        {/* 3D Faceted AI & Tech Spark */}
        <path d="M50 31 C50 42 42 50 31 50 L50 50 Z" fill={`url(#${dsnw})`} />
        <path d="M50 31 C50 42 58 50 69 50 L50 50 Z" fill={`url(#${dsne})`} />
        <path d="M31 50 C42 50 50 58 50 69 L50 50 Z" fill={`url(#${dssw})`} />
        <path d="M69 50 C58 50 50 58 50 69 L50 50 Z" fill={`url(#${dsse})`} />

        {/* Center Specular Glint */}
        <circle cx="50" cy="50" r="3.2" fill="#ffffff" />
        <circle cx="50" cy="50" r="1.6" fill="#a7f3d0" />
      </svg>

      {/* ---------------- LIGHT THEME VECTOR EMBLEM ---------------- */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block dark:hidden w-full h-full drop-shadow-[0_1px_3px_rgba(5,150,105,0.2)] group-hover:drop-shadow-[0_2px_8px_rgba(5,150,105,0.35)] transition-all duration-300"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={ltl} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id={ltr} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id={ll} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
          <linearGradient id={lr} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="50%" stopColor="#047857" />
            <stop offset="100%" stopColor="#064e3b" />
          </linearGradient>
          <linearGradient id={lbl} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#047857" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id={lbr} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#047857" />
            <stop offset="100%" stopColor="#064e3b" />
          </linearGradient>
          <linearGradient id={lrl} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id={lrr} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>

          {/* Spark Facets for Light Mode */}
          <linearGradient id={lsnw} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#6ee7b7" />
          </linearGradient>
          <linearGradient id={lsne} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6ee7b7" />
            <stop offset="0%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id={lssw} x1="0%" y1="100%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6ee7b7" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id={lsse} x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#064e3b" />
          </linearGradient>
        </defs>

        <polygon points="50,6 14,26 26,33 50,20" fill={`url(#${ltl})`} />
        <polygon points="14,26 14,74 26,67 26,33" fill={`url(#${ll})`} />
        <polygon points="14,74 50,94 50,80 26,67" fill={`url(#${lbl})`} />
        <polygon points="50,94 86,74 74,67 50,80" fill={`url(#${lbr})`} />
        <polygon points="86,74 86,26 74,33 74,67" fill={`url(#${lr})`} />
        <polygon points="86,26 50,6 50,20 74,33" fill={`url(#${ltr})`} />

        <polygon points="50,20 26,33 32,38 50,28" fill={`url(#${lrl})`} opacity="0.9" />
        <polygon points="26,33 26,67 32,62 32,38" fill={`url(#${lrl})`} opacity="0.75" />
        <polygon points="26,67 50,80 50,72 32,62" fill={`url(#${lrr})`} opacity="0.85" />
        <polygon points="50,80 74,67 68,62 50,72" fill={`url(#${lr})`} opacity="0.9" />
        <polygon points="74,67 74,33 68,38 68,62" fill={`url(#${lr})`} opacity="0.7" />
        <polygon points="74,33 50,20 50,28 68,38" fill={`url(#${lrr})`} opacity="0.95" />

        <line x1="50" y1="6" x2="50" y2="20" stroke="#34d399" strokeWidth="1.2" strokeLinecap="round" opacity="0.9" />
        <line x1="14" y1="26" x2="26" y2="33" stroke="#34d399" strokeWidth="1.2" strokeLinecap="round" opacity="0.9" />
        <line x1="14" y1="74" x2="26" y2="67" stroke="#10b981" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
        <line x1="50" y1="94" x2="50" y2="80" stroke="#059669" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
        <line x1="86" y1="74" x2="74" y2="67" stroke="#047857" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
        <line x1="86" y1="26" x2="74" y2="33" stroke="#34d399" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />

        <path d="M50 31 C50 42 42 50 31 50 L50 50 Z" fill={`url(#${lsnw})`} />
        <path d="M50 31 C50 42 58 50 69 50 L50 50 Z" fill={`url(#${lsne})`} />
        <path d="M31 50 C42 50 50 58 50 69 L50 50 Z" fill={`url(#${lssw})`} />
        <path d="M69 50 C58 50 50 58 50 69 L50 50 Z" fill={`url(#${lsse})`} />

        <circle cx="50" cy="50" r="3.2" fill="#ffffff" />
        <circle cx="50" cy="50" r="1.6" fill="#34d399" />
      </svg>
    </div>
  )
}

/**
 * Pure Vector "Lokendra Dev" Brand Logo
 * Combines the 3D Faceted Hexagonal Emerald Prism mark with high-end modern typography.
 * Completely eliminates low-res raster blurs, black spray cutouts, and halo artifacts.
 * Automatically adapts perfectly to both Dark and Light mode.
 */
export function BrandLogo({
  className,
  size = 'md',
  iconOnly = false,
}: BrandLogoProps) {
  const textSizeClass =
    size === 'sm'
      ? 'text-base sm:text-lg'
      : size === 'lg'
      ? 'text-xl sm:text-2xl'
      : 'text-lg sm:text-xl'

  return (
    <Link
      href="/"
      className={cn(
        'group inline-flex items-center gap-2.5 sm:gap-3 select-none transition-transform duration-200 active:scale-[0.98]',
        className
      )}
      aria-label="Lokendra Dev — Full-Stack Developer & AI Automations Home"
    >
      {/* 3D Hexagonal Emerald Prism Mark */}
      <BrandMark size={size} />

      {/* Modern Typographic Wordmark */}
      {!iconOnly && (
        <div className="flex items-center tracking-tight leading-none">
          <span
            className={cn(
              'font-extrabold text-foreground transition-colors duration-200 group-hover:text-foreground/90',
              textSizeClass
            )}
          >
            Lokendra
          </span>

          <span
            className={cn(
              'ml-1.5 font-extrabold text-primary dark:text-emerald-400 transition-colors duration-200 group-hover:text-primary/90 dark:group-hover:text-emerald-300 dark:drop-shadow-[0_0_10px_rgba(16,185,129,0.35)]',
              textSizeClass
            )}
          >
            Dev
          </span>

          {/* Micro Status Pulse Dot */}
          <span
            className="ml-1.5 size-1.5 rounded-full bg-primary dark:bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)] shrink-0 transition-transform duration-200 group-hover:scale-125"
            aria-hidden="true"
          />
        </div>
      )}
    </Link>
  )
}

/**
 * Standard Logo export used across site-header and site-footer
 */
export function Logo({ className, size, iconOnly }: BrandLogoProps) {
  return <BrandLogo className={className} size={size} iconOnly={iconOnly} />
}
