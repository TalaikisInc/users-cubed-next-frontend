import React, { Component } from 'react'
import { connect } from 'react-redux'
import { validate } from 'isemail'
import dynamic from 'next/dynamic'
import { bindActionCreators } from 'redux'

import Loader from 'components/elements/loader'
import { isServer } from 'utils/utils'
import { t } from 'translations'
import { editUser, setError, setStatus } from 'store/actions'
import ProfileEditForm from 'components/forms/profile-edit'
import { errorDispatcher, localeDispatcher } from 'store/helpers'
import Message from 'components/elements/message'
const Page = dynamic(() => import('components/layout/page'), { loading: () => <Loader /> })

class ProfileEdit extends Component {
  constructor (props) {
    super(props)
    this._submit = this._submit.bind(this)
  }

  static async getInitialProps ({ err, req, res, pathname, reduxStore, query }) {
    errorDispatcher(reduxStore, err)
    localeDispatcher(reduxStore, query)
    if (!isServer) {
      reduxStore.dispatch(setStatus(false))
    }
    return { }
  }

  _submit (e) {
    e.preventDefault()
    const { target } = e
    const email = target[0].value
    const firstName = target[1].value
    const lastName = target[2].value
    const dob = target[3].value
    const dialCode = target[4].value
    const phone = target[5].value
    const address = target[6].value
    const city = target[7].value
    const zipCode = target[8].value
    const country = target[9].value
    const password = target[10].value
    if (validate(email)) {
      this.props.editUser({ email, firstName, lastName, dob, phone, address, city, country, password, dialCode, zipCode })
    } else {
      this.props.setError(t('error.empty'))
    }
  }

  render () {
    const { currentUser, editStatus, locale } = this.props
    const url = locale !== 'en' ? `${URL}/profile-edit/${locale}` : `${URL}/profile-edit`

    return (
      <Page title={t('profile.edit')} path={url} noCrawl locale={locale}>
        { editStatus ? <Message>{t('profile.confirmed')}.</Message> : null }
        <ProfileEditForm handleSubmit={this._submit} currentUser={currentUser}/>
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  locale: state.utils.locale,
  status: state.utils.status,
  currentUser: state.auth.currentUser
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ setError, setStatus, editUser }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit)
