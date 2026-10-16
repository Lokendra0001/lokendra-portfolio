import { Mail, MessageCircle } from 'lucide-react'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '@/components/common/brand-icons'
import type { ComponentType } from 'react'
import { buildWhatsAppLink, isConfigured, placeholderLabels, siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

type Method = {
  label: string
  icon: ComponentType<{ className?: string }>
  href: string | null
  display: string
  placeholder: string
  external: boolean
}

export function getContactMethods(): Method[] {
  const { email, whatsapp } = siteConfig.contact
  const { github, linkedin } = siteConfig.social
  return [
    {
      label: 'Email',
      icon: Mail,
      href: isConfigured(email) ? `mailto:${email}` : null,
      display: email,
      placeholder: placeholderLabels.email,
      external: false,
    },
    {
      label: 'WhatsApp',
      icon: MessageCircle,
      href: buildWhatsAppLink(),
      display: whatsapp ? `+${whatsapp}` : '',
      placeholder: placeholderLabels.whatsapp,
      external: true,
    },
    {
      label: 'GitHub',
      icon: Github,
      href: isConfigured(github) ? github : null,
      display: github.replace(/^https?:\/\/(www\.)?/, ''),
      placeholder: placeholderLabels.github,
      external: true,
    },
    {
      label: 'LinkedIn',
      icon: Linkedin,
      href: isConfigured(linkedin) ? linkedin : null,
      display: linkedin.replace(/^https?:\/\/(www\.)?/, ''),
      placeholder: placeholderLabels.linkedin,
      external: true,
    },
  ]
}

export function ContactMethods({
  variant = 'full',
  className,
}: {
  variant?: 'full' | 'compact'
  className?: string
}) {
  const methods = getContactMethods()

  return (
    <ul className={cn(variant === 'full' ? 'grid gap-3 sm:grid-cols-2' : 'space-y-2.5', className)}>
      {methods.map(({ label, icon: Icon, href, display, placeholder, external }) => {
        const content = (
          <>
            <Icon className={cn('shrink-0', variant === 'full' ? 'size-5 text-primary' : 'size-4')} aria-hidden="true" />
            <span className="min-w-0">
              {variant === 'full' && <span className="block text-sm font-medium text-foreground">{label}</span>}
              <span
                className={cn(
                  'block truncate',
                  variant === 'full' ? 'text-sm text-muted-foreground' : 'text-sm',
                  !href && 'font-mono text-xs text-muted-foreground',
                )}
              >
                {href ? display : placeholder}
              </span>
            </span>
          </>
        )

        const base =
          variant === 'full'
            ? 'flex items-center gap-3 rounded-xl border border-border bg-card p-4'
            : 'flex items-center gap-2.5'

        return (
          <li key={label}>
            {href ? (
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={cn(
                  base,
                  variant === 'full'
                    ? 'lift-card'
                    : 'text-foreground/80 transition-colors hover:text-primary',
                )}
              >
                {content}
                <span className="sr-only">{external ? ' (opens in a new tab)' : ''}</span>
              </a>
            ) : (
              <div className={cn(base, 'text-muted-foreground')} aria-label={`${label}: not configured yet`}>
                {content}
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}
