import React, { Component } from 'react'
import { connect } from 'react-redux'
import dynamic from 'next/dynamic'

import { DESCRIPTIONS, URL } from 'config'
import { t } from 'translations'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import Par from 'components/elements/par'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

class SignedOut extends Component {
  static async getInitialProps ({ err, req, res, pathname, reduxStore, query }) {
    errorDispatcher(reduxStore, err)
    localeDispatcher(reduxStore, query)
    return { }
  }

  render () {
    const { locale } = this.props
    const url = locale !== 'en' ? `${URL}/signed-out/${locale}` : `${URL}/signed-out`
    const signinUrl = locale !== 'en' ? `${URL}/signin/${locale}` : `${URL}/signin`

    return (
      <Page title={t('signout.done')} description={DESCRIPTIONS.signedOut} path={url} locale={locale}>
        <Par>{t('signout.text')} {t('signin.now')}<a href={signinUrl}>{t('form.signin')}</a></Par>
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  locale: state.utils.locale
})

export default connect(mapStateToProps, null)(SignedOut)
