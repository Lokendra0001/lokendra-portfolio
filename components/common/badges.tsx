import type { ProjectStatus } from "@/data/projects";
import { cn } from "@/lib/utils";

export function TechBadge({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-secondary/60 px-2 py-0.5 font-mono text-xs text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function StatusBadge({
  status,
  className,
}: {
  status: ProjectStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
      {status}
    </span>
  );
}
