import { Suspense } from 'react'
import { PageHero } from '@/components/layout/page-hero'
import { ProjectGallery } from '@/components/projects/project-gallery'
import { CtaSection } from '@/components/common/cta-section'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Projects & Open Source',
  description:
    'Client websites, Shopify stores and web applications built by Lokendra Rajpurohit — from SaaS automation tools to college portals and e-commerce stores.',
  path: '/projects',
})

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Projects & Client Work."
        description="Client websites, Shopify stores and web applications — from SaaS automation tools to college portals and e-commerce stores."
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
