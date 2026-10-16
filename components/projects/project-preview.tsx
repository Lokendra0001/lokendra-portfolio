import type { ReactNode } from 'react'
import type { PreviewVariant } from '@/data/projects'
import { cn } from '@/lib/utils'

export function BrowserFrame({
  url,
  children,
  className,
}: {
  url: string
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-border/80 bg-card shadow-[0_15px_35px_-15px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]',
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border/70 bg-secondary/50 px-3 py-2">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#ff5f56] border border-[#e0443e]/40" />
          <span className="size-2.5 rounded-full bg-[#ffbd2e] border border-[#dea123]/40" />
          <span className="size-2.5 rounded-full bg-[#27c93f] border border-[#1aab29]/40" />
        </span>
        <div className="ml-2 min-w-0 flex-1 flex items-center gap-1.5 truncate rounded-md bg-background/90 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground border border-border/60 shadow-2xs">
          <span className="size-1.5 rounded-full bg-emerald-500/80" />
          <span className="truncate">{url}</span>
        </div>
      </div>
      {children}
    </div>
  )
}

const Bar = ({ className }: { className?: string }) => <div className={cn('h-1.5 rounded-full', className)} />

function SalonPreview() {
  return (
    <div className="bg-[#141210] p-4 text-[#f3ede2]">
      <div className="flex items-center justify-between">
        <span className="font-serif text-[11px] tracking-[0.2em] text-[#d4af6a]">HAIRPORT</span>
        <span className="flex gap-2" aria-hidden="true">
          <Bar className="w-6 bg-[#f3ede2]/30" />
          <Bar className="w-6 bg-[#f3ede2]/30" />
          <Bar className="w-6 bg-[#f3ede2]/30" />
        </span>
      </div>
      <div className="mt-5 grid grid-cols-[1.2fr_1fr] gap-3">
        <div>
          <p className="font-serif text-base leading-tight">Precision cuts, classic care.</p>
          <Bar className="mt-2 w-4/5 bg-[#f3ede2]/20" />
          <Bar className="mt-1.5 w-3/5 bg-[#f3ede2]/20" />
          <div className="mt-3 flex gap-1.5">
            <span className="rounded-sm bg-[#d4af6a] px-2 py-1 text-[8px] font-semibold text-[#141210]">WhatsApp</span>
            <span className="rounded-sm border border-[#d4af6a]/50 px-2 py-1 text-[8px] text-[#d4af6a]">Directions</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5" aria-hidden="true">
          <div className="aspect-square rounded-sm bg-gradient-to-br from-[#3a2f22] to-[#1d1913]" />
          <div className="aspect-square rounded-sm bg-gradient-to-br from-[#2b2620] to-[#191612]" />
          <div className="col-span-2 h-8 rounded-sm bg-gradient-to-r from-[#2f2820] to-[#1d1913]" />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-1.5 border-t border-[#f3ede2]/10 pt-3" aria-hidden="true">
        {['Haircut', 'Beard', 'Styling'].map((s) => (
          <div key={s} className="rounded-sm border border-[#f3ede2]/10 p-1.5">
            <p className="text-[8px] text-[#d4af6a]">{s}</p>
            <Bar className="mt-1 w-3/4 bg-[#f3ede2]/15" />
          </div>
        ))}
      </div>
    </div>
  )
}

function StorePreview() {
  return (
    <div className="bg-[#f8f8f6] p-4 text-[#16181d]">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold tracking-tight">north/goods</span>
        <span className="flex items-center gap-2" aria-hidden="true">
          <Bar className="w-5 bg-[#16181d]/25" />
          <Bar className="w-5 bg-[#16181d]/25" />
          <span className="rounded-full bg-[#16181d] px-2 py-0.5 text-[7px] font-semibold text-white">Cart (2)</span>
        </span>
      </div>
      <div className="mt-3.5 rounded-lg bg-white p-3 border border-slate-200/80 shadow-2xs">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[12px] font-bold text-slate-900 leading-tight">Spring Essentials 2025</p>
            <p className="text-[9px] text-slate-500 mt-0.5">Curated minimalist wardrobe</p>
          </div>
          <span className="rounded-md bg-emerald-600 px-2 py-1 text-[8px] font-medium text-white shadow-2xs">
            Shop Drop
          </span>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2" aria-hidden="true">
        {[
          { name: 'Wool Coat', price: '$180', color: '#e8e5dc' },
          { name: 'Overshirt', price: '$95', color: '#dbe2e6' },
          { name: 'Twill Pant', price: '$85', color: '#ded7ce' },
          { name: 'Knit Beanie', price: '$40', color: '#d5dad2' },
        ].map((item) => (
          <div key={item.name} className="flex flex-col">
            <div className="aspect-[3/4] rounded-md border border-slate-200/60 shadow-2xs" style={{ backgroundColor: item.color }} />
            <p className="mt-1 text-[8px] font-medium text-slate-800 truncate">{item.name}</p>
            <p className="text-[7px] font-bold text-slate-500">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/** White, professional modern SaaS Dashboard template */
function DashboardPreview() {
  return (
    <div className="grid grid-cols-[54px_1fr] bg-white text-slate-800">
      {/* Sleek light sidebar */}
      <div className="flex flex-col items-center border-r border-slate-200/80 bg-slate-50/90 py-3 px-2 gap-2.5" aria-hidden="true">
        <div className="flex size-6 items-center justify-center rounded-md bg-emerald-600 text-[10px] font-bold text-white shadow-xs">
          O
        </div>
        <div className="w-full space-y-1.5 mt-1">
          <div className="flex h-5 w-full items-center justify-center rounded-md bg-emerald-100/90 text-emerald-700">
            <span className="size-2 rounded-xs bg-emerald-600" />
          </div>
          <div className="flex h-5 w-full items-center justify-center rounded-md text-slate-400">
            <span className="size-2 rounded-xs bg-slate-300" />
          </div>
          <div className="flex h-5 w-full items-center justify-center rounded-md text-slate-400">
            <span className="size-2 rounded-xs bg-slate-300" />
          </div>
        </div>
        <div className="mt-auto size-5 rounded-full bg-slate-200 border border-slate-300" />
      </div>

      {/* Main white dashboard view */}
      <div className="p-3.5 sm:p-4 bg-white">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-slate-900">Live Orders & Revenue</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-1.5 py-0.2 text-[8px] font-semibold text-emerald-700 border border-emerald-200/70">
                <span className="size-1 rounded-full bg-emerald-500 animate-pulse" /> Live
              </span>
            </div>
            <p className="text-[9px] text-slate-500">Real-time performance metrics</p>
          </div>
          <button
            type="button"
            className="rounded-md bg-emerald-600 px-2 py-1 text-[9px] font-semibold text-white shadow-2xs hover:bg-emerald-700"
          >
            + New Order
          </button>
        </div>

        {/* 3 Metric Cards */}
        <div className="mt-2.5 grid grid-cols-3 gap-2" aria-hidden="true">
          <div className="rounded-md border border-slate-200/80 bg-slate-50/70 p-2 shadow-2xs">
            <p className="text-[8px] font-medium text-slate-500">Revenue</p>
            <p className="mt-0.5 text-[11px] font-bold text-slate-900">$48,290</p>
            <span className="mt-0.5 inline-block text-[7px] font-semibold text-emerald-600">+14.2%</span>
          </div>
          <div className="rounded-md border border-slate-200/80 bg-slate-50/70 p-2 shadow-2xs">
            <p className="text-[8px] font-medium text-slate-500">Orders</p>
            <p className="mt-0.5 text-[11px] font-bold text-slate-900">1,429</p>
            <span className="mt-0.5 inline-block text-[7px] font-semibold text-emerald-600">+8.4%</span>
          </div>
          <div className="rounded-md border border-slate-200/80 bg-slate-50/70 p-2 shadow-2xs">
            <p className="text-[8px] font-medium text-slate-500">Fulfillment</p>
            <p className="mt-0.5 text-[11px] font-bold text-slate-900">99.4%</p>
            <span className="mt-0.5 inline-block text-[7px] font-semibold text-emerald-600">+0.8%</span>
          </div>
        </div>

        {/* Visual Chart Area */}
        <div className="mt-2.5 rounded-md border border-slate-200/80 bg-slate-50/50 p-2" aria-hidden="true">
          <div className="flex items-center justify-between text-[8px] text-slate-500 mb-1.5 font-medium">
            <span>Sales Volume (7 Days)</span>
            <span className="font-bold text-emerald-600">Peak $8,420</span>
          </div>
          <div className="flex h-11 items-end gap-1.5 pt-1">
            {[35, 55, 45, 75, 60, 95, 70, 85, 65, 90, 50, 80].map((h, i) => (
              <div
                key={i}
                className={cn(
                  'flex-1 rounded-t-xs transition-all',
                  i === 5 || i === 9 ? 'bg-emerald-600' : 'bg-emerald-200/80',
                )}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* Recent Activity Rows */}
        <div className="mt-2.5 space-y-1.5 rounded-md border border-slate-200/80 bg-white p-2" aria-hidden="true">
          {[
            { id: '#9842', name: 'Acme Corp', status: 'Paid', statusClass: 'bg-emerald-100 text-emerald-800', price: '$1,420' },
            { id: '#9841', name: 'Stripe Store', status: 'Processing', statusClass: 'bg-blue-100 text-blue-800', price: '$850' },
            { id: '#9840', name: 'Studio Nordic', status: 'Paid', statusClass: 'bg-emerald-100 text-emerald-800', price: '$320' },
          ].map((row) => (
            <div key={row.id} className="flex items-center justify-between text-[8px]">
              <div className="flex items-center gap-1.5">
                <span className="font-mono font-medium text-slate-500">{row.id}</span>
                <span className="font-semibold text-slate-800">{row.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={cn('rounded px-1.5 py-0.2 font-medium text-[7px]', row.statusClass)}>
                  {row.status}
                </span>
                <span className="font-bold text-slate-900">{row.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TasksPreview() {
  const columns = [
    { title: 'To do', cards: [{ title: 'Auth middleware refactor', p: 'High', c: 'bg-rose-100 text-rose-700' }, { title: 'SEO schema audit', p: 'Low', c: 'bg-slate-100 text-slate-600' }] },
    { title: 'In progress', cards: [{ title: 'Webhook stripe integration', p: 'Med', c: 'bg-amber-100 text-amber-800' }] },
    { title: 'Done', cards: [{ title: 'Deploy v2.4 staging cluster', p: 'High', c: 'bg-emerald-100 text-emerald-800' }] },
  ]
  return (
    <div className="bg-slate-50 p-3.5 text-slate-800 border-t border-slate-200/80">
      <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-xs bg-emerald-600" />
          <span className="text-[10px] font-bold text-slate-900">Sprint Board · Engineering</span>
        </div>
        <span className="rounded-md bg-emerald-600 px-2 py-0.5 text-[8px] font-semibold text-white shadow-2xs">
          + Task
        </span>
      </div>
      <div className="mt-2.5 grid grid-cols-3 gap-2" aria-hidden="true">
        {columns.map((col) => (
          <div key={col.title} className="rounded-md border border-slate-200/80 bg-white p-2 shadow-2xs">
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
              <p className="text-[8px] font-bold uppercase tracking-wider text-slate-500">{col.title}</p>
              <span className="text-[8px] font-semibold text-slate-400">{col.cards.length}</span>
            </div>
            <div className="mt-2 space-y-1.5">
              {col.cards.map((card, i) => (
                <div key={i} className="rounded border border-slate-200/60 bg-slate-50/70 p-1.5">
                  <p className="text-[8px] font-medium text-slate-800 leading-snug">{card.title}</p>
                  <div className="mt-1 flex items-center justify-between">
                    <span className={cn('rounded px-1 text-[6px] font-bold', card.c)}>{card.p}</span>
                    <span className="size-3 rounded-full bg-slate-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const previews: Record<PreviewVariant, { url: string; render: () => ReactNode }> = {
  salon: { url: 'hairport-concept.demo', render: SalonPreview },
  store: { url: 'storefront-demo.demo', render: StorePreview },
  dashboard: { url: 'ops-dashboard.demo/orders', render: DashboardPreview },
  tasks: { url: 'taskflow.demo/board', render: TasksPreview },
}

export function ProjectPreview({ variant, className }: { variant: PreviewVariant; className?: string }) {
  const { url, render: Render } = previews[variant]
  return (
    <BrowserFrame url={url} className={className}>
      <Render />
    </BrowserFrame>
  )
}

/** Simplified phone-sized mockup used in case study "responsive" galleries. */
export function PhoneFrame({ variant }: { variant: PreviewVariant }) {
  const { render: Render } = previews[variant]
  return (
    <div className="mx-auto w-[180px] overflow-hidden rounded-[22px] border-4 border-slate-700 bg-card shadow-xl">
      <div className="mx-auto mt-1.5 h-1 w-10 rounded-full bg-slate-600" aria-hidden="true" />
      <div className="mt-1.5 origin-top-left scale-[0.62] [width:161%]">
        <Render />
      </div>
    </div>
  )
}
