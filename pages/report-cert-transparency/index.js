import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import isEmail from 'validator/lib/isEmail'

import { DESCRIPTIONS, FRONTEND_URL } from 'config'
import Loader from 'components/extensions/loader'
const ContactForm = dynamic(() => import('components/forms/contact'))
import { t, setLocale } from 'translations'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import Message from 'components/elements/forms/message'
import useStore from 'store'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

const ReportCertTransparency = ({ locale }) => {
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

  const url = locale !== 'en' ? `${FRONTEND_URL}/report-cert-transparency/${locale}` : `${FRONTEND_URL}/report-cert-transparency`

  return (
    <Page title={t('contact.cert')} description={DESCRIPTIONS.contactUs} path={url}>
      { globalState.status ? <Message>{t('contact.done')}</Message>
        : <ContactForm handleSubmit={_submit} />
      }
    </Page>
  )
}

ReportCertTransparency.getInitialProps = async (ctx) => {
  errorDispatcher(ctx)
  const locale = localeDispatcher(ctx)
  return { locale }
}

export default ReportCertTransparency
