import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Error from 'components/elements/forms/error'

class DateField extends Component {
  constructor (props) {
    super(props)
    this.state = { [this.props.input.name]: this.props.currentUser[this.props.input.name] }
    this.onChange = this.onChange.bind(this)
  }

  onChange (e) {
    e.preventDefault()
    this.setState({ [this.props.input.name]: e.target.value })
  }

  render () {
    const { name, label, autocomplete, currentUser, error } = this.props
    const disabled = typeof currentUser[name] === 'string' && currentUser[name].length > 0

    return (
      <div className="field">
        <label className="label" htmlFor="date">{ label }</label>
        <div className="control has-icons-left">
          { disabled ? <input id="date" className={classes} type="date" value={currentUser[name]} name={name} disabled />
            : <input id="date" className={classes} type="date" placeholder={label} autoComplete={autocomplete} name={name} onChange={this.onChange}/> }
          <span className="icon is-small is-left">
            <i className="fas fa-calendar-day"></i>
          </span>
        </div>
        <Error error={error} />
      </div>
    )
  }
}

DateField.propTypes = {
  label: PropTypes.string.isRequired,
  autocomplete: PropTypes.string
}

export default DateField
