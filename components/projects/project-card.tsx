import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { isConfigured, siteConfig } from "@/lib/site-config";
import { LinkedinIcon } from "@/components/common/brand-icons";
import { ProjectCardVisual } from "./project-card-visual";

function hostnameOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function ProjectCard({
  project,
  headingLevel = "h3",
}: {
  project: Project;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  const isPackage =
    project.type.toLowerCase().includes("package") ||
    project.status.toLowerCase().includes("package");
  const linkedinUrl = project.linkedinUrl || siteConfig.social.linkedin;
  const primaryUrl = project.liveUrl || linkedinUrl;
  // Titles are written as "Name — Tagline"; show them as two lines.
  const [name, tagline] = project.title.split(/\s+—\s+/);
  const visibleStack = project.stack.slice(0, 3);
  const hiddenStackCount = project.stack.length - visibleStack.length;

  return (
    <article className="group relative flex h-full flex-col rounded-xl border border-border bg-card p-1.5 shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_12px_32px_-12px_rgb(15_23_42/0.18)] dark:shadow-none dark:hover:shadow-[0_16px_40px_-16px_rgb(0_0_0/0.7)]">
      {/* Framed preview with browser chrome */}
      <a
        href={primaryUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-lg border border-border bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
        aria-label={`Open ${name} (${isPackage ? "NPM package" : project.liveUrl ? "live site" : "LinkedIn"}, opens in a new tab)`}
      >
        <div className="flex items-center gap-2 border-b border-border px-2.5 py-1.5">
          <span className="flex gap-1" aria-hidden="true">
            <span className="size-1.5 rounded-full bg-border-strong" />
            <span className="size-1.5 rounded-full bg-border-strong" />
            <span className="size-1.5 rounded-full bg-border-strong" />
          </span>
          <span className="mx-auto max-w-[70%] truncate rounded-md bg-card px-2 py-px font-mono text-[10px] text-muted-foreground">
            {hostnameOf(primaryUrl)}
          </span>
          <span className="w-[22px]" aria-hidden="true" />
        </div>
        <div className="relative aspect-[16/10] overflow-hidden">
          <ProjectCardVisual
            variant={project.preview}
            image={project.image}
            imageDark={project.imageDark}
            title={name}
          />
        </div>
      </a>

      {/* Content */}
      <div className="flex flex-1 flex-col px-2.5 pb-2.5 pt-3">
        <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          <span className="truncate">{project.type}</span>
          {project.status !== project.type && (
            <>
              <span
                className="size-1 shrink-0 rounded-full bg-border-strong"
                aria-hidden="true"
              />
              <span className="shrink-0 text-primary">{project.status}</span>
            </>
          )}
        </div>

        <Heading className="mt-1.5 font-display text-base font-semibold leading-snug tracking-tight text-foreground">
          {name}
          {tagline && (
            <span className="mt-0.5 block truncate text-xs font-normal tracking-normal text-muted-foreground">
              {tagline}
            </span>
          )}
        </Heading>

        <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <ul
          className="mt-3 flex flex-wrap gap-1"
          aria-label="Technologies used"
        >
          {visibleStack.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-secondary px-1.5 py-0.5 font-mono text-[10px] text-secondary-foreground/80"
            >
              {tech}
            </li>
          ))}
          {hiddenStackCount > 0 && (
            <li className="px-1 py-0.5 font-mono text-[10px] text-muted-foreground">
              +{hiddenStackCount}
            </li>
          )}
        </ul>

        <div className="mt-auto pt-3">
          <div className="flex items-center gap-2 border-t border-border pt-3">
            {isConfigured(project.liveUrl) ? (
              <>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs font-semibold text-background transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                >
                  {isPackage ? "View on npm" : "Live demo"}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
                {isConfigured(linkedinUrl) && (
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-[#0a66c2]/40 hover:bg-[#0a66c2]/10 hover:text-[#0a66c2] dark:hover:text-[#4a9be8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                  >
                    <LinkedinIcon className="size-3.5" />
                    LinkedIn
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
              </>
            ) : (
              isConfigured(linkedinUrl) && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-[#0a66c2] px-3.5 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                >
                  <LinkedinIcon className="size-3.5 fill-white text-white" />
                  View on LinkedIn
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
