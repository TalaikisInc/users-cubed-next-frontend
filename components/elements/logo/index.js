import React from 'react'

import { LOGO_ALT, URL } from 'config'
import logo from 'public/logo.svg'

export default () => (
  <div className="brand-logo">
    <a href={URL}>
      <img src={logo} className="img-fluid" alt={LOGO_ALT} height="68" width="68" />
    </a>
  </div>
)
