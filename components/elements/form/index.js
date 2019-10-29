import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ children, onSubmit }) => (
  <form className="theme-form" onSubmit={onSubmit}>
    { children }
  </form>
)

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default Form