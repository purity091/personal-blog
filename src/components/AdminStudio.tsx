import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {SanityStudio} from 'sanity'
import config from './sanity/config'

const root = createRoot(document.getElementById('root')!)
root.render(
  <StrictMode>
    <SanityStudio config={config} />
  </StrictMode>
)
