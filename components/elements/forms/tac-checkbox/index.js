import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'pretty-checkbox-react'

import { t } from 'translations'
import { FRONTEND_URL } from 'config'
import Error from 'components/elements/forms/error'
import { Text } from 'components/primitives'

const TaCCheckboxField = ({ error, ...props }) => {
  return (
    <div className="center">
      <Checkbox
        {...props}
        animation="smooth"
        className="checkbox"
        shape="curve" />
      <Text className="checkbox">{ t('form.toc') } <a href={`${FRONTEND_URL}/terms-and-conditions`}>
        { t('tac') }
      </a>
      </Text>
      <Error error={error} />
    </div>
  )
}

TaCCheckboxField.propTypes = {
  error: PropTypes.string
}

export default TaCCheckboxField
