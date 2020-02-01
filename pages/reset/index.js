import React from 'react'
import isEmail from 'validator/lib/isEmail'
import dynamic from 'next/dynamic'

import { DESCRIPTIONS, FRONTEND_URL } from 'config'
import Loader from 'components/extensions/loader'
const ResetForm = dynamic(() => import('components/forms/reset'))
import { t, setLocale } from 'translations'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import Message from 'components/elements/forms/message'
import useStore from 'store'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

const Reset = ({ locale }) => {
  setLocale(locale)
  const [globalState, globalActions] = useStore()
  useEffect(() => globalActions.setStatus(false), [])

  const _submit = (e) => {
    e.preventDefault()
    const { target } = e
    const email = target[0].value
    if (email && isEmail(email)) {
      globalActions.reset({ email })
    } else {
      globalActions.setError(t('error.emailInvalid'))
    }
  }

  const url = locale !== 'en' ? `${FRONTEND_URL}/reset/${locale}` : `${FRONTEND_URL}/reset`
  const confirmUrl = locale !== 'en' ? `${FRONTEND_URL}/confirm-reset/${locale}` : `${FRONTEND_URL}/confirm-reset`

  return (
    <Page title={t('reset.title')} description={DESCRIPTIONS.reset} path={url}>
      { globalState.status ? <Message>{t('reset.password')}<a href={confirmUrl}>{t('form.confirm')}</a>{t('reset.sent')}</Message>
        : <ResetForm handleSubmit={_submit} />
      }
    </Page>
  )
}

Reset.getInitialProps = async (ctx) => {
  errorDispatcher(ctx)
  const locale = localeDispatcher(ctx)
  return { locale }
}

export default Reset
