/** Career history shown on the About page. Keep in sync with public/resume.pdf. */

export type TimelineEntry = {
  title: string
  organisation: string
  period: string
  detail: string
  current?: boolean
}

export const experience: TimelineEntry[] = [
  {
    title: 'Full Stack Developer',
    organisation: 'Tech Samrajya, Surat',
    period: 'Mar 2026 – Present',
    detail:
      'Building client web apps, business websites and Shopify stores end to end, plus AI automation features and Docker-based CI/CD deployments.',
    current: true,
  },
  {
    title: 'Full Stack Developer Intern',
    organisation: 'Tech Samrajya, Surat',
    period: 'Sep 2025 – Mar 2026',
    detail:
      'Built responsive frontends and REST APIs across the MERN stack and customised Shopify themes; moved to a full-time role after the internship.',
  },
]

export const education: TimelineEntry[] = [
  {
    title: 'MCA · Information Technology',
    organisation: 'Parul Institute of Engineering & Technology, Vadodara',
    period: '2026 – 2028',
    detail: 'Master of Computer Applications, currently pursuing.',
    current: true,
  },
  {
    title: 'BCA · Information Technology',
    organisation: 'Veer Narmad South Gujarat University (VNSGU), Surat',
    period: '2022 – 2026',
    detail: 'Bachelor of Computer Applications with a CGPA of 8.85.',
  },
]

export const achievements: string[] = [
  'Rank 1 in BCA — 2nd year academic results',
  'Rank 2 in BCA — 3rd year academic results',
]
