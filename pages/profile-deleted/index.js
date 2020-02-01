import React from 'react'
import dynamic from 'next/dynamic'

import { DESCRIPTIONS, FRONTEND_URL } from 'config'
import { Text } from 'components/primitives'
import Loader from 'components/extensions/loader'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import { t, setLocale } from 'translations'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

const ProfileDeleted = ({ locale }) => {
  setLocale(locale)
  const url = locale !== 'en' ? `${FRONTEND_URL}/profile-deleted/${locale}` : `${FRONTEND_URL}/profile-deleted`
  const signupUrl = locale !== 'en' ? `${FRONTEND_URL}/signup/${locale}` : `${FRONTEND_URL}/signup`

  return (
    <Page title={t('profile.deleted')} description={DESCRIPTIONS.profile.deleted} path={url}>
      <Text>{t('profile.deletedText')} {t('signup.now')}<a href={signupUrl}>{t('form.signup')}</a></Text>
    </Page>
  )
}

ProfileDeleted.getInitialProps = async (ctx) => {
  errorDispatcher(ctx)
  const locale = localeDispatcher(ctx)
  return { locale }
}

export default ProfileDeleted
