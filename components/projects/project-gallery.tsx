'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { projectCategories, projects, type ProjectCategory } from '@/data/projects'
import { ProjectCard } from './project-card'
import { cn } from '@/lib/utils'

type Filter = ProjectCategory | 'all'

function isCategory(value: string | null): value is ProjectCategory {
  return projectCategories.some((c) => c.id === value)
}

export function ProjectGallery() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const param = searchParams.get('category')
  const active: Filter = isCategory(param) ? param : 'all'
  const [query, setQuery] = useState('')

  const setFilter = (filter: Filter) => {
    const params = new URLSearchParams(searchParams.toString())
    if (filter === 'all') params.delete('category')
    else params.set('category', filter)
    const qs = params.toString()
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false })
  }

  const counts = useMemo(() => {
    const map = new Map<Filter, number>([['all', projects.length]])
    for (const c of projectCategories) map.set(c.id, projects.filter((p) => p.categories.includes(c.id)).length)
    return map
  }, [])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((p) => {
      if (active !== 'all' && !p.categories.includes(active)) return false
      if (!q) return true
      return [p.title, p.summary, p.type, p.status, ...p.stack].join(' ').toLowerCase().includes(q)
    })
  }, [active, query])

  const filters: { id: Filter; label: string }[] = [{ id: 'all', label: 'All Projects' }, ...projectCategories]

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter projects by category" className="-mx-1 flex flex-wrap gap-2 px-1">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={active === f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors',
                active === f.id
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-muted-foreground hover:border-border-strong hover:text-foreground',
              )}
            >
              {f.label}
              <span
                className={cn(
                  'font-mono text-[11px]',
                  active === f.id ? 'text-primary-foreground/80' : 'text-muted-foreground/70',
                )}
              >
                {counts.get(f.id)}
              </span>
            </button>
          ))}
        </div>
        <div className="relative w-full lg:w-72">
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            id="project-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or technology"
            className="h-10 w-full rounded-lg border border-input bg-card pl-9 pr-9 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-2 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
        Showing {results.length} of {projects.length} projects
      </p>

      {results.length > 0 ? (
        <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} headingLevel="h3" />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-4 rounded-xl border border-dashed border-border-strong bg-card/50 px-6 py-16 text-center">
          <p className="font-display text-lg font-semibold text-foreground">No projects match these filters</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Try a different category or search term. New projects are added as they are completed.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery('')
              setFilter('all')
            }}
            className="mt-6 inline-flex h-9 items-center rounded-lg border border-border-strong bg-card px-4 text-sm text-foreground hover:bg-secondary transition-colors"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  )
}
