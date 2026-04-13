import { StrictMode } from 'react'
import { Studio } from 'sanity'
import config from '../../sanity.config'
import { createGlobalStyle } from 'styled-components'

const RTLStyle = createGlobalStyle`
  /* Target the whole studio layout */
  [data-testid="studio-layout"],
  [data-testid="document-panel"],
  [data-testid="document-pane"],
  .sanity-markdown-editor,
  [role="dialog"] {
    direction: rtl !important;
    text-align: right !important;
  }

  /* Reset for LTR specific fields if needed, like code or slugs */
  [data-testid="string-input"], 
  [data-testid="text-input"],
  .sanity-markdown-editor textarea {
    direction: rtl !important;
  }

  /* Make sure labels and descriptions are also RTL */
  [data-testid="field"] label,
  [data-testid="field"] p {
    text-align: right !important;
  }
`

export default function AdminStudio() {
  return (
    <StrictMode>
      <RTLStyle />
      <Studio config={config} />
    </StrictMode>
  )
}

