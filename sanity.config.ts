import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'

// Use import.meta.env for Astro/Vite compatibility
const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'uih0wtzn'
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'default',
  title: 'Lahlah AI CMS',
  basePath: '/admin',

  projectId,
  dataset,

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})



