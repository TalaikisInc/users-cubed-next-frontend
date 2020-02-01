import styled from 'styled-components'
import styledMap from 'styled-map'

const paddings = styledMap`
  p1: 1em;  
  p5: 5em;
  p10: 10em;
  lg: 20em;
  default: 25em;
`

const paddingsBottom = styledMap`
  p1: 1em;  
  p5: 2em;
  p10: 3em;
  lg: 4em;
  default: 10em;
`

export default styled.div`
  padding-left: ${paddings};
  padding-right: ${paddings};
  padding-bottom: ${paddingsBottom};
`
