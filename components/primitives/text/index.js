import styled from 'styled-components'
import styledMap from 'styled-map'

export default styled.p`
  font-size: ${styledMap`
    small: 1em;
    medium: 1.2em;
    large: 1.5em;
    default: 1em;
  `};
  color: ${styledMap`
    danger: red;
    dangerInverse: red;
    warning: yellow;
    warningInverse: yellow;
    defaultInverse: #fff;
    default: #000;
`};
`
