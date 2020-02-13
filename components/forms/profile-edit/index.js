import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Input from 'components/elements/forms/input'
import { Submit } from 'components/primitives'
import Form from 'components/elements/forms/form'
import SelectCountry from 'components/elements/forms/country'
import DeleteForm from 'components/forms/delete'
import { t } from 'translations'

const ProfileEditForm = ({ handleSubmit }) => (
  <Fragment>
    <Form onSubmit={handleSubmit}>
      <Input name="email" type="email" label={t('form.email')} icon="envelope" autoComplete="email" />
      <Input name="firstName" type="text" label={t('forn.name')} icon="file-signature" autoComplete="given-name" />
      <Input name="lastName" type="text" label={t('forn.lastName')} icon="file-signature" autoComplete="family-name" />
      <Input name="dob" type="date" label={t('forn.dob')} autoComplete="birthday" />
      <Input name="phone" label={t('forn.phone')} />
      <Input name="address" type="text" label={t('forn.address')} icon="address-card" autoComplete="shipping street-address" />
      <Input name="city" type="text" label={t('forn.city')} icon="address-card" autoComplete="shipping locality" />
      <Input name="zipCode" type="text" label={t('forn.zip')} icon="address-card" autoComplete="shipping postal-code" />
      <SelectCountry label={t('forn.country')} icon="globe" autoComplete="shipping country" />
      <Input name="password" type="password" label={t('forn.password')} icon="lock" autoComplete="off" />
      <Submit type="submit" inverse>{ t('form.submit') }</Submit>
    </Form>
    <hr />
    <DeleteForm />
  </Fragment>
)

ProfileEditForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default ProfileEditForm
