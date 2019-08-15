import React, { Fragment } from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GOOGLE_PUB, PROD } from 'config'

class CustomDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <meta name="google-site-verification" content="HduKdZO6t6LohVq2L3zFPo6bz92WUFGpv9YLrNJth6U" />
          { PROD ? <Fragment>
            <script data-cfasync="false" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" async />
            <script dangerouslySetInnerHTML={{
              __html: `
                (adsbygoogle = window.adsbygoogle || []).push({
                  google_ad_client: "${GOOGLE_PUB}",
                  enable_page_level_ads: true
                });
              `
            }} />
          </Fragment> : null }
          <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
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
