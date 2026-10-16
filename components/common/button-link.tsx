import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-emerald-600 shadow-2xs',
  secondary: 'border border-border-strong bg-card text-foreground hover:bg-secondary',
  ghost: 'text-muted-foreground hover:text-foreground hover:bg-secondary',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

export function buttonClasses({
  variant = 'primary',
  size = 'md',
  className,
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  return cn(base, variants[variant], sizes[size], className)
}

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, 'className'> & {
  variant?: Variant
  size?: Size
  className?: string
  external?: boolean
  children: ReactNode
}

export function ButtonLink({ variant, size, className, external, children, href, ...props }: ButtonLinkProps) {
  const classes = buttonClasses({ variant, size, className })
  if (external) {
    return (
      <a href={String(href)} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  )
}
