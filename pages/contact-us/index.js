import React, { Component } from 'react'
import isemail from 'isemail'
import { connect } from 'react-redux'
import dynamic from 'next/dynamic'
import { bindActionCreators } from 'redux'
import { toast } from 'react-toastify'

import Loader from 'components/elements/loader'
import ContactForm from 'components/forms/contact'
import { DESCRIPTIONS, URL } from 'config'
import { t } from 'translations'
import { contact, setError, setStatus } from 'store/actions'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import Message from 'components/elements/message'
import { getLocale, getStatus } from 'store/selectors'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

class ContactUs extends Component {
  constructor (props) {
    super(props)
    this._submit = this._submit.bind(this)
  }

  static async getInitialProps ({ err, req, res, pathname, reduxStore, query }) {
    errorDispatcher(reduxStore, err)
    localeDispatcher(reduxStore, query)
    return { }
  }

  _submit (e) {
    e.preventDefault()
    const { target } = e
    const name = target[0].value
    const email = target[1].value
    const message = target[2].value
    if (isemail.validate(email) && name && name.length > 3 && message && message.length > 10) {
      this.props.contact({ name, email, message })
    } else {
      toast.error(t('error.empty'))
      this.props.setError(t('error.empty'))
    }
  }

  render () {
    const { status, locale } = this.props
    const url = locale !== 'en' ? `${URL}/contact-us/${locale}` : `${URL}/contact-us`

    return (
      <Page title={t('contact.title')} description={DESCRIPTIONS.contactUs} path={url} locale={locale}>
        <div className="theme-card">
          { status ? <Message>{t('contact.done')}</Message>
            : <ContactForm handleSubmit={this._submit} />
          }
        </div>
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  status: getStatus(state),
  locale: getLocale(state)
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ setError, contact, setStatus }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs)
