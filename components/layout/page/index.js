import React, { Component, Fragment } from 'react'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Meta from 'components/layout/meta'
import Header from 'components/layout/header'
import CubedFooter from 'components/layout/footer'
import { COMPANY } from 'config'
import Loader from 'components/elements/loader'
import { getLoading } from 'store/selectors'

class Page extends Component {
  render () {
    const { children, loading, side, ...rest } = this.props

    return (
      <Fragment>
        <Meta {...rest} />
        { loading ? <Loader /> : <Fragment>
          <Header current={rest.router.pathname} />
          <section className="section-b-space">
            <div className="container">
              <div className="row">
                <div className="collection-content col">
                  <div className="page-main-content">
                    { children }
                  </div>
                </div>
                <div className="col-sm-3 collection-filter">
                  { side }
                </div>
              </div>
            </div>
          </section>
          <CubedFooter company={COMPANY} {...rest} />
        </Fragment>
        }
      </Fragment>
    )
  }
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]).isRequired
}

const mapStateToProps = (state) => ({
  loading: getLoading(state)
})

export default connect(mapStateToProps, null)(withRouter(Page))
