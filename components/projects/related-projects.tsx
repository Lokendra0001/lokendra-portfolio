import type { Project } from '@/data/projects'
import { SectionHeading } from '@/components/common/section-heading'
import { ProjectCard } from './project-card'

export function RelatedProjects({
  projects,
  title = 'Related projects',
  eyebrow = 'More work',
}: {
  projects: Project[]
  title?: string
  eyebrow?: string
}) {
  if (projects.length === 0) return null
  return (
    <section aria-labelledby="related-heading" className="container-page py-16 md:py-20">
      <SectionHeading id="related-heading" eyebrow={eyebrow} title={title} />
      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  )
}
