import { StrictMode, useEffect } from 'react'
import { Studio } from 'sanity'
import config from '../../sanity.config'
import { createGlobalStyle } from 'styled-components'

const RTLStyle = createGlobalStyle`
  /* Root Studio Layout */
  [data-testid="studio-layout"],
  [data-testid="document-panel"],
  [data-testid="document-pane"],
  [data-testid="field"] {
    direction: rtl !important;
  }

  /* Force alignment */
  [data-testid="field"] label,
  [data-testid="field"] p,
  [data-testid="string-input"],
  [data-testid="text-input"],
  .sanity-markdown-editor,
  .CodeMirror {
    text-align: right !important;
    direction: rtl !important;
  }

  /* Specific CodeMirror fix for arrow keys */
  .CodeMirror textarea {
    direction: rtl !important;
    unicode-bidi: plaintext !important;
  }
`

export default function AdminStudio() {
  useEffect(() => {
    // Hacky but effective: Force dir="rtl" on all inputs and textareas
    // Sanity Studio v3 dynamic loading makes this necessary
    const interval = setInterval(() => {
      const inputs = document.querySelectorAll('input, textarea, .CodeMirror');
      inputs.forEach(el => {
        if (el.getAttribute('dir') !== 'rtl') {
          el.setAttribute('dir', 'rtl');
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StrictMode>
      <RTLStyle />
      <Studio config={config} />
    </StrictMode>
  )
}

