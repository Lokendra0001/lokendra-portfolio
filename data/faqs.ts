export type Faq = { question: string; answer: string }

export const generalFaqs: Faq[] = [
  {
    question: 'What types of websites do you build?',
    answer:
      'Business and local-business websites, Shopify storefronts, and custom web applications such as admin dashboards, booking or inquiry systems, and internal tools.',
  },
  {
    question: 'Do you work with MERN and Shopify?',
    answer:
      'Yes. I build custom applications with MongoDB, Express.js, React, and Node.js (plus Next.js and PostgreSQL where they fit), and I set up and customise Shopify stores and themes.',
  },
  {
    question: 'Can you build a website for a small local business?',
    answer:
      'Yes. Salons, restaurants, retail shops, consultants, and service providers are a good fit. A typical site covers services, photos, location, opening details, and easy ways to get in touch.',
  },
  {
    question: 'Do you provide domain and hosting setup assistance?',
    answer:
      'Yes. I can help you choose, register, and connect a domain and hosting provider. The accounts are registered in your name so you keep full ownership.',
  },
  {
    question: 'Are domain and hosting charges included in development fees?',
    answer:
      'No. Development fees cover my work. Domain registration, hosting, Shopify subscriptions, paid themes, paid apps, and payment gateway fees are paid directly to those providers and usually recur.',
  },
  {
    question: 'How much does a website cost?',
    answer:
      "It depends on the number of pages, features, integrations, and content readiness. After a short discussion about your requirements, I'll send a written estimate with what is and is not included.",
  },
  {
    question: 'How long does a project take?',
    answer:
      'Timelines depend on scope and how quickly content and feedback are available. A timeline is agreed after the scope is defined — I avoid promising fixed delivery dates before that.',
  },
  {
    question: 'Can I request changes after launch?',
    answer:
      'Yes. Small fixes related to the agreed scope are handled after launch. New features or changes outside the original scope can be estimated separately or covered by a maintenance arrangement.',
  },
  {
    question: 'Will the website work on mobile?',
    answer: 'Yes. Every site is built mobile-first and tested on phone, tablet, laptop, and desktop screen sizes.',
  },
  {
    question: 'Can I update website content myself?',
    answer:
      'That can be arranged. Shopify stores are editable from the Shopify admin, and business websites can include a simple content management option if you need regular updates.',
  },
  {
    question: 'Can you integrate WhatsApp and Google Maps?',
    answer:
      'Yes. WhatsApp click-to-chat buttons and embedded Google Maps directions are common additions for local business websites.',
  },
  {
    question: 'Can you build a custom admin dashboard?',
    answer:
      'Yes. Admin dashboards with data tables, search, filters, forms, user roles, and API integrations are a core part of my MERN development work.',
  },
  {
    question: 'Do you provide maintenance?',
    answer:
      'Optional maintenance is available for updates, fixes, dependency upgrades, and small improvements. The scope of maintenance is agreed in advance.',
  },
  {
    question: 'How do we start a project?',
    answer:
      'Send a short inquiry through the contact page describing what you need. We will discuss your goals and requirements, then I will prepare a scope and estimate for your approval.',
  },
]

export const faqPreview = generalFaqs.filter((_, i) => [0, 4, 5, 13].includes(i))
