import React from 'react'
import PropTypes from 'prop-types'

const TextareaField = ({ input, label, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <div className="label">{ label }</div>
    <div className="control">
      <input type="text" className="form-control" placeholder={label} {...input} />
    </div>
    { touched && (
      (error && <p className="danger">{ error }</p>) ||
      (warning && <p className="warning">{ warning }</p>)
    )}
  </div>
)

TextareaField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
}

export default TextareaField
