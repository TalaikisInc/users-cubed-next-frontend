import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'

import { DESCRIPTIONS, FRONTEND_URL } from 'config'
import Loader from 'components/extensions/loader'
const ReferUseForm = dynamic(() => import('components/forms/refer-use'))
import { t, setLocale } from 'translations'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import Message from 'components/elements/forms/message'
import useStore from 'store'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

const ReferUse = ({ locale, token }) => {
  setLocale(locale)
  const [globalState, globalActions] = useStore()
  if (token) {
    useEffect(() => globalActions.referUse(token), [])
  }

  const _submit = (e) => {
    e.preventDefault()
    const { target } = e
    const token = target[0].value
    if (token && token.length === 64) {
      globalActions.referUse(token)
    } else {
      globalActions.setError(t('error.empty'))
    }
  }

  const url = locale !== 'en' ? `${FRONTEND_URL}/confirm/${locale}` : `${FRONTEND_URL}/confirm`
  const signinUrl = locale !== 'en' ? `${FRONTEND_URL}/signin/${locale}` : `${FRONTEND_URL}/signin`

  return (
    <Page title={t('refer.useTitle')} description={DESCRIPTIONS.confirm} path={url}>
      { globalState.status ? <Message>{t('refer.useDone')} <a href={signinUrl}>{t('form.signin')}</a>.</Message>
        : <ReferUseForm handleSubmit={_submit} />
      }
    </Page>
  )
}

ReferUse.getInitialProps = async (ctx) => {
  errorDispatcher(ctx)
  const locale = localeDispatcher(ctx)
  return { locale, token: ctx.query.token }
}

export default ReferUse
