import { Plus } from 'lucide-react'
import type { Faq } from '@/data/faqs'
import { cn } from '@/lib/utils'

export function FaqAccordion({ items, className }: { items: Faq[]; className?: string }) {
  return (
    <div className={cn('divide-y divide-border overflow-hidden rounded-xl border border-border bg-card', className)}>
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-5 py-5 text-left font-medium text-foreground transition-colors hover:bg-secondary/40 md:px-6 [&::-webkit-details-marker]:hidden">
            <span className="text-pretty">{item.question}</span>
            <span
              className="flex size-7 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground transition-transform duration-300 group-open:rotate-45 group-open:border-primary/50 group-open:text-primary"
              aria-hidden="true"
            >
              <Plus className="size-4" />
            </span>
          </summary>
          <div className="px-5 pb-5 text-pretty leading-relaxed text-muted-foreground md:px-6">{item.answer}</div>
        </details>
      ))}
    </div>
  )
}
