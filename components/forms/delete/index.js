import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Submit from 'components/elements/submit'
import Form from 'components/elements/form'
import { deleteUser } from 'store/actions'
import Par from 'components/elements/par'
import { t } from 'translations'

class DeleteForm extends Component {
  constructor (props) {
    super(props)
    this.state = { modal: false }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState({ modal: false })
    this.props.deleteUser()
  }

  close () {
    this.setState({ modal: false })
  }

  open (e) {
    e.preventDefault()
    this.setState({ modal: true })
  }

  render () {
    const { modal } = this.state
    const _class = modal ? 'modal is-active' : 'modal'

    return (
      <Fragment>
        <Form onSubmit={this.open}>
          <Submit label="Delete account" color='danger' />
        </Form>
        <div className="container">
          <div className={_class}>
            <div className="modal-background"></div>
            <div className="modal-content has-background-white has-text-centered">
              <div className="box">
                <h4 className="title is-4">{ t('delete.question') }</h4>
                <Par>{ t('delete.note') }</Par>
                <button className="button is-danger is-rounded" onClick={this.handleSubmit}>
                  { t('delete.confirm') }
                </button>
              </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={this.close} />
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ deleteUser }, dispatch)
)

export default connect(null, mapDispatchToProps)(DeleteForm)
