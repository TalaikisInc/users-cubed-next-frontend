import { darken, lighten } from 'polished'

import colors from 'theme/colors'
const scheme = 'indigo'

export default {
  colors: {
    primary: colors[scheme][0],
    primaryLight: colors[scheme][1],
    primaryDark: colors[scheme][2],
    secondary: '#fff',
    secondaryLight: '',
    secondaryDark: '',
    black: colors.black,
    white: colors.white,
    'near-black': '#111',
    'dark-gray': '#333',
    'mid-gray': '#555',
    gray: ' #777',
    silver: '#999',
    'light-silver': '#aaa',
    'moon-gray': '#ccc',
    'light-gray': '#eee',
    'near-white': '#f4f4f4',
    transparent: 'transparent',
    highlight: colors.red[0],
    button: {
      primary: darken(0.1, '#fff'),
      inverseLightHover: lighten(0.1, colors[scheme][1]),
      primaryLight: '#fff',
      warning: '',
      success: '',
      alert: '',
      text: colors[scheme][0]
    }
  },
  header: {
    size: 9
  },
  footer: {
    size: 40
  },
  shadowColor: {
    primary: 'rgba(0, 0, 255, 0.3)',
    warning: 'rgba(0, 0, 0, 0.3)',
    success: 'rgba(0, 255, 0, 0.3)',
    alert: 'rgba(255, 0, 0, 0.3)'
  }
}

export const fonts = {
  heading: '',
  text: ''
}
