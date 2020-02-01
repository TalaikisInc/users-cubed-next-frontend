import { Img } from 'react-progressive-loader'

const DeferComponent = ({ img, placeholder }) => (
  <Img
    src={img}
    loadOnScreen
    placeholderSrc={placeholder} />
)

export default DeferComponent
