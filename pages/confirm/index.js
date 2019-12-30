import React, { Component } from 'react'
import { connect } from 'react-redux'
import dynamic from 'next/dynamic'
import { bindActionCreators } from 'redux'

import Loader from 'components/elements/loader'
import ConfirmForm from 'components/forms/confirm'
import { DESCRIPTIONS, URL } from 'config'
import { t } from 'translations'
import { confirm, setError, setStatus } from 'store/actions'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import Message from 'components/elements/message'
import { getLocale, getStatus } from 'store/selectors'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

class Confirm extends Component {
  constructor (props) {
    super(props)
    this._submit = this._submit.bind(this)
  }

  static async getInitialProps ({ err, req, res, pathname, reduxStore, query }) {
    errorDispatcher(reduxStore, err)
    localeDispatcher(reduxStore, query)
    if (query && query.token && query.token.length === 64) {
      reduxStore.dispatch(confirm({ token: query.token }))
    }
    return { }
  }

  _submit (e) {
    e.preventDefault()
    const { target } = e
    const token = target[0].value
    if (token && token.length === 64) {
      this.props.confirm({ token })
    } else {
      this.props.setError(t('error.empty'))
    }
  }

  render () {
    const { status, locale } = this.props
    const url = locale !== 'en' ? `${URL}/confirm/${locale}` : `${URL}/confirm`
    const signinUrl = locale !== 'en' ? `${URL}/signin/${locale}` : `${URL}/signin`

    return (
      <Page title={t('confirm_title')} description={DESCRIPTIONS.confirm} path={url} locale={locale}>
        { status ? <Message>{t('confirmed')}<a href={signinUrl}>{t('signin')}</a>.</Message>
          : <ConfirmForm handleSubmit={this._submit} />
        }
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  status: getStatus(state),
  locale: getLocale(state)
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ setError, confirm, setStatus }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Confirm)
