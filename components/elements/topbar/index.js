import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { t } from 'translations'
import Signout from '../signout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

class TopBar extends Component {
  render () {
    const { isAuthenticated, locale } = this.props
    const signinUrl = locale !== 'en' ? `${URL}/signin/${locale}` : `${URL}/signin`
    const signupUrl = locale !== 'en' ? `${URL}/signup/${locale}` : `${URL}/signup`
    const accUrl = locale !== 'en' ? `${URL}/dashboard/${locale}` : `${URL}/dashboard`

    return (
      <div className="top-header">
        <div className="container">
          <div className="row">
            { /* left /> */ }
            <div className="col-lg-6 text-right">
              <ul className="header-dropdown">
                <li className="onhover-dropdown mobile-account">
                  <FontAwesomeIcon icon={faUser} size="1x" aria-hidden="true" /> {t('my_account')}
                  <ul className="onhover-show-div">
                    { !isAuthenticated ? <Fragment>
                      <li>
                        <a href={signinUrl}>{ t('form.signin') }</a>
                      </li>
                      <li>
                        <a href={signupUrl}>{ t('form.signup') }</a>
                      </li>
                    </Fragment>
                      : <Fragment>
                        <Signout />
                        <li>
                          <a href={accUrl}>{ t('dashboard.account') }</a>
                        </li>
                      </Fragment>
                    }
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

TopBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  current: PropTypes.string.isRequired
}

export default TopBar
