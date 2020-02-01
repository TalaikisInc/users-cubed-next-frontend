import React from 'react'
import { SemipolarSpinner } from 'react-epic-spinners'

import colors from 'theme/colors'

const Loader = () => (
  <div className="page-loader">
    <SemipolarSpinner
      size={150}
      color={colors.indigo[0]} />
  </div>
)

export default Loader
