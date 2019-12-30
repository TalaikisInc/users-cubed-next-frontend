import React, { Component } from 'react'
import { connect } from 'react-redux'
import dynamic from 'next/dynamic'
import { bindActionCreators } from 'redux'

import Loader from 'components/elements/loader'
import ConfirmResetForm from 'components/forms/confirm-reset'
import { DESCRIPTIONS, URL } from 'config'
import { t } from 'translations'
import { confirmReset, setError } from 'store/actions'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import Message from 'components/elements/message'
import { getStatus, getLoading } from 'store/selectors'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

class ConfirmReset extends Component {
  constructor (props) {
    super(props)
    this._submit = this._submit.bind(this)
  }

  static async getInitialProps ({ err, req, res, pathname, reduxStore, query }) {
    errorDispatcher(reduxStore, err)
    localeDispatcher(reduxStore, query)
    if (query && query.token && query.token.length === 64) {
      reduxStore.dispatch(confirmReset({ token: query.token }))
    }
    return { }
  }

  _submit (e) {
    e.preventDefault()
    const { target } = e
    const token = target[0].value
    if (token && token.length === 64) {
      this.props.confirmReset({ token })
    } else {
      this.props.setError(t('error.empty'))
    }
  }

  render () {
    const { status, locale, loading } = this.props
    const url = locale !== 'en' ? `${URL}/confirm-reset/${locale}` : `${URL}/confirm-reset`
    const signinUrl = locale !== 'en' ? `${URL}/signin/${locale}` : `${URL}/signin`

    return (
      <Page title={t('reset.confirm')} description={DESCRIPTIONS.confirmreset} path={url} locale={locale}>
        { status ? <Message>{t('reset.confirmed')}<a href={signinUrl}>{t('form.signin')}</a>.</Message>
          : <ConfirmResetForm handleSubmit={this._submit} loading={loading} />
        }
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  status: getStatus(state),
  loading: getLoading(state)
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ setError, confirmReset }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmReset)
