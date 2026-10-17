import { buildWhatsAppLink } from '@/lib/site-config'
import { WhatsappIcon } from './brand-icons'

export function WhatsAppFloat() {
  const href = buildWhatsAppLink("Hi Lokendra, I came across your portfolio and would like to discuss a project.")
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp (opens in a new tab)"
      className="group fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_-8px_rgb(37_211_102/0.6)] transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:bottom-6 md:right-6"
    >
      <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-40 animate-ping motion-reduce:hidden" aria-hidden="true" />
      <WhatsappIcon className="relative size-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground opacity-0 shadow-sm transition-opacity group-hover:opacity-100 md:block">
        Chat on WhatsApp
      </span>
    </a>
  )
}
