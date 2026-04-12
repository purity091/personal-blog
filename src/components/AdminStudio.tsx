import { StrictMode } from 'react'
import { SanityStudio } from 'sanity'
import config from '../../sanity/config'

export default function AdminStudio() {
  return (
    <StrictMode>
      <SanityStudio config={config} />
    </StrictMode>
  )
}
