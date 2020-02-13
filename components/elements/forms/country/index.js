import React from 'react'
import PropTypes from 'prop-types'

import { countries } from 'utils/objs'
import Error from 'components/elements/forms/error'
import useStore from 'store'
import Select from 'components/primitives/select'
import Label from 'components/primitives/label'

const SelectCountry = ({ name, label, icon, currentUser }) => {
  const [globalState, globalActions] = useStore()
  const _onChange = (e) => {
    e.preventDefault()
    globalActions.setState({ country: e.target.value })
  }

  const classes = globalState.error ? 'danger' : ''
  const disabled = typeof globalState.currentUser[name] === 'string'

  return (
    <div>
      <Label id={name}>{ label }</Label>
      { !disabled ?
        <Select
          className={classes}
          name="country"
          id="country"
          value={globalState.state.country}
          onBlur={_onChange}
          onChange={_onChange}>
          { countries.map((c, i) => {
            return <option value={c.key} key={i}>{c.country}</option>
          })
          }
        </Select>
        :
        <Select
          className={classes}
          name="country"
          id="country"
          value={globalState.currentUser.country}
          onBlur={_onChange}
          disabled>
          { countries.map((c, i) => {
            return <option value={c.key} key={i}>{c.country}</option>
          })
          }
        </Select>
      }
      <Error error={globalState.error} />
    </div>
  )
}

SelectCountry.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string
}

export default SelectCountry
