import React from 'react'
import Skeleton from 'react-loading-skeleton'

import { skeleton } from 'theme'

const Sk = ({ lines, duration, w, h }) => (
  <SkeletonTheme color={skeleton.color} highlightColor={skeleton.highlight}>
    <Skeleton
      count={lines}
      width={w}
      height={h}
      duration={duration} />
  </SkeletonTheme>
)

export default Sk
