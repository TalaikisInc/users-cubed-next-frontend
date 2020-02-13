import styled from 'styled-components'
import styledMap from 'styled-map'
import { darken } from 'polished'

import theme from 'theme'

const buttonColor = styledMap`
  primary: ${theme.colors.button.primary};
  warning: ${theme.colors.button.warning};
  success: ${theme.colors.button.success};
  alert: ${theme.colors.button.alert};
  hollow: ${theme.colors.primaryDark};
  dimmed: ${darken(0.05, theme.colors.button.primary)};
  default: ${theme.colors.button.primary};
`

const border = styledMap`
  primary: 1px solid  ${theme.colors.button.primary};
  warning: 1px solid  ${theme.colors.button.warning};
  success: 1px solid  ${theme.colors.button.success};
  alert: 1px solid  ${theme.colors.button.alert};
  hollow: 1px dotted  ${theme.colors.button.primary};
  dimmed: 1px solid  ${darken(0.05, theme.colors.button.primary)};
  default: 1px solid  ${theme.colors.button.primary};
`

const hoverColor = styledMap`
  dimmed: ${darken(0.05, theme.colors.button.primaryLight)};
  hollow: ${theme.colors.primary};
  default: ${theme.colors.button.primaryLight};
`

const shadowColor = styledMap`
  primary: ${theme.shadowColor.primary};
  warning: ${theme.shadowColor.warning};
  success: ${theme.shadowColor.success};
  alert: ${theme.shadowColor.alert};
  default: ${theme.shadowColor.primary};
`

const round = styledMap`
  square: .3em;
  default: 1.1em;
`

const text = styledMap`
  hollow: ${theme.colors.button.primary};
  default: ${theme.colors.button.text};
`

export default styled.a`
  background: ${buttonColor};
  border: ${border};
  box-shadow: 0 2px 4px ${shadowColor};
  padding: .5em 2.3em;
  display: inline-block;
  border-radius: ${round};
  color: ${text};
  text-decoration: none;
  font-weight: bold;
  margin: 1em;
  float: ${styledMap`
    right: right;
    left: left;
    default: right;
  `};
  font-size: ${styledMap`
    large: 32px;
    small: 8px;
    medium: 18px;
    default: 16px;
  `};

  &:hover {
    background-color: ${hoverColor};
  }
`
