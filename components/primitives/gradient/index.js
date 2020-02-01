import React from 'react'
import { Gradient } from 'react-gradient'

const gradients = [
  ['#bd19d6', '#ea7d10'],
  ['#ff2121', '#25c668']
]

export default ({ children }) => (
  <Gradient
    gradients={gradients}
    property="background"
    duration={3000}
    angle="45deg">
    { children }
  </Gradient>
)
