import React, { Component } from 'react'
import { connect } from 'react-redux'

import TopBar from 'components/elements/topbar'
import Hamburger from 'components/elements/hamburger'
import { isServer } from 'utils/utils'
import Logo from 'components/elements/logo'
import { getAuthStatus } from 'store/selectors'

class Header extends Component {
  constructor (props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    if (!isServer) {
      window.addEventListener('scroll', this.handleScroll)
    }
  }

  componentWillUnmount () {
    if (!isServer) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }

  handleScroll () {
    if (!isServer) {
      const number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      if (number >= 300) {
        document.getElementById('sticky').classList.add('fixed')
      } else {
        document.getElementById('sticky').classList.remove('fixed')
      }
    }
  }

  render () {
    const isAuthenticated = this.props.isAuthenticated

    return (
      <header id="sticky" className="sticky">
        <div className="mobile-fix-option"></div>
        <TopBar isAuthenticated={isAuthenticated} />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="main-menu">
                <div className="menu-left">
                  <div className="navbar">
                    <Hamburger />
                  </div>
                  <Logo />
                </div>
                <div className="menu-right pull-right">
                  <div>
                    <div className="icon-nav">
                      <ul>
                        { /* <SettingsButton /> */ }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: getAuthStatus(state)
})

export default connect(mapStateToProps, null)(Header)
