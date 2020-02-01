import React from 'react'
import PropTypes from 'prop-types'

import Input from 'components/elements/forms/input'
import { Submit } from 'components/primitives'
import Form from 'components/elements/forms/form'
import { t } from 'translations'

const ReferUseForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Input name="token" type="text" label={t('form.refToken')} icon="envelope" autoComplete="off" />
    <Submit type="submit" inverse>{ t('form.send') }</Submit>
  </Form>
)

ReferUseForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default ReferUseForm
