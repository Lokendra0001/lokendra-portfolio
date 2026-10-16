export type ProcessStage = {
  step: string
  title: string
  summary: string
  whatHappens: string
  clientProvides: string
  developerDelivers: string
  approval: string
}

export const processStages: ProcessStage[] = [
  {
    step: '01',
    title: 'Discovery and requirements',
    summary: 'Understand your goals, audience, and must-have features.',
    whatHappens: 'A conversation about your business, goals, audience, and the problem the project should solve.',
    clientProvides: 'Business background, goals, examples you like, and any existing materials or accounts.',
    developerDelivers: 'A summary of requirements and any questions that affect scope.',
    approval: 'Confirmation that the requirements summary is accurate.',
  },
  {
    step: '02',
    title: 'Scope and estimate',
    summary: 'Agree on what will be built, what is excluded, and the cost.',
    whatHappens: 'Requirements are turned into a defined list of pages, features, and integrations.',
    clientProvides: 'Priorities and decisions on optional features.',
    developerDelivers:
      'A written scope, estimate, and proposed timeline, listing third-party costs such as domains, hosting, or Shopify plans separately.',
    approval: 'Written approval of the scope and estimate before work begins.',
  },
  {
    step: '03',
    title: 'Structure and design',
    summary: 'Plan page structure and visual direction before coding.',
    whatHappens: 'Page structure, content layout, and visual direction are planned.',
    clientProvides: 'Brand assets, approved photos, and written content where available.',
    developerDelivers: 'A sitemap and layout or design direction for review.',
    approval: 'Sign-off on structure and visual direction.',
  },
  {
    step: '04',
    title: 'Development',
    summary: 'Build the agreed features with regular progress updates.',
    whatHappens: 'The website or application is built according to the approved scope.',
    clientProvides: 'Timely answers to questions and any remaining content.',
    developerDelivers: 'Progress updates and a preview link to review work in progress.',
    approval: 'Feedback on preview builds.',
  },
  {
    step: '05',
    title: 'Testing and revisions',
    summary: 'Test across devices and refine based on feedback.',
    whatHappens: 'Testing on mobile, tablet, and desktop, plus revisions within the agreed scope.',
    clientProvides: 'Consolidated feedback on the review build.',
    developerDelivers: 'Fixes and revisions, with a note of any requests outside the original scope.',
    approval: 'Approval that the project is ready to launch.',
  },
  {
    step: '06',
    title: 'Deployment and handover',
    summary: 'Launch the project and hand over access and documentation.',
    whatHappens: 'The project is deployed to your domain and hosting or Shopify store.',
    clientProvides: 'Access to domain, hosting, or store accounts registered in your name.',
    developerDelivers: 'The live project, account access, and short handover notes.',
    approval: 'Final confirmation of launch.',
  },
  {
    step: '07',
    title: 'Optional maintenance',
    summary: 'Ongoing updates and improvements if you need them.',
    whatHappens: 'Ongoing updates, fixes, and small improvements under a separately agreed arrangement.',
    clientProvides: 'Change requests and priorities.',
    developerDelivers: 'Updates according to the agreed maintenance scope.',
    approval: 'Approval of any work outside the maintenance scope.',
  },
]
