import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import PropTypes from 'prop-types'

import theme from 'theme'
import { GlobalStyle } from 'theme/globalStyle'
import { GOOGLE_ANALYTICS_ID, MODULES } from 'config'

const CustomApp = ({ children }) => {
  useEffect(() => loadGA(), [])
  const router = useRouter()

  const loadGA = () => {
    if (MODULES.GOOGLE_ANALYTICS) {
      router.router.events.on('routeChangeComplete', (url) => {
        setTimeout(() => {
          window.gtag('config', GOOGLE_ANALYTICS_ID, {
            page_location: url,
            page_title: document.title
          })
        }, 0)
      })
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      { children }
      <ToastContainer />
    </ThemeProvider>
  )
}

CustomApp.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired
}

export default CustomApp
