import React from 'react'
import PropTypes from 'prop-types'

import Input from 'components/elements/forms/input'
import Submit from 'components/primitives/submit'
import Form from 'components/elements/forms/form'
import { t } from 'translations'

const ConfirmForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Input name="token" type="text" label={t('form.token')} icon="check" autoComplete="off" />
    <Submit type="submit" inverse>{ t('form.confirm') }</Submit>
  </Form>
)

ConfirmForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default ConfirmForm
