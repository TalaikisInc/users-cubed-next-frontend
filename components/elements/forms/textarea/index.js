import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

import { Input, Label } from 'components/primitives'
import Error from 'components/elements/forms/error'
import useStore from 'store'

const Textarea = ({ name, label, icon, autocomplete }) => {
  const [globalState, globalActions] = useStore()
  const _onChange = (e) => {
    e.preventDefault()
    globalActions.setState({ [name]: e.target.value })
  }

  const classes = globalState.error ? 'danger' : undefined

  return (
    <div className="input">
      <Label id={name}>{ label }</Label>
      <Input
        id={name}
        className={classes}
        name={name}
        onChange={_onChange}
        type="text"
        placeholder={label}
        autoComplete={autocomplete} />
      <Error error={globalState.error} />
    </div>
  )
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  autocomplete: PropTypes.string
}

export default Textarea
