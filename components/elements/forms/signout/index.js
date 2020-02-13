import React from 'react'
import { useRouter } from 'next/router'

import useStore from 'store'

const Signout = () => {
  const [globalState, globalActions] = useStore()
  const router = useRouter()

  const _signout = () => {
    if (globalState.currentUser && globalState.currentUser.email) {
      globalActions.signoutUser()
      router.push('/signed-out')
    } else {
      globalActions.setError('User is already signed out.')
    }
  }

  return (
    <li>
      <div onClick={_signout} onKeyPress={_signout} role="button" tabIndex="0">
        <i className="sign-out-alt" /> Sign Out
      </div>
    </li>
  )
}

export default Signout
