import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID || 'YOUR_PROJECT_ID',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})
