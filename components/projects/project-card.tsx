import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import type { Project } from '@/data/projects'
import { isConfigured } from '@/lib/site-config'
import { StatusBadge } from '@/components/common/badges'
import { GithubIcon } from '@/components/common/brand-icons'
import { ProjectCardVisual } from './project-card-visual'

export function ProjectCard({ project, headingLevel = 'h3' }: { project: Project; headingLevel?: 'h2' | 'h3' }) {
  const Heading = headingLevel
  const href = `/projects/${project.slug}`

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xs transition-colors duration-300 hover:bg-surface/60">
      {/* Top Hairline Active Indicator (Activates on hover without shifting layout) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        aria-hidden="true"
      />

      {/* Top Header & Metadata */}
      <div className="p-5 sm:p-6 pb-4">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-primary">
            {project.type}
          </span>
          <StatusBadge status={project.status} className="text-[10px] py-0.5 px-2" />
        </div>

        {/* Project Title with smooth directional arrow hover */}
        <Heading className="mt-3 text-lg sm:text-xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
          <Link
            href={href}
            className="flex items-center justify-between gap-2 focus-visible:outline-none"
          >
            <span>{project.title}</span>
            <ArrowRight
              className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1 text-primary opacity-80 group-hover:opacity-100"
              aria-hidden="true"
            />
          </Link>
        </Heading>

        {/* Summary */}
        <p className="mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {project.summary}
        </p>
      </div>

      {/* Inset Visual Showcase Canvas (Subtle rounded frame) */}
      <div className="mx-5 sm:mx-6 h-48 sm:h-52 overflow-hidden rounded-lg border border-border/70 bg-surface relative">
        <div className="size-full transition-transform duration-500 ease-out group-hover:scale-[1.015]">
          <ProjectCardVisual variant={project.preview} />
        </div>
      </div>

      {/* Bottom Area: Tech Stack & Actions */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 pt-4 mt-auto">
        {/* Technologies Pills */}
        <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.stack.slice(0, 4).map((tech) => (
            <li key={tech}>
              <span className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                {tech}
              </span>
            </li>
          ))}
          {project.stack.length > 4 && (
            <li className="self-center font-mono text-[10px] text-muted-foreground/70">
              +{project.stack.length - 4}
            </li>
          )}
        </ul>

        {/* Action Row */}
        <div className="mt-4 pt-3.5 border-t border-border/50 flex items-center justify-between">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-all hover:gap-2 hover:underline"
          >
            <span>Case Study</span>
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>

          <div className="flex items-center gap-2">
            {isConfigured(project.liveUrl) && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md border border-border/70 bg-secondary/50 px-2 py-0.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors shadow-2xs"
              >
                <span>Live Demo</span>
                <ExternalLink className="size-3" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
            {isConfigured(project.repoUrl) && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md border border-border/70 bg-secondary/50 px-2 py-0.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors shadow-2xs"
              >
                <GithubIcon className="size-3" />
                <span>Source</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
