import React, { Component } from 'react'
import { connect } from 'react-redux'
import { validate } from 'isemail'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import { bindActionCreators } from 'redux'

import Loader from 'components/elements/loader'
import SigninForm from 'components/forms/signin'
import { DESCRIPTIONS, URL } from 'config'
import { signin, setError } from 'store/actions'
import { t } from 'translations'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

class Signin extends Component {
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
    if (validate(email) && password && password.length > 11) {
      this.props.signin({ email, password })
    } else {
      this.props.setError(t('error.empty'))
    }
  }

  render () {
    const { isAuthenticated, locale } = this.props
    if (isAuthenticated) {
      if (locale !== 'en') {
        Router.push(`${URL}/dashboard/${locale}`)
      } else {
        Router.push(`${URL}/dashboard`)
      }
    }
    const url = locale !== 'en' ? `${URL}/signin/${locale}` : `${URL}/signin`

    return (
      <Page title={t('form.signin')} description={DESCRIPTIONS.signin} path={url} locale={locale}>
        <SigninForm handleSubmit={this._submit} />
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  locale: state.utils.locale,
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ setError, signin }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
