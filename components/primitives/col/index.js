import styled from 'styled-components'
import styledMap from 'styled-map'

const column = styledMap`
col-start: 1 / 4;
  col-center: 5 / 8;
  col-end: 9 / 12;
  default: auto;
`

const row = styledMap`
  row-start: 1;
  row-center: 2;
  row-end: 4;
  default: auto;
`

export default styled.div`
  grid-column: ${column};
  grid-row: ${row};
  padding-left: 1em;
  text-align: center;
`
