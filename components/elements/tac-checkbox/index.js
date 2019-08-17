import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { t } from 'translations'

class TaCCheckboxField extends Component {
  render () {
    const { touched, error, warning, input } = this.props

    return (
      <div className="field">
        <div className="control">
          <div className="checkbox">
            <label htmlFor="checkbox">
              <input id="checkbox" {...input} type="checkbox" className="styled" />&nbsp;{ t('form.toc', { url: `${URL}/terms-and-conditions` }) }
            </label>
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

TaCCheckboxField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
}

export default TaCCheckboxField
