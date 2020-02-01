import styled from 'styled-components'

import theme from 'theme'

export default styled.header`
  background: ${theme.colors.primaryDark};
  height: ${theme.header.size}vh;
  color: white;
  width: 100%;
  position: fixed;
  padding-bottom: .5em;
  box-shadow: 0 2px 8px ${theme.shadowColor.primary};
  top: 0;
`
