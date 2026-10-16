import type { Metadata } from 'next'
import { siteConfig } from './site-config'

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: path,
      siteName: siteConfig.name,
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: `${title} | ${siteConfig.name}`, description },
  }
}
