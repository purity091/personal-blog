import { StrictMode, useEffect, useRef } from 'react'
import { Studio } from 'sanity'
import { ThemeProvider, studioTheme } from '@sanity/ui'
import config from '../../sanity.config'
import { createGlobalStyle } from 'styled-components'

const RTLStyle = createGlobalStyle`
  body, html {
    direction: rtl;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
  }

  /* Keep LTR for code/technical elements */
  code, pre, [data-ui="CodeInput"], .sanity-code-input,
  .CodeMirror-code, .CodeMirror-lines {
    
  }

  /* Markdown editor text area - RTL for Arabic writing */
  .CodeMirror textarea {
    direction: rtl !important;
    unicode-bidi: plaintext !important;
  }

  .CodeMirror {
    text-align: right !important;
  }
`

export const AdminStudio = () => {
  const observerRef = useRef<MutationObserver | null>(null)

  useEffect(() => {
    document.documentElement.setAttribute('dir', 'rtl')
    document.body.setAttribute('dir', 'rtl')

    // Watch for dynamically added CodeMirror instances and set RTL direction
    observerRef.current = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            // Check if the node itself is a CodeMirror element
            if (node.classList?.contains('CodeMirror')) {
              applyRTLToCodeMirror(node)
            }
            // Check children
            node.querySelectorAll('.CodeMirror').forEach((el) => {
              applyRTLToCodeMirror(el as HTMLElement)
            })
          }
        })
      })
    })

    observerRef.current.observe(document.body, {
      childList: true,
      subtree: true,
    })

    // Apply to any existing CodeMirror instances
    document.querySelectorAll('.CodeMirror').forEach((el) => {
      applyRTLToCodeMirror(el as HTMLElement)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return (
    <StrictMode>
      <ThemeProvider theme={studioTheme}>
        <RTLStyle />
        <Studio config={config} />
      </ThemeProvider>
    </StrictMode>
  )
}

function applyRTLToCodeMirror(el: HTMLElement) {
  // @ts-ignore
  const cm = el.CodeMirror
  if (cm && typeof cm.setOption === 'function') {
    try {
      cm.setOption('direction', 'rtl')
      cm.refresh()
    } catch {
      // CodeMirror might not support direction option
    }
  }
  el.setAttribute('dir', 'rtl')
}

export default AdminStudio
