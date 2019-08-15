import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactGA from 'react-ga'
import Router from 'next/router'

import { GA_TRACKING_ID, PROD } from 'config'
import withReduxStore from 'store/withReduxStore'
import 'static/css/themify.css'
import 'static/css/animate.css'
import 'static/css/color1.css'

class CustomApp extends App {
  initGA () {
    ReactGA.initialize(GA_TRACKING_ID)
    // console.log('Initialized')
  }

  logPageView () {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
    // console.log(`Logged: ${window.location.pathname}`)
  }

  componentDidMount () {
    if (PROD) {
      if (!window.GA_INITIALIZED) {
        this.initGA()
        window.GA_INITIALIZED = true
      }
      this.logPageView()
      Router.router.events.on('routeChangeComplete', this.logPageView)
    }
  }

  componentDidCatch (error, errorInfo) {
    console.log(`Error: ${error.message}`)
    super.componentDidCatch(error, errorInfo)
  }

  render () {
    const { Component, pageProps, reduxStore } = this.props

    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    )
  }
}

export default withReduxStore(CustomApp)
