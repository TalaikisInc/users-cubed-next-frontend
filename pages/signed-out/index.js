import React, { Component } from 'react'
import dynamic from 'next/dynamic'

import { DESCRIPTIONS, FRONTEND_URL } from 'config'
import Loader from 'components/extensions/loader'
import { t, setLocale } from 'translations'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import { Text } from 'components/primitives'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

const SignedOut = ({ locale }) => {
  setLocale(locale)
  const url = locale !== 'en' ? `${FRONTEND_URL}/signed-out/${locale}` : `${FRONTEND_URL}/signed-out`
  const signinUrl = locale !== 'en' ? `${FRONTEND_URL}/signin/${locale}` : `${FRONTEND_URL}/signin`

  return (
    <Page title={t('signout.done')} description={DESCRIPTIONS.signedOut} path={url}>
      <Text>{t('signout.text')} {t('signin.now')}<a href={signinUrl}>{t('form.signin')}</a></Text>
    </Page>
  )
}

SignedOut.getInitialProps = async (ctx) => {
  errorDispatcher(ctx)
  const locale = localeDispatcher(ctx)
  return { locale }
}

export default SignedOut
