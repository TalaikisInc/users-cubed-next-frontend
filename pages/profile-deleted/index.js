import React, { Component } from 'react'
import { connect } from 'react-redux'
import dynamic from 'next/dynamic'
import { bindActionCreators } from 'redux'

import Loader from 'components/elements/loader'
import { DESCRIPTIONS, URL } from '../../config'
import { t } from 'translations'
import { setError } from 'store/actions'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import Par from 'components/elements/par'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

class ProfileDeleted extends Component {
  static async getInitialProps ({ err, req, res, pathname, reduxStore, query }) {
    errorDispatcher(reduxStore, err)
    localeDispatcher(reduxStore, query)
    return { }
  }

  render () {
    const { locale } = this.props
    const url = locale !== 'en' ? `${URL}/profile-deleted/${locale}` : `${URL}/profile-deleted`
    const signupUrl = locale !== 'en' ? `${URL}/signup/${locale}` : `${URL}/signup`

    return (
      <Page title={t('profile.deleted')} description={DESCRIPTIONS.profile.deleted} path={url} locale={locale}>
        <Par>{t('profile.deletedText')} {t('signup.now')}<a href={signupUrl}>{t('form.signup')}</a></Par>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDeleted)
