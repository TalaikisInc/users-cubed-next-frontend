import React, { useEffect } from 'react'
import isEmail from 'validator/lib/isEmail'
import dynamic from 'next/dynamic'

import { DESCRIPTIONS, FRONTEND_URL } from 'config'
import Loader from 'components/extensions/loader'
const ContactForm = dynamic(() => import('components/forms/contact'))
import { t, setLocale } from 'translations'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import Message from 'components/elements/forms/message'
import useStore from 'store'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

const XSSReport = ({ locale }) => {
  setLocale(locale)
  const [globalState, globalActions] = useStore()
  useEffect(() => globalActions.setStatus(false), [])

  const _submit = (e) => {
    e.preventDefault()
    const { target } = e
    const name = target[0].value
    const email = target[1].value
    const message = target[2].value
    if (email && isEmail(email) && name && name.length > 3 && message && message.length > 10) {
      globalActions.contact({ name, email, message })
    } else {
      globalActions.setError(t('error.empty'))
    }
  }

  const url = locale !== 'en' ? `${FRONTEND_URL}/xss-report/${locale}` : `${FRONTEND_URL}/xss-report`

  return (
    <Page title={t('conatct.xss')} description={DESCRIPTIONS.contactUs} path={url}>
      { globalState.status ? <Message>{t('contact.done')}</Message>
        : <ContactForm handleSubmit={_submit} />
      }
    </Page>
  )
}

XSSReport.getInitialProps = async (ctx) => {
  errorDispatcher(ctx)
  const locale = localeDispatcher(ctx)
  return { locale }
}

export default XSSReport
