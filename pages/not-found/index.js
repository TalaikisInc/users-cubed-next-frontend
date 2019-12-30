import React, { Component } from 'react'
import { connect } from 'react-redux'
import dynamic from 'next/dynamic'

import Loader from 'components/elements/loader'
import { t } from 'translations'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import { URL } from 'config'
import Par from 'components/elements/par'
import { getLocale } from 'store/selectors'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

class NotFound extends Component {
  static async getInitialProps ({ err, req, res, pathname, reduxStore, query }) {
    errorDispatcher(reduxStore, err)
    localeDispatcher(reduxStore, query)
    return { }
  }

  render () {
    const { locale } = this.props
    const url = locale !== 'en' ? `${URL}/not-found/${locale}` : `${URL}/not-found`

    return (
      <Page path={`${URL}/not-found`} title={t('not_found')} path={url} locale={locale} noCrawl>
        <Par>{t('error.404')}</Par>
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  locale: getLocale(state)
})

export default connect(mapStateToProps, null)(NotFound)
