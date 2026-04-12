import defineCliConfig from 'sanity/cli'
import type { CliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'YOUR_PROJECT_ID',
    dataset: 'production',
  },
} as CliConfig)
