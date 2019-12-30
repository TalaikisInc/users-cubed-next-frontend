import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import dynamic from 'next/dynamic'
import { bindActionCreators } from 'redux'

import Loader from 'components/elements/loader'
import { t } from 'translations'
import { getUser } from 'store/actions'
import { isServer } from 'utils/utils'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import { getCurrentUser, getLocale } from 'store/selectors'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

class Dashboard extends Component {
  static async getInitialProps ({ err, req, res, pathname, reduxStore, query }) {
    errorDispatcher(reduxStore, err)
    localeDispatcher(reduxStore, query)
    if (!isServer) {
      reduxStore.dispatch(getUser())
    }
    return { }
  }

  render () {
    const { currentUser, locale } = this.props
    const url = locale !== 'en' ? `${URL}/dashboard/${locale}` : `${URL}/dashboard`
    const editUrl = locale !== 'en' ? `${URL}/profile-edit/${locale}` : `${URL}/profile-edit`
    const refUrl = locale !== 'en' ? `${URL}/refer/${locale}` : `${URL}/refer`
    const refsUrl = locale !== 'en' ? `${URL}/referred/${locale}` : `${URL}/referred`

    return (
      <Page title={t('dashboard')} locale={locale} path={url} noCrawl>
        { !currentUser.email ? <Loader />
          : <Fragment>
            <p><b>{ t('form.email') }:</b> {currentUser.email}</p>
            <p><b>{ t('form.name') }:</b> {currentUser.firstName}</p>
            <p><b>{ t('form.lastName') }:</b> {currentUser.lastName}</p>
            <p><b>{ t('form.phone') }:</b> {currentUser.dialCoode} {currentUser.phone}</p>
            <p><b>{ t('form.address') }:</b> {currentUser.address}</p>
            <p><b>{ t('form.zip') }:</b> {currentUser.zipCode}</p>
            <p><b>{ t('form.city') }:</b> {currentUser.city}</p>
            <p><b>{ t('form.country') }:</b> {currentUser.country}</p>
            <p><b>{ t('form.dob') }:</b> {currentUser.dob}</p>
            <p><b>{ t('form.avatar') }:</b> {currentUser.avatarUrl}</p>
            <p><strong><a href={editUrl}>{ t('profile.edit') }</a></strong></p>
            <p><strong><a href={refUrl}>{ t('refer.title') }</a></strong></p>
            <p><strong><a href={refsUrl}>{ t('refer.list') }</a></strong></p>
          </Fragment>
        }
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state),
  locale: getLocale(state)
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ getUser }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
