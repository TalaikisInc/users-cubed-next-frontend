import React from 'react'
import PropTypes from 'prop-types'

import Input from 'components/elements/forms/input'
import { Submit } from 'components/primitives'
import Form from 'components/elements/forms/form'
import { t } from 'translations'

const ContactForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Input name="name" type="text" label={t('form.name')} icon="user" autoComplete="name" />
    <Input name="email" type="email" label={t('form.email')} icon="envelope" autoComplete="email" />
    <Input name="message" type="text" label={t('form.msg')} icon="envelope" autoComplete="off" />
    <Submit type="submit" inverse>{ t('form.send') }</Submit>
  </Form>
)

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default ContactForm
