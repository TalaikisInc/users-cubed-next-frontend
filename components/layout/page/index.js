import React, { Fragment } from 'react'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'

import Meta from 'components/layout/meta'
import { Container, Heading } from 'components/primitives'
import useStore from 'store'
import Header from 'components/layout/header'
import Footer from 'components/layout/footer'
import Loader from 'components/extensions/loader'

const Page = ({ children, ...rest }) => {
  const [globalState, globalActions] = useStore()

  return (
    <Fragment>
      <Meta {...rest} />
      { globalState.loading ? <Loader /> : <Fragment>
        <Header currentPath={rest.router.pathname} />
        <Container>
          <Heading>{ rest.title }</Heading>
          { children }
        </Container>
        <Footer {...rest} />
      </Fragment>
      }
    </Fragment>
  )
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ])
}

export default withRouter(Page)
