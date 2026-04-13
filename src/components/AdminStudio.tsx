import { StrictMode, useEffect } from 'react'
import { Studio } from 'sanity'
import { ThemeProvider, studioTheme } from '@sanity/ui'
import config from '../../sanity.config'
import { createGlobalStyle } from 'styled-components'

const RTLStyle = createGlobalStyle`
  /* Global RTL Fixes */
  body {
    direction: rtl;
  }

  /* Specific fix for the Markdown Editor's visual layer */
  .sanity-markdown-editor,
  .CodeMirror,
  .CodeMirror-lines,
  .CodeMirror-code,
  .CodeMirror-scroll {
    direction: rtl !important;
    text-align: right !important;
  }

  /* Fix for the hidden textarea that handles input */
  .CodeMirror textarea {
    direction: rtl !important;
    unicode-bidi: plaintext !important;
  }
`

export const AdminStudio = () => {
  useEffect(() => {
    // Ensuring the root body and html have the correct attributes
    document.documentElement.setAttribute('dir', 'rtl');
    document.body.setAttribute('dir', 'rtl');

    // Force dir="rtl" on all dynamically loaded inputs and fix CodeMirror logic
    const interval = setInterval(() => {
      // 1. Force DOM attribute for standard inputs
      const elements = document.querySelectorAll('input, textarea, [role="textbox"], .CodeMirror');
      elements.forEach(el => {
        if (el.getAttribute('dir') !== 'rtl') {
          el.setAttribute('dir', 'rtl');
        }
        
        // 2. DEEP FIX: Target CodeMirror's internal logic
        // EasyMDE/CodeMirror often attaches the instance to the DOM element
        // @ts-ignore
        const cm = el.CodeMirror || (el.querySelector('.CodeMirror') as any)?.CodeMirror;
        if (cm && typeof cm.setOption === 'function') {
          if (cm.getOption('direction') !== 'rtl') {
            cm.setOption('direction', 'rtl');
            // Refresh to apply the change visually
            cm.refresh();
          }
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StrictMode>
      <ThemeProvider theme={studioTheme}>
        <RTLStyle />
        <Studio config={config} />
      </ThemeProvider>
    </StrictMode>
  )
}

export default AdminStudio;

