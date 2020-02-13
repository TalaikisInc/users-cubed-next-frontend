import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

import { Input, Label } from 'components/primitives'
import Error from 'components/elements/forms/error'
import useStore from 'store'

const InputField = ({ name, label, type, icon, autocomplete }) => {
  const [globalState, globalActions] = useStore()
  const _onChange = (e) => {
    e.preventDefault()
    globalActions.setState({ [name]: e.target.value })
  }

  const classes = globalState.error ? 'danger' : undefined
  const disabled = typeof globalState.currentUser[name] === 'string'

  return (
    <div>
      <Label id={name}>{ label }</Label>
      { disabled ?
        <Input
          id={name}
          className={classes}
          name={name}
          onChange={_onChange}
          type={type}
          placeholder={label}
          value={globalState.currentUser[name]}
          disabled
          autoComplete={autocomplete} />
        : <Input
          id={name}
          className={classes}
          name={name}
          onChange={_onChange}
          type={type}
          placeholder={label}
          autoComplete={autocomplete} />
      }
      <Error error={globalState.error} />
    </div>
  )
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string,
  autocomplete: PropTypes.string
}

export default InputField
