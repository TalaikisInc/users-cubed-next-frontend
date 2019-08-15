import React, { Component } from 'react'
import { connect } from 'react-redux'
import dynamic from 'next/dynamic'
import { bindActionCreators } from 'redux'

import Loader from 'components/elements/loader'
import Par from 'components/elements/par'
import { DESCRIPTIONS, URL } from 'config'
import { t } from 'translations'
import { setError } from 'store/actions'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

class Homepage extends Component {
  static async getInitialProps ({ err, req, res, pathname, reduxStore, query }) {
    errorDispatcher(reduxStore, err)
    localeDispatcher(reduxStore, query)
    return { }
  }

  render () {
    const { locale } = this.props
    const url = locale !== 'en' ? `${URL}/index/${locale}` : URL

    return (
      <Page title={t('home')} description={DESCRIPTIONS.homepage} path={url} locale={locale}>
        <Par>Hello</Par>
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  locale: state.utils.locale
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ setError }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
