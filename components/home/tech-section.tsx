'use client'

import { useState } from 'react'
import {
  Code2,
  Server,
  Database,
  ShoppingBag,
  Cloud,
  Terminal,
  GitBranch,
  Layers,
  Cpu,
  Workflow,
  Sparkles,
} from 'lucide-react'
import { SectionHeading } from '@/components/common/section-heading'
import { Reveal } from '@/components/common/reveal'
import { cn } from '@/lib/utils'

type TechItem = {
  name: string
  category: 'frontend' | 'backend' | 'database' | 'tools'
  categoryLabel: string
  role: string
  icon: typeof Code2
  accent: {
    bg: string
    text: string
    border: string
  }
}

const technologies: TechItem[] = [
  {
    name: 'Next.js',
    category: 'frontend',
    categoryLabel: 'Frontend',
    role: 'Full-Stack Framework',
    icon: Layers,
    accent: {
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-600 dark:text-emerald-400',
      border: 'border-emerald-500/20',
    },
  },
  {
    name: 'React 19',
    category: 'frontend',
    categoryLabel: 'Frontend',
    role: 'Interactive UI',
    icon: Code2,
    accent: {
      bg: 'bg-cyan-500/10',
      text: 'text-cyan-600 dark:text-cyan-400',
      border: 'border-cyan-500/20',
    },
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    categoryLabel: 'Frontend',
    role: 'End-to-End Type Safety',
    icon: Terminal,
    accent: {
      bg: 'bg-blue-500/10',
      text: 'text-blue-600 dark:text-blue-400',
      border: 'border-blue-500/20',
    },
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    categoryLabel: 'Frontend',
    role: 'Design Systems & UI',
    icon: Sparkles,
    accent: {
      bg: 'bg-sky-500/10',
      text: 'text-sky-600 dark:text-sky-400',
      border: 'border-sky-500/20',
    },
  },
  {
    name: 'Node.js',
    category: 'backend',
    categoryLabel: 'Backend',
    role: 'Server Runtime',
    icon: Server,
    accent: {
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-600 dark:text-emerald-400',
      border: 'border-emerald-500/20',
    },
  },
  {
    name: 'Express.js',
    category: 'backend',
    categoryLabel: 'Backend',
    role: 'RESTful API Services',
    icon: Workflow,
    accent: {
      bg: 'bg-slate-500/10',
      text: 'text-slate-600 dark:text-slate-400',
      border: 'border-slate-500/20',
    },
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    categoryLabel: 'Database',
    role: 'Relational SQL Data',
    icon: Database,
    accent: {
      bg: 'bg-indigo-500/10',
      text: 'text-indigo-600 dark:text-indigo-400',
      border: 'border-indigo-500/20',
    },
  },
  {
    name: 'MongoDB',
    category: 'database',
    categoryLabel: 'Database',
    role: 'Document Store',
    icon: Database,
    accent: {
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-600 dark:text-emerald-400',
      border: 'border-emerald-500/20',
    },
  },
  {
    name: 'Shopify Liquid',
    category: 'tools',
    categoryLabel: 'E-Commerce',
    role: 'Custom Storefronts',
    icon: ShoppingBag,
    accent: {
      bg: 'bg-amber-500/10',
      text: 'text-amber-600 dark:text-amber-400',
      border: 'border-amber-500/20',
    },
  },
  {
    name: 'Docker',
    category: 'tools',
    categoryLabel: 'DevOps',
    role: 'Containerization',
    icon: Cloud,
    accent: {
      bg: 'bg-blue-500/10',
      text: 'text-blue-600 dark:text-blue-400',
      border: 'border-blue-500/20',
    },
  },
  {
    name: 'Git & GitHub',
    category: 'tools',
    categoryLabel: 'DevOps',
    role: 'Version Control & CI',
    icon: GitBranch,
    accent: {
      bg: 'bg-orange-500/10',
      text: 'text-orange-600 dark:text-orange-400',
      border: 'border-orange-500/20',
    },
  },
  {
    name: 'Webhooks & n8n',
    category: 'tools',
    categoryLabel: 'Automation',
    role: 'Workflow Integrations',
    icon: Cpu,
    accent: {
      bg: 'bg-purple-500/10',
      text: 'text-purple-600 dark:text-purple-400',
      border: 'border-purple-500/20',
    },
  },
]

const filterTabs = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Databases' },
  { id: 'tools', label: 'DevOps & Tools' },
] as const

export function TechStackSection() {
  const [activeTab, setActiveTab] = useState<string>('all')

  const filtered = activeTab === 'all'
    ? technologies
    : technologies.filter((t) => t.category === activeTab)

  return (
    <section
      aria-labelledby="stack-heading"
      className="relative border-y border-border bg-gradient-to-b from-surface/50 via-background to-surface/50 py-16 md:py-24 overflow-hidden"
    >
      <div className="container-page relative z-10">
        {/* Header & Filter Controls */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="stack-heading"
            eyebrow="Core Stack"
            title="Technologies & Tools"
            description="Modern, production-proven tools I work with daily to build fast, maintainable digital products."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-lg border border-border/80 bg-surface/80 self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'rounded-md px-3 py-1 text-xs font-medium transition-colors cursor-pointer',
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground font-semibold shadow-2xs'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60',
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Tech Grid (Minimal content, maximum design quality) */}
        <div className="mt-10 grid gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.name} delay={i * 30}>
                <div className="group relative flex items-center gap-3.5 rounded-xl border border-border/80 bg-card p-4 shadow-2xs transition-colors duration-200 hover:bg-surface">
                  {/* Subtle Top Hairline Highlight */}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  />

                  {/* Icon Badge */}
                  <span
                    className={cn(
                      'flex size-10 shrink-0 items-center justify-center rounded-lg border shadow-2xs transition-transform duration-200 group-hover:scale-105',
                      item.accent.bg,
                      item.accent.border,
                      item.accent.text,
                    )}
                    aria-hidden="true"
                  >
                    <Icon className="size-5" />
                  </span>

                  {/* Tech Details */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-sm text-foreground transition-colors group-hover:text-primary truncate">
                        {item.name}
                      </span>
                      <span className="shrink-0 font-mono text-[9px] uppercase tracking-wider text-muted-foreground/70 font-semibold px-1.5 py-0.5 rounded bg-secondary/80">
                        {item.categoryLabel}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground truncate">
                      {item.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
