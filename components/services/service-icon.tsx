import { Building2, Code2, ShoppingBag } from 'lucide-react'
import type { ServiceIcon as ServiceIconKey } from '@/data/services'
import { cn } from '@/lib/utils'

const icons = { code: Code2, store: ShoppingBag, building: Building2 }

export function ServiceIcon({ icon, className }: { icon: ServiceIconKey; className?: string }) {
  const Icon = icons[icon]
  return (
    <span
      className={cn(
        'flex size-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary',
        className,
      )}
      aria-hidden="true"
    >
      <Icon className="size-5" />
    </span>
  )
}
