import React from 'react'
import PropTypes from 'prop-types'

import Input from 'components/elements/forms/input'
import TaCCheckboxField from 'components/elements/forms/tac-checkbox'
import { Submit } from 'components/primitives'
import Form from 'components/elements/forms/form'
import { t } from 'translations'

const SignupForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Input name="email" type="email" label={t('form.email')} icon="envelope" autoComplete="email" />
    <Input name="password" type="password" label={t('form.password')} icon="lock" autoComplete="new-password" />
    <Input name="repeatPassword" type="password" label={t('form.passwordRepeat')} icon="lock" autoComplete="off" />
    <TaCCheckboxField name="tosAgreement" />
    <Submit type="submit" inverse>{ t('form.signup') }</Submit>
  </Form>
)

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default SignupForm
