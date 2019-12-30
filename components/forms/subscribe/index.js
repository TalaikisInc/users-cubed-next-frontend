import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import isEmail from 'isemail'
import jsonp from 'jsonp'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Message from 'components/elements/message'
import Submit from 'components/elements/submit'
import InputBasic from 'components/elements/input-basic'
import { setError, setStatus, setLoading } from 'store/actions'
import Par from 'components/elements/par'
import { t } from 'translations'
import { MAILCHIMP_URL } from 'config'
import { getStatus, getLoading } from 'store/selectors'
const getAjaxUrl = (url) => url.replace('/post?', '/post-json?')

const validate = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = t('error.emailRequired')
  } else if (!isEmail.validate(values.email)) {
    errors.email = t('error.emailInvalid')
  }

  return errors
}

const warn = (values) => {
  const warnings = {}
  return warnings
}

class Subscribe extends Component {
  constructor (props) {
    super(props)
    this._submit = this._submit.bind(this)
    this.actionURL = MAILCHIMP_URL
  }

  _submit (e) {
    e.preventDefault()
    const { target } = e
    const email = target[0].value
    if (!isEmail.validate(email)) {
      this.props.setError('Email is invalid.')
      return
    }

    this.props.setLoading(true)
    const url = `${getAjaxUrl(this.actionURL)}&EMAIL=${encodeURIComponent(email)}`
    jsonp(url, { param: 'c' }, (err, data) => {
      if (err) {
        this.props.setError(err)
      } else if (data.result !== 'success') {
        this.props.setError(data.msg)
      } else {
        this.props.setStatus(data.msg)
      }
    })
    this.props.setLoading(false)
  }

  render () {
    const { status, loading } = this.props

    return (
      <div className="light-layout">
        <div className="container">
          <section className="small-section border-section border-top-0">
            <div className="row">
              <div className="col-lg-6">
                <div className="subscribe">
                  <div>
                    <h4>Lorem ipsum</h4>
                    <Par>Lorem ipsum </Par>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                { status ? <Message>{ status }</Message>
                  : <form className="form-inline subscribe-form" onSubmit={this._submit}>
                    <Field name="email" type="email" component={InputBasic} autoComplete="email" placeholder="Enter your email address" />
                    <Submit label="Subscribe" loading={loading} />
                  </form>
                }
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  status: getStatus(state),
  loading: getLoading(state)
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ setStatus, setError, setLoading }, dispatch)
)

const SubscribeOut = connect(mapStateToProps, mapDispatchToProps)(Subscribe)

export default reduxForm({ form: 'subscribe', validate, warn })(SubscribeOut)
