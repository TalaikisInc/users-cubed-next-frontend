import React from 'react'
import PropTypes from 'prop-types'

const Submit = ({ label }) => (
  <button type="submit" className="btn btn-solid">{ label }</button>
)

Submit.propTypes = {
  label: PropTypes.string.isRequired
}

export default Submit
