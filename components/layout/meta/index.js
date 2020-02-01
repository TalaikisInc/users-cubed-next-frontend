import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import { TITLE, DEFAULT_OG_TYPE, DEFAULT_DESCRIPTION, DEFAULT_IMAGE, IMAGES_URL, FB_SITE, FB_APP_ID, TWITTER_HANDLE } from 'config'
import useStore from 'store'

const Meta = ({ title, path, image, description, noCrawl, type }) => {
  const [globalState, globalActions] = useStore()
  const pageProps = {
    path: typeof path === 'string' ? path : '/',
    image: typeof image === 'string' ? `${IMAGES_URL}${image}` : `${IMAGES_URL}${DEFAULT_IMAGE}`,
    fullTitle: `${title} | ${TITLE}`,
    fullUrl: path,
    description: typeof description === 'string' ? description : DEFAULT_DESCRIPTION,
    locale: typeof globalState.locale === 'string' ? globalState.locale : 'en_US',
    type: typeof type === 'string' ? type : DEFAULT_OG_TYPE
  }

  return (
    <Head>
      <title>{ pageProps.fullTitle }</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      { noCrawl ? <meta name='robots' content='noindex, nofollow' /> : <meta name='robots' content='index, follow' /> }
      <link rel='manifest' href='/static/manifest.json' />
      <meta name='application-name' content='PWA App' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content={TITLE} />
      <link rel='apple-touch-icon' sizes='180x180' href='/static/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon-16x16.png' />
      <link rel='canonical' href={pageProps.fullUrl} />
      <meta name='description' content={pageProps.description} />
      <meta property='og:title' content={pageProps.fullTitle} />
      <meta property='og:url' content={pageProps.fullUrl} />
      <meta property='og:type' content={pageProps.type} />
      <meta property='og:description' content={pageProps.description} />
      <meta property='og:image' content={pageProps.image} />
      <meta property='og:site_name' content={FB_SITE} />
      <meta property='fb:app_id' content={FB_APP_ID} />
      <meta property='og:locale' content={pageProps.locale} />
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:site' content={TWITTER_HANDLE} />
      <meta property='twitter:creator' content={TWITTER_HANDLE} />
      <meta property='twitter:title' content={pageProps.fullTitle} />
      <meta property='twitter:description' content={pageProps.description} />
      <meta property='twitter:url' content={pageProps.fullUrl} />
      <meta property='twitter:image:src' content={pageProps.image} />
      <meta property='twitter:handle' content={TWITTER_HANDLE} />
    </Head>
  )
}

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  noCrawl: PropTypes.bool,
  type: PropTypes.string
}

export default Meta
