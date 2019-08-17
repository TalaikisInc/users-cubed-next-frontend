import React from 'react'
import { Field, reduxForm } from 'redux-form'

import InputField from 'components/elements/input'
import Submit from 'components/elements/submit'
import Form from 'components/elements/form'
import { t } from 'translations'

const validate = (values) => {
  const errors = {}
  if (!values.token) {
    errors.token = t('error.confirmRequired')
  } else if (values.token.length !== 64) {
    errors.token = t('error.confirmInvalid')
  }

  return errors
}

const warn = (values) => {
  const warnings = {}
  return warnings
}

const ConfirmForm = (props) => {
  const { handleSubmit } = props

  return (
    <Form onSubmit={handleSubmit}>
      <Field name="token" type="text" component={InputField} label={t('form.token')} icon="check" autoComplete="off" />
      <Submit label={t('form.confirm')} />
    </Form>
  )
}

export default reduxForm({ form: 'confirm', validate, warn })(ConfirmForm)
