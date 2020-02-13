import React, { Fragment, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { FRONTEND_URL } from 'config'
import Loader from 'components/extensions/loader'
import { t, setLocale } from 'translations'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import useStore from 'store'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

const Dashboard = ({ locale }) => {
  setLocale(locale)
  const [globalState, globalActions] = useStore()
  const router = useRouter()

  useEffect(() => {
    console.log('dashboard globalState.isAuthenticated')
    console.log(globalState.isAuthenticated)
    if (!globalState.isAuthenticated) {
      if (typeof locale !== 'undefined' && locale !== 'en') {
        router.push(`/signin/${locale}`)
      } else {
        router.push('/signin')
      }
    }
    const getData = async () => {
      await globalActions.getUser()
    }
    getData()
  }, [])

  const en = locale !== 'en'
  const url = en ? `${FRONTEND_URL}/dashboard/${locale}` : `${FRONTEND_URL}/dashboard`
  const editUrl = en ? `${FRONTEND_URL}/profile-edit/${locale}` : `${FRONTEND_URL}/profile-edit`
  const refUrl = en ? `${FRONTEND_URL}/refer/${locale}` : `${FRONTEND_URL}/refer`
  const refsUrl = en ? `${FRONTEND_URL}/referred/${locale}` : `${FRONTEND_URL}/referred`
  console.log('globalState.currentUser')
  console.log(globalState.currentUser)
  console.log('globalState.isAuthenticated')
  console.log(globalState.isAuthenticated)

  return (
    <Page title={t('dashboard.title')} path={url} noCrawl>
      { !globalState.currentUser.email && !globalState.isAuthenticated ? null
        : <Fragment>
          <p><b>{ t('form.email') }:</b> {globalState.currentUser.email}</p>
          <p><b>{ t('form.name') }:</b> {globalState.currentUser.firstName}</p>
          <p><b>{ t('form.lastName') }:</b> {globalState.currentUser.lastName}</p>
          <p><b>{ t('form.address') }:</b> {globalState.currentUser.address}</p>
          <p><b>{ t('form.zip') }:</b> {globalState.currentUser.zipCode}</p>
          <p><b>{ t('form.city') }:</b> {globalState.currentUser.city}</p>
          <p><b>{ t('form.country') }:</b> {globalState.currentUser.country}</p>
          <p><b>{ t('form.dob') }:</b> {globalState.currentUser.dob}</p>
          <p><b>{ t('form.avatar') }:</b> {globalState.currentUser.avatarUrl}</p>
          <p><strong><a href={editUrl}>{ t('profile.edit') }</a></strong></p>
          <p><strong><a href={refUrl}>{ t('refer.title') }</a></strong></p>
          <p><strong><a href={refsUrl}>{ t('refer.list') }</a></strong></p>
        </Fragment>
      }
    </Page>
  )
}

Dashboard.getInitialProps = (ctx) => {
  errorDispatcher(ctx)
  const locale = localeDispatcher(ctx)
  return { locale }
}

export default Dashboard
