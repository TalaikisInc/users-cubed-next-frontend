import React from 'react'

export default ({ input, placeholder, type, name, meta: { touched, error, warning } }) => (
  <div className="form-group mx-sm-3">
    <input type={type} className="form-control" placeholder={placeholder} {...input} />
    { touched && (
      (error && <p className="danger"> { error }</p>) ||
      (warning && <p className="warning"> { warning }</p>)
    )}
  </div>
)
