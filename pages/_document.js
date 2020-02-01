import React, { Fragment } from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import { MODULES, GOOGLE_ANALYTICS_ID } from 'config'

class CustomDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    if (initialProps) return { ...initialProps }
  }

  render () {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta name="google-site-verification" content="HduKdZO6t6LohVq2L3zFPo6bz92WUFGpv9YLrNJth6U" />
          { MODULES.ADSENSE ? <Fragment>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`} />
            <script dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GOOGLE_ANALYTICS_ID}');
              `
            }} />
          </Fragment> : null }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
