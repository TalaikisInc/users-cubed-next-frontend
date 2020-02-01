import React from 'react'
import PropTypes from 'prop-types'

import Input from 'components/elements/forms/input'
import { Submit } from 'components/primitives'
import Form from 'components/elements/forms/form'
import { t } from 'translations'

const ReferForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Input name="email" type="email" label={t('form.email')} icon="envelope" autoComplete="off" />
    <Submit type="submit" inverse>{ t('form.send') }</Submit>
  </Form>
)

ReferForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default ReferForm
