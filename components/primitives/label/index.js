import styled from 'styled-components'
import styledMap from 'styled-map'

export default styled.label`
  font-size: ${styledMap`
    small: 8px;
    medium: 18px;
    large: 32px;
    default: 16px;
  `};
  color: ${styledMap`
    danger: red;
    dangerInverse: red;
    warning: yellow;
    warningInverse: yellow;
    defaultInverse: #fff;
    default: #000;
`};
display: block;
`
