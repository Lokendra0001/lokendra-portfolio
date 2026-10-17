import { Suspense } from 'react'
import { PageHero } from '@/components/layout/page-hero'
import { ProjectGallery } from '@/components/projects/project-gallery'
import { CtaSection } from '@/components/common/cta-section'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Projects & Open Source',
  description:
    'Explore full-stack MERN web applications, real-time messaging platforms, and published open-source NPM packages built by Lokendra Rajpurohit.',
  path: '/projects',
})

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Projects & Open Source Work."
        description="Explore full-stack MERN web applications, real-time communication platforms, tour exploration systems, and published NPM packages."
        breadcrumbs={[{ label: 'Projects' }]}
      />

      <section className="container-page py-16 md:py-24" aria-label="Project portfolio">
        <Suspense fallback={<div className="py-20 text-center text-muted-foreground">Loading projects...</div>}>
          <ProjectGallery />
        </Suspense>
      </section>

      <CtaSection
        title="Interested in building a project like one of these?"
        description="Share your requirements and goals. I will review the details and get back to you with an honest evaluation, architecture plan, and estimate."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />
    </>
  )
}
