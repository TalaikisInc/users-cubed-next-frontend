import React from 'react'
import dynamic from 'next/dynamic'

import { DESCRIPTIONS, FRONTEND_URL } from 'config'
import { t, setLocale } from 'translations'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import Loader from 'components/extensions/loader'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

const Homepage = ({ locale }) => {
  setLocale(locale)
  const en = locale !== 'en'
  const url = en ? `${FRONTEND_URL}/index/${locale}` : FRONTEND_URL

  return (
    <Page title={t('home')} description={DESCRIPTIONS.homepage} path={url}>
      <p>Test</p>
    </Page>
  )
}

Homepage.getInitialProps = (ctx) => {
  errorDispatcher(ctx)
  const locale = localeDispatcher(ctx)
  return { locale }
}

export default Homepage
