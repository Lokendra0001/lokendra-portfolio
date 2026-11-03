import type { ReactNode } from 'react'
import type { Project } from '@/data/projects'
import { cn } from '@/lib/utils'
import { ThemedImage } from './project-card-visual'

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
        {url && (
          <div className="ml-2 min-w-0 flex-1 flex items-center gap-1.5 truncate rounded-md bg-background/90 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground border border-border/60 shadow-2xs">
            <span className="size-1.5 rounded-full bg-emerald-500/80" />
            <span className="truncate">{url}</span>
          </div>
        )}
      </div>
      {children}
    </div>
  )
}

/** A project's real screenshot in a browser frame, showing its live address when it has one. */
export function ProjectScreenshot({ project, className }: { project: Project; className?: string }) {
  return (
    <BrowserFrame url={project.liveUrl.replace(/^https?:\/\//, '')} className={className}>
      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-surface">
        <ThemedImage
          image={project.image}
          imageDark={project.imageDark}
          alt={project.title}
          className="h-full w-full object-contain object-top"
        />
      </div>
    </BrowserFrame>
  )
}
