import React from 'react'
import { Field, reduxForm } from 'redux-form'
import isemail from 'isemail'

import InputField from 'components/elements/input'
import TaCCheckboxField from 'components/elements/tac-checkbox'
import Submit from 'components/elements/submit'
import Form from 'components/elements/form'
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

  if (!values.repeatPassword) {
    errors.repeatPassword = t('error.passwordRepeat')
  } else if (values.password !== values.repeatPassword) {
    errors.repeatPassword = t('error.paswordMatch')
  }

  if (!values.tosAgreement) {
    errors.tosAgreement = t('error.tosAccept')
  }

  return errors
}

const warn = (values) => {
  const warnings = {}
  return warnings
}

const SignupForm = (props) => {
  const { handleSubmit } = props

  return (
    <Form onSubmit={handleSubmit}>
      <Field name="email" type="email" component={InputField} label={t('form.email')} icon="envelope" autoComplete="email" />
      <Field name="password" type="password" component={InputField} label={t('form.password')} icon="lock" autoComplete="new-password" />
      <Field name="repeatPassword" type="password" component={InputField} label={t('form.passwordRepeat')} icon="lock" autoComplete="off" />
      <Field name="tosAgreement" component={TaCCheckboxField} />
      <Submit label={t('form.signup')} />
    </Form>
  )
}

export default reduxForm({ form: 'signup', validate, warn })(SignupForm)
