import { StrictMode, useEffect } from 'react'
import { Studio } from 'sanity'
import { ThemeProvider, studioTheme } from '@sanity/ui'
import config from '../../sanity.config'
import { createGlobalStyle } from 'styled-components'

const RTLStyle = createGlobalStyle`
  /* Global RTL for Sanity Studio */
  body, html {
    direction: rtl;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
  }

  /* Keep LTR for code/technical elements */
  code, pre, [data-ui="CodeInput"], .sanity-code-input {
    direction: ltr !important;
    text-align: left !important;
  }
`

export const AdminStudio = () => {
  useEffect(() => {
    document.documentElement.setAttribute('dir', 'rtl');
    document.body.setAttribute('dir', 'rtl');
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

