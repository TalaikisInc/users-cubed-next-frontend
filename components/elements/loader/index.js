import React from 'react'
import { ClipLoader } from 'react-spinners'

export default () => (
  <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
    <ClipLoader
      sizeUnit={'px'}
      size={50}
      color={'#123abc'}
      loading={true} />
  </div>
)
