import React from 'react'
import { FacebookLoginButton, GoogleLoginButton, TwitterLoginButton } from 'react-social-login-buttons'
import PropTypes from 'prop-types'

import Input from 'components/elements/forms/input'
import { Submit } from 'components/primitives'
import Form from 'components/elements/forms/form'
import { t } from 'translations'
import useStore from 'store'

const SignInForm = ({ handleSubmit }) => {
  const [globalState, globalActions] = useStore()
  return (
    <Form onSubmit={handleSubmit}>
      <Input name="email" type="email" label={t('form.email')} icon="envelope" autoComplete="email" />
      <Input name="password" type="password" label={t('form.password')} icon="lock" autoComplete="current-password" />
      <Submit type="submit" inverse>{ t('form.signin') }</Submit>
      <FacebookLoginButton onClick={() => globalActions.socialSignin('facebook')}>
        <span>{ t('form.facebook') }</span>
      </FacebookLoginButton>
      <GoogleLoginButton onClick={() => globalActions.socialSignin('google')}>
        <span>{ t('form.google') }</span>
      </GoogleLoginButton>
      <TwitterLoginButton onClick={() => globalActions.socialSignin('twitter')}>
        <span>{ t('form.twitter') }</span>
      </TwitterLoginButton>
    </Form>
  )
}

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default SignInForm
