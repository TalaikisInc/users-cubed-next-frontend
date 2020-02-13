import React, { useEffect } from 'react'
import isEmail from 'validator/lib/isEmail'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import { DESCRIPTIONS, FRONTEND_URL } from 'config'
import useStore from 'store'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
const SignInForm = dynamic(() => import('components/forms/signin'))
const Loader = dynamic(() => import('components/extensions/loader'))
import { t, setLocale } from 'translations'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

const SignIn = ({ locale }) => {
  setLocale(locale)
  const [globalState, globalActions] = useStore()
  const router = useRouter()

  useEffect(() => {
    console.log('signin globalState.isAuthenticated')
    console.log(globalState.isAuthenticated)
    if (globalState.isAuthenticated) {
      if (locale !== 'undefined' && locale !== 'en') {
        console.log('locale on signup')
        console.log(locale)
        router.push(`/dashboard/${locale}`)
      } else {
        router.push('/dashboard')
      }
    }
  }, [])

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

  const url = locale !== 'en' ? `${FRONTEND_URL}/signin/${locale}` : `${FRONTEND_URL}/signin`

  return (
    <Page title={t('form.signin')} description={DESCRIPTIONS.signin} path={url}>
      <SignInForm handleSubmit={_submit} />
    </Page>
  )
}

SignIn.getInitialProps = async (ctx) => {
  errorDispatcher(ctx)
  const locale = localeDispatcher(ctx)
  return { locale }
}

export default SignIn
