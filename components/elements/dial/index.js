import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import dialCodes from 'utils/dialCodes'
import { getCurrentUser } from 'store/selectors'

class SelectDial extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dialCode: this.props.currentUser.dialCode,
      phone: this.props.currentUser.phone
    }
    this._onChange = this._onChange.bind(this)
    this._onDial = this._onDial.bind(this)
  }

  _onDial (e) {
    e.preventDefault()
    this.setState({ dialCode: e.target.value })
  }

  _onChange (e) {
    e.preventDefault()
    this.setState({ phone: e.target.value })
  }

  render () {
    dialCodes.sort((a, b) => {
      return a.dial - b.dial
    })
    const { input, label, meta, currentUser } = this.props
    const { touched, error, warning } = meta
    const classes = touched && error ? 'form-cintrol is-danger' : 'form-cintrol'
    const selectClasses = touched && error ? 'form-cintrol is-danger' : 'form-cintrol'
    currentUser[input.name] = typeof currentUser[input.name] !== 'boolean' ? currentUser[input.name] : ''

    return (
      <div className="form-group">
        { /* eslint-disable-next-line */ }
        <label className="label" htmlFor="phone">{label }</label>
        <div className="control">
          <div className="columns is-gapless">
            <div className="column is-one-quarter">
              <div className={selectClasses}>
                <select name="dialCode" className={selectClasses} value={this.state.dialCode || currentUser.dialCode} onBlur={this.onDial} onChange={this.onDial} autoComplete="tel-country-code">
                  { dialCodes.map((dial, i) => {
                    return <option value={dial.dial} key={i}>{dial.dial}</option>
                  })
                  }
                </select>
              </div>
            </div>
            <div className="column is-three-quarters">
              <div className="control">
                <input id="phone" className={classes} type="tel" placeholder={label} autoComplete="tel-national" name={input.name} onBlur={this.onChange} value={this.state.phone || currentUser.phone} />
              </div>
            </div>
          </div>
        </div>
        { touched && (
          (error && <p className="help is-danger">{ error }</p>) ||
          (warning && <p className="help is-warning">{ warning }</p>)
        )}
      </div>
    )
  }
}

SelectDial.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string
}

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state)
})

export default connect(mapStateToProps, null)(SelectDial)
