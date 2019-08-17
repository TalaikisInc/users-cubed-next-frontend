import React from 'react'
import { Field, reduxForm } from 'redux-form'
import isemail from 'isemail'

import InputField from 'components/elements/input'
import TextareaField from 'components/elements/textarea'
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

  if (!values.name) {
    errors.name = t('error.nameRequired')
  } else if (values.name.length < 3) {
    errors.name = t('error.nameInvalid')
  }

  if (!values.message) {
    errors.message = t('error.msgRequired')
  } else if (values.message.length < 50) {
    errors.message = t('error.msgInvalid')
  }

  return errors
}

const warn = (values) => {
  const warnings = {}
  return warnings
}

const ContactForm = (props) => {
  const { handleSubmit } = props

  return (
    <Form onSubmit={handleSubmit}>
      <Field name="name" type="text" component={InputField} label={t('form.name')} icon="user" autoComplete="name" />
      <Field name="email" type="email" component={InputField} label={t('form.email')} icon="envelope" autoComplete="email" />
      <Field name="message" component={TextareaField} label={t('form.msg')} autoComplete="off" />
      <Submit label={t('form.send')} />
    </Form>
  )
}

export default reduxForm({ form: 'contact', validate, warn })(ContactForm)
