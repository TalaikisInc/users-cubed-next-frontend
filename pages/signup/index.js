import React from 'react'
import dynamic from 'next/dynamic'
import isEmail from 'validator/lib/isEmail'

import { DESCRIPTIONS, FRONTEND_URL } from 'config'
import Loader from 'components/extensions/loader'
const SignupForm = dynamic(() => import('components/forms/signup'))
import { t, setLocale } from 'translations'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import Message from 'components/elements/forms/message'
import useStore from 'store'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

const Signup  = ({ locale }) =>  {
  setLocale(locale)
  const [globalState, globalActions] = useStore()
  const _submit = (e) => {
    e.preventDefault()
    const { target } = e
    const email = target[0].value
    const password = target[1].value
    const repeatPassword = target[2].value
    const tosAgreement = target[3].value === 'true' ? '1' : '0'
    if (email && isEmail(email) && password && password.length > 11 && repeatPassword && tosAgreement) {
      console.log('calling signup')
      globalActions.signup({ email, password, tosAgreement, locale })
    } else {
      globalActions.setError(t('error.empty'))
    }
  }

  const en = globalState.locale !== 'en'  
  const url = en ? `${FRONTEND_URL}/signup/${globalState.locale}` : `${FRONTEND_URL}/signup`
  const confirmUrl = en ? `${FRONTEND_URL}/confirm/${globalState.locale}` : `${FRONTEND_URL}/confirm`

  return (
    <Page title={t('form.signup')} description={DESCRIPTIONS.signup} path={url}>
      { globalState.signupStatus ? <Message>{t('signup.done')}<a href={confirmUrl}>{t('form.confirm')}</a>{t('signup.account')}</Message>
        : <SignupForm handleSubmit={_submit} />
      }
    </Page>
  )
}

Signup.getInitialProps = async (ctx) => {
  errorDispatcher(ctx)
  const locale = localeDispatcher(ctx)
  return { locale }
}

export default Signup
