import React from 'react'
import dynamic from 'next/dynamic'

import { FRONTEND_URL } from 'config'
import Loader from 'components/extensions/loader'
import { t } from 'translations'
import { Text } from 'components/primitives'
import useStore from 'store'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

const NotFound = () => {
  const [globalState, globalActions] = useStore()
  const url = globalState.locale !== 'en' ? `${FRONTEND_URL}/not-found/${globalState.locale}` : `${FRONTEND_URL}/not-found`

  return (
    <Page path={`${FRONTEND_URL}/not-found`} title={t('not_found')} path={url} noCrawl>
      <Text>{t('error.404')}</Text>
    </Page>
  )
}

export default NotFound
