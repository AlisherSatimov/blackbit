import { MetadataRoute } from 'next'

const BASE = 'https://blackbit.dev'
const LAST_MODIFIED = new Date('2025-03-26')

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                  lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/#about`,      lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/#experience`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/#skills`,     lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/#projects`,   lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/#contact`,    lastModified: LAST_MODIFIED, changeFrequency: 'yearly',  priority: 0.6 },
  ]
}
