import type { PreviewVariant } from '@/data/projects'
import { cn } from '@/lib/utils'

export function ProjectCardVisual({ variant }: { variant: PreviewVariant }) {
  if (variant === 'dashboard') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-slate-950 p-3.5 flex flex-col justify-between select-none">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

        {/* Top telemetry bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-[#ff5f56]" />
            <span className="size-2 rounded-full bg-[#ffbd2e]" />
            <span className="size-2 rounded-full bg-[#27c93f]" />
            <span className="ml-2 font-mono text-[10px] text-slate-400">telemetry.api/v2</span>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-emerald-400 border border-emerald-500/20">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            99.98% Live
          </span>
        </div>

        {/* Center SVG dynamic wave chart */}
        <div className="relative z-10 my-auto py-2">
          <div className="flex items-end justify-between px-1 mb-1">
            <span className="font-mono text-[11px] font-bold text-white">$48,290 <span className="text-emerald-400 text-[9px]">+14.2%</span></span>
            <span className="font-mono text-[9px] text-slate-400">14ms latency</span>
          </div>
          <svg className="h-14 w-full overflow-visible" viewBox="0 0 240 60" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chart-emerald" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M0,45 Q30,55 60,35 T120,25 T180,15 T240,8 L240,60 L0,60 Z"
              fill="url(#chart-emerald)"
            />
            <path
              d="M0,45 Q30,55 60,35 T120,25 T180,15 T240,8"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="240" cy="8" r="3.5" fill="#10b981" className="animate-ping" />
            <circle cx="240" cy="8" r="3.5" fill="#ffffff" />
          </svg>
        </div>

        {/* Micro stats pill row */}
        <div className="relative z-10 grid grid-cols-3 gap-1.5 pt-1 border-t border-slate-800/60">
          <div className="rounded bg-slate-900/80 px-2 py-1 border border-slate-800 text-center">
            <span className="block text-[8px] text-slate-400">Orders</span>
            <span className="block font-mono text-[9px] font-bold text-white">1,429</span>
          </div>
          <div className="rounded bg-slate-900/80 px-2 py-1 border border-slate-800 text-center">
            <span className="block text-[8px] text-slate-400">Fulfill</span>
            <span className="block font-mono text-[9px] font-bold text-emerald-400">99.4%</span>
          </div>
          <div className="rounded bg-slate-900/80 px-2 py-1 border border-slate-800 text-center">
            <span className="block text-[8px] text-slate-400">Users</span>
            <span className="block font-mono text-[9px] font-bold text-white">3.2k</span>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'store') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-stone-100 dark:bg-stone-900 p-3.5 flex flex-col justify-between select-none">
        {/* Top browser bar */}
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-[#ff5f56]" />
            <span className="size-2 rounded-full bg-[#ffbd2e]" />
            <span className="size-2 rounded-full bg-[#27c93f]" />
            <span className="ml-2 font-mono text-[10px] text-stone-600 dark:text-stone-400">north/goods.store</span>
          </div>
          <span className="rounded-full bg-stone-900 dark:bg-stone-100 px-2 py-0.5 text-[8px] font-bold text-white dark:text-stone-900">
            Cart (2)
          </span>
        </div>

        {/* Center product showcase card */}
        <div className="my-auto flex items-center justify-between gap-3 rounded-xl bg-white dark:bg-stone-950 p-2.5 border border-stone-200/80 dark:border-stone-800 shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="size-12 rounded-lg bg-gradient-to-br from-stone-300 via-stone-200 to-stone-400 dark:from-stone-700 dark:to-stone-900 flex items-center justify-center font-bold text-[10px] text-stone-700 dark:text-stone-300 shadow-2xs">
              M-01
            </div>
            <div>
              <p className="text-[11px] font-bold text-stone-900 dark:text-stone-100">Nordic Overshirt</p>
              <p className="text-[9px] text-stone-500">Pure Organic Wool</p>
            </div>
          </div>
          <div className="text-right">
            <span className="block font-mono text-[11px] font-bold text-emerald-600 dark:text-emerald-400">$180</span>
            <span className="inline-block rounded bg-stone-100 dark:bg-stone-800 px-1.5 py-0.2 text-[8px] font-semibold text-stone-600 dark:text-stone-300">
              In Stock
            </span>
          </div>
        </div>

        {/* Swatches & instant checkout badge */}
        <div className="flex items-center justify-between pt-1 border-t border-stone-200/60 dark:border-stone-800">
          <div className="flex items-center gap-1.5">
            <span className="size-3 rounded-full bg-[#2b2f38] border border-white dark:border-stone-900 shadow-xs" />
            <span className="size-3 rounded-full bg-[#e8e4dc] border border-white dark:border-stone-900 shadow-xs" />
            <span className="size-3 rounded-full bg-[#8c948e] border border-white dark:border-stone-900 shadow-xs" />
          </div>
          <span className="text-[9px] font-semibold text-stone-600 dark:text-stone-400">
            1-Click Shopify Checkout ⚡
          </span>
        </div>
      </div>
    )
  }

  if (variant === 'salon') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#1c1917] via-[#141210] to-[#0c0a09] p-3.5 flex flex-col justify-between text-[#f3ede2] select-none">
        {/* Top branding bar */}
        <div className="flex items-center justify-between border-b border-[#f3ede2]/15 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-[#ff5f56]" />
            <span className="size-2 rounded-full bg-[#ffbd2e]" />
            <span className="size-2 rounded-full bg-[#27c93f]" />
            <span className="ml-2 font-mono text-[10px] text-[#f3ede2]/60">hairport.concept</span>
          </div>
          <span className="rounded bg-[#d4af6a]/20 border border-[#d4af6a]/40 px-1.5 py-0.5 text-[8px] font-bold text-[#d4af6a]">
            EST. 2024
          </span>
        </div>

        {/* Center luxury typography banner */}
        <div className="my-auto text-center py-1">
          <p className="font-serif text-[13px] tracking-[0.25em] text-[#d4af6a] font-bold uppercase">HAIRPORT</p>
          <p className="font-serif text-[11px] text-[#f3ede2]/90 mt-0.5 italic">Precision cuts & gentleman grooming</p>
          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="rounded-full bg-[#d4af6a] px-2.5 py-0.5 text-[8px] font-bold text-[#141210] shadow-xs">
              WhatsApp Booking
            </span>
            <span className="rounded-full border border-[#f3ede2]/30 px-2 py-0.5 text-[8px] text-[#f3ede2]/80">
              Menu & Rates
            </span>
          </div>
        </div>

        {/* Micro service badges */}
        <div className="grid grid-cols-3 gap-1 pt-1 border-t border-[#f3ede2]/10 text-center">
          <span className="text-[8px] text-[#f3ede2]/70 font-mono">Fade $45</span>
          <span className="text-[8px] text-[#f3ede2]/70 font-mono">Beard $30</span>
          <span className="text-[8px] text-[#f3ede2]/70 font-mono">Styling $40</span>
        </div>
      </div>
    )
  }

  // Tasks variant (Linear-inspired sprint board)
  return (
    <div className="relative h-full w-full overflow-hidden bg-slate-900 p-3.5 flex flex-col justify-between text-slate-100 select-none">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-[#ff5f56]" />
          <span className="size-2 rounded-full bg-[#ffbd2e]" />
          <span className="size-2 rounded-full bg-[#27c93f]" />
          <span className="ml-2 font-mono text-[10px] text-slate-400">taskflow.io/sprint-24</span>
        </div>
        <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.2 text-[8px] font-bold text-emerald-400">
          82% Completed
        </span>
      </div>

      {/* Kanban columns mini view */}
      <div className="my-auto grid grid-cols-3 gap-1.5">
        <div className="rounded-md border border-slate-800 bg-slate-950/70 p-1.5">
          <span className="block text-[7px] font-bold uppercase text-slate-400">To Do</span>
          <div className="mt-1 rounded bg-slate-800/80 p-1">
            <p className="text-[8px] font-medium text-slate-200 leading-tight">API Auth</p>
            <span className="mt-0.5 inline-block rounded bg-rose-500/20 text-rose-400 text-[6px] font-bold px-1">P0</span>
          </div>
        </div>
        <div className="rounded-md border border-slate-800 bg-slate-950/70 p-1.5">
          <span className="block text-[7px] font-bold uppercase text-amber-400">In Progress</span>
          <div className="mt-1 rounded bg-slate-800/80 p-1">
            <p className="text-[8px] font-medium text-slate-200 leading-tight">Webhooks</p>
            <span className="mt-0.5 inline-block rounded bg-amber-500/20 text-amber-400 text-[6px] font-bold px-1">P1</span>
          </div>
        </div>
        <div className="rounded-md border border-slate-800 bg-slate-950/70 p-1.5">
          <span className="block text-[7px] font-bold uppercase text-emerald-400">Done</span>
          <div className="mt-1 rounded bg-slate-800/80 p-1">
            <p className="text-[8px] font-medium text-slate-200 leading-tight">Deploy v2</p>
            <span className="mt-0.5 inline-block rounded bg-emerald-500/20 text-emerald-400 text-[6px] font-bold px-1">Done</span>
          </div>
        </div>
      </div>

      {/* Bottom sprint meta */}
      <div className="flex items-center justify-between pt-1 border-t border-slate-800 text-[8px] text-slate-400">
        <span>Sprint Velocity: 48 pts</span>
        <div className="flex -space-x-1.5">
          <span className="size-3.5 rounded-full bg-emerald-500 border border-slate-900" />
          <span className="size-3.5 rounded-full bg-blue-500 border border-slate-900" />
          <span className="size-3.5 rounded-full bg-purple-500 border border-slate-900" />
        </div>
      </div>
    </div>
  )
}
