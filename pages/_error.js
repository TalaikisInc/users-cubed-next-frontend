import React, { Component } from 'react'
import dynamic from 'next/dynamic'

import Loader from 'components/extensions/loader'
import { t } from 'translations'
import { FRONTEND_URL } from 'config'
import { Text } from 'components/primitives'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

class Error extends Component {
  static getInitialProps ({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render () {
    const { statusCode } = this.props
    const url = `${FRONTEND_URL}/error`

    return (
      <Page title={t('error.title')} path={url} locale="en" noCrawl>
        <Text>{ statusCode ? `${t('error.msg')}: ${statusCode}` : `${t('error.msg')}` }</Text>
      </Page>
    )
  }
}

export default Error
