import React, { Component } from 'react'
import isemail from 'isemail'
import { connect } from 'react-redux'
import dynamic from 'next/dynamic'
import { bindActionCreators } from 'redux'

import Loader from 'components/elements/loader'
import { isServer } from 'utils/utils'
import ResetForm from 'components/forms/reset'
import { DESCRIPTIONS, URL } from 'config'
import { t } from 'translations'
import { reset, setError, setStatus } from 'store/actions'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import Message from 'components/elements/message'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

class Reset extends Component {
  constructor (props) {
    super(props)
    this._submit = this._submit.bind(this)
  }

  static async getInitialProps ({ err, req, res, pathname, reduxStore, query }) {
    errorDispatcher(reduxStore, err)
    localeDispatcher(reduxStore, query)
    if (!isServer) {
      reduxStore.dispatch(setResetStatus(false))
    }
    return { }
  }

  _submit (e) {
    e.preventDefault()
    const { target } = e
    const email = target[0].value
    if (email && isemail.validate(email)) {
      this.props.reset({ email })
    } else {
      this.props.setError(t('error.empty'))
    }
  }

  render () {
    const { status, locale } = this.props
    const url = locale !== 'en' ? `${URL}/reset/${locale}` : `${URL}/reset`
    const confirmUrl = locale !== 'en' ? `${URL}/confirm-reset/${locale}` : `${URL}/confirm-reset`

    return (
      <Page title={t('reset.title')} description={DESCRIPTIONS.reset} path={url} locale={locale}>
        { status ? <Message>{t('reset.password')}<a href={confirmUrl}>{t('form.confirm')}</a>{t('reset.sent')}</Message>
          : <ResetForm handleSubmit={this._submit} />
        }
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  locale: state.utils.locale,
  status: state.utils.status
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ setError, reset, setStatus }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Reset)
