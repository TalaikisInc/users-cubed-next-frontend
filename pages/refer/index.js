import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import isEmail from 'validator/lib/isEmail'

import { DESCRIPTIONS, FRONTEND_URL } from 'config'
import Loader from 'components/extensions/loader'
const ReferForm = dynamic(() => import('components/forms/refer'))
import { t, setLocale } from 'translations'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import Message from 'components/elements/forms/message'
import useStore from 'store'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

const Refer = ({ locale }) => {
  setLocale(locale)
  const [globalState, globalActions] = useStore()
  useEffect(() => globalActions.setStatus(false), [])

  const _submit = (e) => {
    e.preventDefault()
    const { target } = e
    const email = target[0].value
    if (email && isEmail(email)) {
      globalActions.refer({ to: email })
    } else {
      globalActions.setError(t('error.emailInvalid'))
    }
  }

  const url = locale !== 'en' ? `${FRONTEND_URL}/refer/${locale}` : `${FRONTEND_URL}/refer`

  return (
    <Page title={t('refer.title')} description={DESCRIPTIONS.refer} path={url}>
      { globalState.status ? <Message>{t('refer.complete')}</Message> : null }
      <ReferForm handleSubmit={_submit} />
    </Page>
  )
}

Refer.getInitialProps = (ctx) => {
  errorDispatcher(ctx)
  const locale = localeDispatcher(ctx)
  return { locale }
}

export default Refer
