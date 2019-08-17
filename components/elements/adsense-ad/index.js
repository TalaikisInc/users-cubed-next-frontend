import React from 'react'
import AdSense from 'react-adsense'

import { GOOGLE_PUB } from 'config'

export default ({ slot, kind }) => (
  <div className="p-5 text-center">
    <AdSense.Google
      client={GOOGLE_PUB}
      slot={slot}
      style={{ display: 'block', width: 300, height: 600 }}
      format=''
      responsive='true' />
  </div>
)
