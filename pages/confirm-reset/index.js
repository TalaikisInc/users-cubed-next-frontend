import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'

import { DESCRIPTIONS, FRONTEND_URL } from 'config'
import Loader from 'components/extensions/loader'
import Message from 'components/elements/forms/message'
const ConfirmResetForm = dynamic(() => import('components/forms/confirm-reset'))
import { t, setLocale } from 'translations'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import useStore from 'store'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

const ConfirmReset = ({ locale }) => {
  setLocale(locale)
  const [globalState, globalActions] = useStore()

  useEffect(() => globalActions.setStatus(false), [])
  const _submit = (e) => {
    e.preventDefault()
    const { target } = e
    const token = target[0].value
    if (token && token.length === 64) {
      globalActions.confirmReset({ token })
    } else {
      globalActions.setError(t('error.resetTokenInvalid'))
    }
  }

  const url = locale !== 'en' ? `${FRONTEND_URL}/confirm-reset/${locale}` : `${FRONTEND_URL}/confirm-reset`
  const signinUrl = locale !== 'en' ? `${FRONTEND_URL}/signin/${locale}` : `${FRONTEND_URL}/signin`

  return (
    <Page title={t('reset.confirm')} description={DESCRIPTIONS.confirmreset} path={url}>
      { globalState.status ? <Message>{t('reset.confirmed')}<a href={signinUrl}>{t('form.signin')}</a>.</Message>
        : <ConfirmResetForm handleSubmit={_submit} />
      }
    </Page>
  )
}

ConfirmReset.getInitialProps = async (ctx) => {
  errorDispatcher(ctx)
  const locale = localeDispatcher(ctx)
  if (ctx.query && ctx.query.token && ctx.query.token.length === 64) {
    ctx.reduxStore.dispatch(confirmReset({ token: ctx.query.token }))
  }
  return { locale }
}

export default ConfirmReset
