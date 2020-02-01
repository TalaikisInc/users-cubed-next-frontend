import React from 'react'
import isEmail from 'validator/lib/isEmail'
import Router from 'next/router'
import dynamic from 'next/dynamic'

import { DESCRIPTIONS, FRONTEND_URL } from 'config'
import useStore from 'store'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
const SigninForm = dynamic(() => import('components/forms/signin'))
const Loader = dynamic(() => import('components/extensions/loader'))
import { t, setLocale } from 'translations'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

const Signin = ({ locale }) => {
  setLocale(locale)
  const [globalState, globalActions] = useStore()

  const _submit = (e) => {
    e.preventDefault()
    const { target } = e
    const email = target[0].value
    const password = target[1].value
    if (email && isEmail(email) && password && password.length > 11) {
      globalActions.signin({ email, password })
    } else {
      globalActions.setError(t('error.empty'))
    }
  }

  if (globalState.isAuthenticated) {
    if (locale !== 'en') {
      Router.push(`/dashboard/${locale}`)
    } else {
      Router.push('/dashboard')
    }
  }
  const url = locale !== 'en' ? `${FRONTEND_URL}/signin/${locale}` : `${FRONTEND_URL}/signin`

  return (
    <Page title={t('form.signin')} description={DESCRIPTIONS.signin} path={url}>
      <SigninForm handleSubmit={_submit} />
    </Page>
  )
}

Signin.getInitialProps = async (ctx) => {
  errorDispatcher(ctx)
  const locale = localeDispatcher(ctx)
  return { locale }
}

export default Signin
