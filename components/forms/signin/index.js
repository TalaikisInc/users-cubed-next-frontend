import React from 'react'
import { Field, reduxForm } from 'redux-form'
import isemail from 'isemail'
import { FacebookLoginButton, GoogleLoginButton, TwitterLoginButton } from 'react-social-login-buttons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import InputField from 'components/elements/input'
import Submit from 'components/elements/submit'
import Form  from 'components/elements/form'
import { socialSignin } from 'store/actions'
import { t } from 'translations'

const validate = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = t('error.emailRequired')
  } else if (!isemail.validate(values.email)) {
    errors.email = t('error.emailInvalid')
  }

  if (!values.password) {
    errors.password = t('error.passwordRequired')
  } else if (values.password.length < 12) {
    errors.password = t('error.passwordLen')
  }

  return errors
}

const warn = (values) => {
  const warnings = {}
  return warnings
}

let SigninForm = (props) => {
  const { handleSubmit, socialSignin } = props

  return (
    <Form onSubmit={handleSubmit}>
      <Field name="email" type="email" component={InputField} label={t('form.email')} icon="envelope" autoComplete="email" />
      <Field name="password" type="password" component={InputField} label={t('form.password')} icon="lock" autoComplete="current-password" />
      <Submit label={t('form.signin')} />
      <FacebookLoginButton onClick={() => socialSignin('facebook')}>
        <span>{ t('form.facebook') }</span>
      </FacebookLoginButton>
      <GoogleLoginButton onClick={() => socialSignin('google')}>
        <span>{ t('form.google') }</span>
      </GoogleLoginButton>
      <TwitterLoginButton onClick={() => socialSignin('twitter')}>
        <span>{ t('form.twitter') }</span>
      </TwitterLoginButton>
    </Form>
  )
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ socialSignin }, dispatch)
)

SigninForm = connect(null, mapDispatchToProps)(SigninForm)

export default reduxForm({ form: 'signin', validate, warn })(SigninForm)
