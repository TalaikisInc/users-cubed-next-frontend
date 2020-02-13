import styled from 'styled-components'
import styledMap from 'styled-map'

import theme from 'theme'

const borderColors = styledMap`
  error: red;
  default: ${theme.colors.primaryDark};
`

export default styled.select`
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid ${borderColors};
  border-radius: 4px;

  :focus {
    border: 2px solid #fff;
  }

  :disabled {
    background: #dddddd;
  }
`
