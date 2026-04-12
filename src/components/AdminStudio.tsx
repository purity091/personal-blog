import { StrictMode } from 'react'
import { Studio } from 'sanity'
import config from '../../sanity/config'

export default function AdminStudio() {
  return (
    <StrictMode>
      <Studio config={config} />
    </StrictMode>
  )
}

