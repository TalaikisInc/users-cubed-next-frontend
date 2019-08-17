import React from 'react'
import { Field, reduxForm } from 'redux-form'
import isemail from 'isemail'

import InputField from 'components/elements/input'
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

  return errors
}

const warn = (values) => {
  const warnings = {}
  return warnings
}

const ReferForm = (props) => {
  const { handleSubmit } = props

  return (
    <Form onSubmit={handleSubmit}>
      <Field name="email" type="email" component={InputField} label={t('form.email')} icon="envelope" autoComplete="email" />
      <Submit label={t('form.send')} />
    </Form>
  )
}

export default reduxForm({ form: 'contact', validate, warn })(ReferForm)
