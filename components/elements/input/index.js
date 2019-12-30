import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getCurrentUser } from 'store/selectors'

class InputField extends Component {
  constructor (props) {
    super(props)
    this.state = {
      [this.props.input.name]: ''
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange (e) {
    e.preventDefault()
    this.setState({ [this.props.input.name]: e.target.value })
  }

  render () {
    const { input, label, type, icon, autocomplete, currentUser, meta: { touched, error, warning } } = this.props
    // const iconClass = `fa fa-${icon}`
    const classes = touched && error ? 'form-control danger' : 'form-control'
    // currentUser[input.name] = typeof currentUser[input.name] !== 'boolean' ? currentUser[input.name] : ''

    return (
      <div className="form-group">
        { /* eslint-disable-next-line */ }
        <label className="label" id={input.name}>{ label }</label>
        <input
          id={input.name}
          className={classes}
          name={input.name}
          onChange={this.onChange}
          type={type}
          placeholder={label}
          autoComplete={autocomplete} />
        { touched && (
          (error && <p className="danger">{ error }</p>) ||
          (warning && <p className="warning">{ warning }</p>)
        )}
      </div>
    )
  }
}

InputField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string,
  autocomplete: PropTypes.string
}

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state)
})

export default connect(mapStateToProps, null)(InputField)
