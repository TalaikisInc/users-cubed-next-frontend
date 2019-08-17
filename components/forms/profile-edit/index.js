import React, { Component, Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import isemail from 'isemail'

import InputField from 'components/elements/input'
import Submit from 'components/elements/submit'
import Form from 'components/elements/form'
import SelectCountry from 'components/elements/country'
import DeleteForm from 'components/forms/delete'
import SelectDial from 'components/elements/dial'
import DateField from 'components/elements/date'
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

class ProfileEditForm extends Component {
  render () {
    const { handleSubmit } = this.props

    return (
      <Fragment>
        <Form onSubmit={handleSubmit}>
          <Field name="email" type="email" component={InputField} label={t('form.email')} icon="envelope" autoComplete="email" />
          <Field name="firstName" type="text" component={InputField} label={t('forn.name')} icon="file-signature" autoComplete="given-name" />
          <Field name="lastName" type="text" component={InputField} label={t('forn.lastName')} icon="file-signature" autoComplete="family-name" />
          <Field name="dob" component={DateField} label={t('forn.dob')} autoComplete="birthday" />
          <Field name="phone" component={SelectDial} label={t('forn.phone')} />
          <Field name="address" type="text" component={InputField} label={t('forn.address')} icon="address-card" autoComplete="shipping street-address" />
          <Field name="city" type="text" component={InputField} label={t('forn.city')} icon="address-card" autoComplete="shipping locality" />
          <Field name="zipCode" type="text" component={InputField} label={t('forn.zip')} icon="address-card" autoComplete="shipping postal-code" />
          <Field name="country" type="text" component={SelectCountry} label={t('forn.country')} icon="globe" autoComplete="shipping country" />
          <Field name="password" type="password" component={InputField} label={t('forn.password')} icon="lock" autoComplete="off" />
          <Submit label={t('forn.submit')} />
        </Form>
        <hr />
        <DeleteForm />
      </Fragment>
    )
  }
}

export default reduxForm({ form: 'profile-edit', validate, warn })(ProfileEditForm)
