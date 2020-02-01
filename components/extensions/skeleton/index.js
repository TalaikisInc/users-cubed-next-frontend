import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import PropTypes from 'prop-types'

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

Sk.propTypes = {
  lines: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired
}

export default Sk
