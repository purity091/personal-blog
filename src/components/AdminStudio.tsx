import { StrictMode } from 'react'
import { Studio } from 'sanity'
import config from '../../sanity.config'
import { createGlobalStyle } from 'styled-components'

const RTLStyle = createGlobalStyle`
  /* Root Studio Layout */
  [data-testid="studio-layout"] {
    direction: rtl !important;
  }

  /* Document Editing Pane */
  [data-testid="document-panel"],
  [data-testid="document-pane"],
  [data-testid="field"] {
    direction: rtl !important;
    text-align: right !important;
  }

  /* Specific fix for Markdown Editor (EasyMDE/CodeMirror) */
  /* This targets the actual writing area where the cursor lives */
  .sanity-markdown-editor,
  .sanity-markdown-editor textarea,
  .CodeMirror,
  .CodeMirror-code,
  .CodeMirror-lines,
  .editor-preview-rtl,
  .editor-toolbar {
    direction: rtl !important;
    text-align: right !important;
  }

  /* Force the cursor logic to follow RTL */
  .CodeMirror textarea {
    unicode-bidi: bidi-override !important;
    direction: rtl !important;
  }

  /* Ensure labels and descriptions stay right-aligned */
  [data-testid="field"] label,
  [data-testid="field"] p,
  [data-testid="string-input"],
  [data-testid="text-input"] {
    text-align: right !important;
    direction: rtl !important;
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

