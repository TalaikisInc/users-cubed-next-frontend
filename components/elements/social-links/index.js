import React from 'react'

import { SOCIAL } from 'config'

export default () => (
  <div className="footer-social">
    <ul>
      <li><a href={SOCIAL.fb.url}><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
      <li><a href={SOCIAL.google.url}><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
      <li><a href={SOCIAL.twitter.url}><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
      <li><a href={SOCIAL.instagram.url}><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
    </ul>
  </div>
)
