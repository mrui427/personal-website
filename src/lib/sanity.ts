import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '20x9kd8i',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-09-13',
})