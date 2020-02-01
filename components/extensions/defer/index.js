import { Defer } from 'react-progressive-loader'

const DeferComponent = ({ component, loader }) => (
  <Defer
    render={() => component}
    loadOnScreen
    renderPlaceholder={() => loader} />
)

export default DeferComponent
