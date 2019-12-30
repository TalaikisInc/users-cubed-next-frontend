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
import { getLocale } from 'store/selectors'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

class About extends Component {
  static async getInitialProps ({ err, req, res, pathname, reduxStore, query }) {
    errorDispatcher(reduxStore, err)
    localeDispatcher(reduxStore, query)
    return { }
  }

  render () {
    const { locale } = this.props
    const url = locale !== 'en' ? `${URL}/about/${locale}` : `${URL}/about`

    return (
      <Page title={t('about')} description={DESCRIPTIONS.about} path={url} locale={locale}>
        <Par>
          About
        </Par>
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  locale: getLocale(state)
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ setError }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(About)
