import React from 'react'
import PropTypes from 'prop-types'

import { Text } from 'components/primitives'

const Message = ({ children }) => {
  if (children) {
    return (
      <Text medium>{ children }</Text>
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
