import React from 'react'
import dynamic from 'next/dynamic'

import { DESCRIPTIONS, FRONTEND_URL } from 'config'
import Loader from 'components/extensions/loader'
import { Text } from 'components/primitives'
import { t, setLocale } from 'translations'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

const Blog = ({ locale }) => {
  setLocale(locale)
  const url = locale !== 'en' ? `${FRONTEND_URL}/about/${locale}` : `${FRONTEND_URL}/about`

  return (
    <Page title={t('about')} description={DESCRIPTIONS.about} path={url}>
      <Text>
        About
      </Text>
    </Page>
  )
}

Blog.getInitialProps = async (ctx) => {
  errorDispatcher(ctx)
  const locale = localeDispatcher(ctx)
  return { locale }
}

export default Blog
