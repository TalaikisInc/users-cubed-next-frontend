import React, { Component } from 'react'
import isemail from 'isemail'
import { connect } from 'react-redux'
import dynamic from 'next/dynamic'
import { bindActionCreators } from 'redux'

import Loader from 'components/elements/loader'
import ContactForm from 'components/forms/contact'
import { DESCRIPTIONS, URL } from 'config'
import { t } from 'translations'
import { contact, setError, setStatus } from 'store/actions'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import Message from 'components/elements/message'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

class XSSReport extends Component {
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
      this.props.setError(t('error.empty'))
    }
  }

  render () {
    const { status, locale } = this.props
    const url = locale !== 'en' ? `${URL}/xss-report/${locale}` : `${URL}/xss-report`

    return (
      <Page title={t('conatct.xss')} description={DESCRIPTIONS.contactUs} path={url} locale={locale}>
        { status ? <Message>{t('contact.done')}</Message>
          : <ContactForm handleSubmit={this._submit} />
        }
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  locale: state.utils.locale,
  status: state.utils.status
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ setError, contact, setStatus }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(XSSReport)
