import React, { Component } from 'react'
import { connect } from 'react-redux'
import { validate } from 'isemail'
import dynamic from 'next/dynamic'
import { bindActionCreators } from 'redux'

import Loader from 'components/elements/loader'
import ReferForm from 'components/forms/refer'
import { DESCRIPTIONS, URL } from 'config'
import { refer, setError } from 'store/actions'
import { t } from 'translations'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import Message from 'components/elements/message'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

class Refer extends Component {
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
    const email = target[0].value
    if (validate(email)) {
      this.props.refer({ to: email })
    } else {
      this.props.setError(t('error.empty'))
    }
  }

  render () {
    const { status, locale } = this.props
    const url = locale !== 'en' ? `${URL}/refer/${locale}` : `${URL}/refer`

    return (
      <Page title={t('refer.title')} description={DESCRIPTIONS.refer} path={url} locale={locale}>
        { status ? <Message>{t('refer.complete')}</Message> : null }
          <ReferForm handleSubmit={this._submit} />
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  locale: state.utils.locale,
  status: state.utils.status
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ setError, refer, setStatus }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Refer)
