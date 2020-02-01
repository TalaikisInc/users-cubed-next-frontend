import styled from 'styled-components'
import styledMap from 'styled-map'
import { lighten } from 'polished'

import theme from 'theme'

const shadowColor = styledMap`
  primary: ${theme.shadowColor.primary};
  warning: ${theme.shadowColor.warning};
  success: ${theme.shadowColor.success};
  alert: ${theme.shadowColor.alert};
  default: ${theme.shadowColor.primary};
`

const buttonColor = styledMap`
  inverse: ${theme.colors.primary};
  danger: red;
  default: ${theme.colors.button.primary};
`

const textColors = styledMap`
  inverse: #fff;
  danger: red;
  default: ${theme.colors.primary};
`

const hovers = styledMap`
  inverse: ${theme.colors.button.inverseLightHover};
  danger: ${lighten(0.1, '#ff0000')};
  default: ${theme.colors.button.primaryLight};
`

const floats = styledMap`
  right: right;
  left: left;
  center: center;
  default: right;
`

export default styled.button`
  background: ${buttonColor};
  border: 1px solid ${buttonColor};
  box-shadow: 0 2px 4px ${shadowColor};
  padding: .5em 2.3em;
  border-radius: 1.1em;
  color: ${textColors};
  text-decoration: none;
  font-weight: bold;
  margin: 1em;
  float: ${styledMap`
    right: right;
    left: left;
    center: center;
    default: center;
  `};
  font-size: ${styledMap`
    large: 1.5em;
    small: 1em;
    medium: 1.2em;
    default: 1em;
  `};
  float: ${floats};

  &:hover {
    background-color: ${hovers};
  }
`
