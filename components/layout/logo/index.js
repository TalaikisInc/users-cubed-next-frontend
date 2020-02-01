import React from 'react'

import { LOGO_ALT, FRONTEND_URL } from 'config'

const Logo = () => (
  <a href={FRONTEND_URL}>
    <img src="/logo.svg" className="logo" alt={LOGO_ALT} height="60px" width="60px" />
  </a>
)

export default Logo
