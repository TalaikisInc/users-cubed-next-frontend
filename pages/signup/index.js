import React, { Component } from 'react'
import isemail from 'isemail'
import { connect } from 'react-redux'
import dynamic from 'next/dynamic'
import { bindActionCreators } from 'redux'

import Loader from 'components/elements/loader'
import SignupForm from 'components/forms/signup'
import { DESCRIPTIONS, URL } from 'config'
import { t } from 'translations'
import { signup, setError, setStatus } from 'store/actions'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import Message from 'components/elements/message'
import { getLocale, getStatus } from 'store/selectors'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

class Signup extends Component {
  constructor (props) {
    super(props)
    this._submit = this._submit.bind(this)
  }

  static async getInitialProps ({ err, req, res, pathname, reduxStore, query }) {
    errorDispatcher(reduxStore, err)
    localeDispatcher(reduxStore, query)
    return { }
  }

  _submit (e) {
    e.preventDefault()
    const { target } = e
    const email = target[0].value
    const password = target[1].value
    const tosAgreement = target[3].value === 'true'
    if (isemail.validate(email) && password && password.length > 11 && tosAgreement) {
      this.props.signup({ email, password, tosAgreement })
    } else {
      this.props.setError(t('error.empty'))
    }
  }

  render () {
    const { status, loading, locale } = this.props
    const url = locale !== 'en' ? `${URL}/signup/${locale}` : `${URL}/signup`
    const confirmUrl = locale !== 'en' ? `${URL}/confirm/${locale}` : `${URL}/confirm`

    return (
      <Page title={t('form.signup')} description={DESCRIPTIONS.signup} path={url} locale={locale}>
        { status ? <Message>{t('signup.done')}<a href={confirmUrl}>{t('form.confirm')}</a>{t('signup.account')}</Message>
          : <SignupForm handleSubmit={this._submit} loading={loading} />
        }
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  locale: getLocale(state),
  status: getStatus(state)
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ setError, signup, setStatus }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
