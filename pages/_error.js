import React, { Component } from 'react'
import dynamic from 'next/dynamic'

import Loader from 'components/elements/loader'
import { t } from 'translations'
import { URL } from 'config'
import Par from 'components/elements/par'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

class Error extends Component {
  static getInitialProps ({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render () {
    const { statusCode } = this.props
    const url = `${URL}/error`

    return (
      <Page title={t('error')} path={url} locale="en" noCrawl>
        <Par>{ statusCode ? `${t('error.msg')}: ${statusCode}` : `${t('error.msg')}` }</Par>
      </Page>
    )
  }
}

export default Error
