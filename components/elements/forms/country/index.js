import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { countries } from 'utils/objs'
import Error from 'components/elements/forms/error'

class SelectCountry extends Component {
  constructor (props) {
    super(props)
    this.state = { country: '' }
    this.onChange = this.onChange.bind(this)
  }

  onChange (e) {
    e.preventDefault()
    this.setState({ country: e.target.value })
  }

  render () {
    const { name, label, icon, currentUser, error } = this.props
    const classes = touched && error ? 'form-cintrol danger' : 'form-cintrol'
    const iconClass = `fas fa-${icon}`
    currentUser[name] = typeof currentUser[name] !== 'boolean' ? currentUser[name] : ''

    return (
      <div className="form-group">
        <label className="label" htmlFor="country"> {label }</label>
        <div className="control has-icons-left">
          <div className={classes}>
            <select name={name} id="country" value={this.state.country || currentUser.country} onBlur={this.onChange} onChange={this.onChange}>
              { countries.map((c, i) => {
                return <option value={c.key} key={i}>{c.country}</option>
              })
              }
            </select>
          </div>
          <span className="icon is-small is-left">
            <i className={iconClass}></i>
          </span>
        </div>
        <Error error={error} />
      </div>
    )
  }
}

SelectCountry.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string
}

export default SelectCountry
