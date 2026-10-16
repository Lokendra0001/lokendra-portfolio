import { HomeHero } from '@/components/home/hero'
import {
  FaqPreview,
  FeaturedProjects,
  IntroSection,
  ProcessPreview,
  ServicesOverview,
  TechStackSection,
  WhoIWorkWith,
} from '@/components/home/home-sections'
import { CtaSection } from '@/components/common/cta-section'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <IntroSection />
      <ServicesOverview />
      <FeaturedProjects />
      <TechStackSection />
      <ProcessPreview />
      <WhoIWorkWith />
      <FaqPreview />
      <CtaSection title="Let's build something together" primaryLabel="Start a Project" />
    </>
  )
}
