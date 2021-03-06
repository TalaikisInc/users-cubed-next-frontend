import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { Dashboard } from 'styled-icons/boxicons-solid'
import { SignIn, SignOut } from 'styled-icons/octicons'
import { AccountCircle } from 'styled-icons/material'

import Hamburger from 'components/elements/hamburger'
import { Logo } from 'components/layout'
import { Button, Header } from 'components/primitives'
import { t } from 'translations'
import { FRONTEND_URL } from 'config'
import useStore from 'store'

const DashboardLink = ({ url, signout, currentPath }) => (
  <Fragment>
    { !currentPath.includes('/dashboard') ? <Button href={url}>
      <Dashboard size="20" title={t('dashboard.account')} className="pr" />
      { t('dashboard.account') }
    </Button> : null }
    { !currentPath.includes('/signed-out') ? <Button onClick={signout} onKeyPress={signout} role="button" tabIndex="0">
      <SignOut size="20" title={t('signout.title')} className="pr" />
      { t('signout.title') }
    </Button> : null }
  </Fragment>
)

DashboardLink.propTypes = {
  currentPath: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  signout: PropTypes.func.isRequired
}

const SigninUrl = ({ currentPath, signinUrl }) => (
  !currentPath.includes('/signin') ? <Button href={signinUrl} hollow>
    <SignIn size="20" title={t('form.signin')} className="pr" />
    { t('form.signin') }
  </Button> : null
)

SigninUrl.propTypes = {
  currentPath: PropTypes.string.isRequired,
  signinUrl: PropTypes.string.isRequired
}

const SignupUrl = ({ currentPath, signupUrl }) => (
  !currentPath.includes('/signup') ? <Button href={signupUrl}>
    <AccountCircle size="20" title={t('form.signup')} className="pr" />
    { t('form.signup') }
  </Button> : null
)

SignupUrl.propTypes = {
  currentPath: PropTypes.string.isRequired,
  signupUrl: PropTypes.string.isRequired
}

const HeaderFull = ({ currentPath }) => {
  const [globalState, globalActions] = useStore()
  const router = useRouter()
  const _signout = () => {
    if (globalState.currentUser && globalState.currentUser.email) {
      globalActions.signoutUser()
      router.push('/signed-out')
    } else {
      globalActions.setError(t('error.signout'))
    }
  }

  const en = globalState.locale !== 'en'
  const signinUrl = en ? `${FRONTEND_URL}/signin/${globalState.locale}` : `${FRONTEND_URL}/signin`
  const signupUrl = en ? `${FRONTEND_URL}/signup/${globalState.locale}` : `${FRONTEND_URL}/signup`
  const accUrl = en ? `${FRONTEND_URL}/dashboard/${globalState.locale}` : `${FRONTEND_URL}/dashboard`

  return (
    <Header>
      <Logo />
      { globalState.isAuthenticated ? <DashboardLink url={accUrl} signout={_signout} currentPath={currentPath} /> : <Fragment>
        { currentPath.includes('/profile-edit') ? null : <Fragment>
          <SignupUrl currentPath={currentPath} signupUrl={signupUrl} />
          <SigninUrl currentPath={currentPath} signinUrl={signinUrl} />
        </Fragment>
        }
      </Fragment>
      }
    </Header>
  )
}

HeaderFull.propTypes = {
  currentPath: PropTypes.string.isRequired
}

export default HeaderFull
