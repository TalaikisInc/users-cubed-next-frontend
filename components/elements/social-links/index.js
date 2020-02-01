import React from 'react'
import { FacebookCircle, Twitter, Instagram, LinkedinSquare } from 'styled-icons/boxicons-logos'

import { SOCIAL, MODULES } from 'config'

export default () => (
  MODULES.SOCIAL ? <div>
    <a href={SOCIAL.fb.url} className="social">
      <FacebookCircle size="25" title={SOCIAL.fb.title} />
    </a>
    <a href={SOCIAL.twitter.url} className="social">
      <Twitter size="25" title={SOCIAL.twitter.title} />
    </a>
    <a href={SOCIAL.instagram.url} className="social">
      <Instagram size="25" title={SOCIAL.instagram.title} />
    </a>
    <a href={SOCIAL.linkedin.url} className="social">
      <LinkedinSquare size="25" title={SOCIAL.linkedin.title} />
    </a>
  </div> : null
)
