import React from 'react'
import App from 'next/app'
import 'react-toastify/dist/ReactToastify.css'
import 'pretty-checkbox/dist/pretty-checkbox.css'

import CustomApp from 'pages/customApp'

class Custom extends App {
  render () {
    const { Component, pageProps } = this.props

    return (
      <CustomApp>
        <Component {...pageProps} />
      </CustomApp>
    )
  }
}

export default Custom
