import {
  DEV_NAME,
  DEV_INITIALS,
  DEV_ROLE,
  DEV_LOCATION,
  DEV_AVAILABILITY,
  DEV_POSITIONING,
  CONTACT_EMAIL,
  CONTACT_WHATSAPP,
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
  RESUME_URL,
  PROFILE_PHOTO,
  SITE_URL,
  PERSONAL_DETAILS,
  CONTACT_INFO,
  SOCIAL_LINKS,
  PORTFOLIO_CONFIG,
} from '@/config/constant'

export {
  PERSONAL_DETAILS,
  CONTACT_INFO,
  SOCIAL_LINKS,
  PORTFOLIO_CONFIG,
}

/**
 * Single source of truth for personal details, contact methods, and social links.
 * All core values are defined in config/constant.ts with capital variables and objects.
 */
export const siteConfig = {
  name: DEV_NAME,
  initials: DEV_INITIALS,
  role: DEV_ROLE,
  location: DEV_LOCATION,
  url: SITE_URL,
  positioning: DEV_POSITIONING,
  availability: DEV_AVAILABILITY,

  contact: {
    email: CONTACT_EMAIL,
    whatsapp: CONTACT_WHATSAPP,
  },

  social: {
    github: SOCIAL_GITHUB,
    linkedin: SOCIAL_LINKEDIN,
  },

  resumeUrl: RESUME_URL,
  profilePhoto: PROFILE_PHOTO,
} as const

export const placeholderLabels = {
  email: '[YOUR PROFESSIONAL EMAIL]',
  whatsapp: '[YOUR WHATSAPP NUMBER]',
  github: '[YOUR GITHUB URL]',
  linkedin: '[YOUR LINKEDIN URL]',
  resume: '[YOUR RESUME URL]',
} as const

export function isConfigured(value: string | undefined | null): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

export function buildMailto(subject: string, body: string) {
  if (!isConfigured(siteConfig.contact.email)) return null
  const params = new URLSearchParams({ subject, body })
  return `mailto:${siteConfig.contact.email}?${params.toString().replace(/\+/g, '%20')}`
}

export function buildWhatsAppLink(message?: string) {
  if (!isConfigured(siteConfig.contact.whatsapp)) return null
  const number = siteConfig.contact.whatsapp.replace(/\D/g, '')
  return message
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${number}`
}
