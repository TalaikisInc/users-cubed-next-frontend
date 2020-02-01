import styled from 'styled-components'
import styledMap from 'styled-map'

export default styled.h1`
  text-align: left;
  font-size: ${styledMap`
    small: 1em;
    medium: 1.5em;
    large: 2em;
    default: 1.5em;
  `};
  color: ${styledMap`
    white: #fff;
    default: #000;
  `};
`
