import React from 'react'
import PropTypes from 'prop-types'

import { Text } from 'components/primitives'

const Error = ({ error }) => (
  error ? <Text className="danger">{ error }</Text> : null
)

Error.propTypes = {
  error: PropTypes.string
}

export default Error
