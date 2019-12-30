import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { bindActionCreators } from 'redux'

import { signoutUser, setError } from 'store/actions'
import { getCurrentUser } from 'store/selectors'

class Signout extends Component {
  constructor (props) {
    super(props)
    this._signout = this._signout.bind(this)
  }

  _signout () {
    if (this.props.currentUser && this.props.currentUser.email) {
      this.props.signoutUser()
      Router.push('/signed-out')
    } else {
      this.props.setError('User is already signed out.')
    }
  }

  render () {
    return (
      <li>
        <div onClick={this._signout} onKeyPress={this._signout} role="button" tabIndex="0">
          <i className="sign-out-alt" /> Sign Out
        </div>
      </li>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state)
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ signoutUser, setError }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Signout)
