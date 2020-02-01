import React, { useEffect } from 'react'
import isEmail from 'validator/lib/isEmail'
import dynamic from 'next/dynamic'

import { FRONTEND_URL } from 'config'
import Loader from 'components/extensions/loader'
import { t, setLocale } from 'translations'
const ProfileEditForm = dynamic(() => import('components/forms/profile-edit'))
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import Message from 'components/elements/forms/message'
import useStore from 'store'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

const ProfileEdit = ({ locale }) => {
  setLocale(locale)
  const [globalState, globalActions] = useStore()
  useEffect(() => globalActions.setStatus(false), [])

  const _submit = (e) => {
    e.preventDefault()
    const { target } = e
    const email = target[0].value
    const firstName = target[1].value
    const lastName = target[2].value
    const dob = target[3].value
    const phone = target[4].value
    const address = target[5].value
    const city = target[6].value
    const zipCode = target[7].value
    const country = target[8].value
    const password = target[9].value
    if (email && isEmail(email)) {
      globalActions.editUser({ email, firstName, lastName, dob, phone, address, city, country, password, zipCode })
    } else {
      globalActions.setError(t('error.empty'))
    }
  }

  const url = locale !== 'en' ? `${FRONTEND_URL}/profile-edit/${locale}` : `${FRONTEND_URL}/profile-edit`

  return (
    <Page title={t('profile.edit')} path={url} noCrawl>
      { globalState.status ? <Message>{t('profile.confirmed')}.</Message> : null }
      <ProfileEditForm handleSubmit={_submit} />
    </Page>
  )
}

ProfileEdit.getInitialProps = (ctx) => {
  errorDispatcher(ctx)
  const locale = localeDispatcher(ctx)
  return { locale }
}

export default ProfileEdit
