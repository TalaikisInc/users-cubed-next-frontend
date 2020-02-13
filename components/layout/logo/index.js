import React from 'react'

import { LOGO_ALT, FRONTEND_URL } from 'config'
import logo from 'public/logo.svg'
import LogoComponent from 'components/primitives/logo'

const Logo = () => (
  <a href={FRONTEND_URL}>
    <LogoComponent src={logo} alt={LOGO_ALT} height="60px" width="60px" />
  </a>
)

export default Logo
