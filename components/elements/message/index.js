import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ children }) => {
  if (children) {
    return (
      <h3>{ children }</h3>
    )
  }
  return null
}

Message.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]).isRequired
}

export default Message
