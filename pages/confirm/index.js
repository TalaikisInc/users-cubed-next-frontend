import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'

import { DESCRIPTIONS, FRONTEND_URL } from 'config'
import Loader from 'components/extensions/loader'
import { t, setLocale } from 'translations'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import useStore from 'store'
import ConfirmForm from 'components/forms/confirm'
import Message from 'components/elements/forms/message'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

const Confirm = ({ locale }) => {
  setLocale(locale)
  const [globalState, globalActions] = useStore()
  useEffect(() => globalActions.setStatus(false), [])

  const _submit = (e) => {
    e.preventDefault()
    const { target } = e
    const token = target[0].value
    if (token && token.length === 64) {
      globalActions.confirm({ token })
    } else {
      globalActions.setError(t('error.confirmRequired'))
    }
  }

  const en = locale !== 'en'
  const url = en ? `${FRONTEND_URL}/confirm/${locale}` : `${FRONTEND_URL}/confirm`
  const signinUrl = en ? `${FRONTEND_URL}/signin/${locale}` : `${FRONTEND_URL}/signin`

  return (
    <Page title={t('confirm.title')} description={DESCRIPTIONS.confirm} path={url}>
      { globalState.status ? <Message>{t('confirm.confirmed')} <a href={signinUrl}>{t('signin.title')}</a>.</Message>
        : <ConfirmForm handleSubmit={_submit} />
      }
    </Page>
  )
}

Confirm.getInitialProps = async (ctx) => {
  errorDispatcher(ctx)
  const locale = localeDispatcher(ctx)
  if (ctx.query && ctx.query.token && ctx.query.token.length === 64) {
    ctx.reduxStore.dispatch(confirm({ token: ctx.query.token }))
  }
  return { locale }
}

export default Confirm
