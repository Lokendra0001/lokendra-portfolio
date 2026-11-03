/**
 * Client testimonials shown on the home page. Only add real, approved quotes.
 * The section stays hidden while this list is empty.
 */
export type Testimonial = {
  quote: string
  name: string
  /** Role and company, e.g. "Director, Bhandari TechFab LLP" */
  role: string
  /** Optional slug from data/projects.ts to link the quote to its project */
  projectSlug?: string
}

export const testimonials: Testimonial[] = []
