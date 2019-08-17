import React, { Fragment } from 'react'
import { toast } from 'react-toastify'
import Router from 'next/router'

import { STORAGE_ID } from 'config'
import api from 'utils/api'
import contactApi from 'utils/contact'
import secureApi from 'utils/secure'
import { setLocale } from 'translations'
import { isServer } from 'utils/utils'
import { SET_ERROR, SET_SIGNIN, SET_LOCALE, SET_LOADING, SET_SIGNUP, SET_CURRENT_USER, SET_STATUS } from 'store/actionTypes'

const _setError = (error) => ({
  type: SET_ERROR,
  payload: error
})

export const setError = (error) => {
  return (dispatch) => {
    dispatch(_setError(error))
    if (error !== null) {
      toast.error(error)
    }
  }
}

const _setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading
})

export const setLoading = (loading) => {
  return (dispatch) => {
    dispatch(_setLoading(loading))
  }
}

const _setStatus = (loading) => ({
  type: SET_STATUS,
  payload: loading
})

export const setStatus = (status) => {
  return (dispatch) => {
    dispatch(_setStatus(status))
  }
}

const _setSignup = (status) => ({
  type: SET_SIGNUP,
  payload: status
})

const _setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user
})

const _setLocale = (locale) => ({
  type: SET_LOCALE,
  payload: locale
})

const _setSignin = (isAuthenticated) => ({
  type: SET_SIGNIN,
  payload: isAuthenticated
})

export const getUser = () => {
  return (dispatch) => {
    dispatch(_setLoading(true))
    let token
    if (!isServer) {
      token = localStorage.getItem(`${STORAGE_ID}_token`)
    }

    if (token) {
      // @TODO extend token with each request
      secureApi(token, { action: 'USER_GET' }, (err, res) => {
        if (res && res.error) {
          dispatch(_setError(res.error))
          dispatch(_setSignin(false))
          dispatch(_setCurrentUser({}))
        } else if (res && res.email) {
          dispatch(_setCurrentUser(res))
        } else if (err) {
          dispatch(_setError(err.error))
        }
        dispatch(_setLoading(false))
      })
    }
  }
}

export const editUser = (rest) => {
  return (dispatch) => {
    dispatch(_setLoading(true))
    let token
    if (!isServer) {
      token = localStorage.getItem(`${STORAGE_ID}_token`)
    }

    if (token) {
      secureApi(token, { action: 'USER_EDIT', ...rest }, (err, res) => {
        if (res && res.error) {
          if (res.error === 'Unauthorized.') {
            dispatch(_setSignin(false))
            dispatch(_setCurrentUser({}))
          }
          dispatch(_setError(res.error))
        } else if (res && res.email) {
          dispatch(_setCurrentUser(res))
          dispatch(_setError(null))
          dispatch(_setStatus(true))
        } else if (err) {
          dispatch(_setError(err.error))
        }
        dispatch(_setLoading(false))
      })
    }
  }
}

export const deleteUser = () => {
  return (dispatch) => {
    dispatch(_setLoading(true))
    let token
    if (!isServer) {
      token = localStorage.getItem(`${STORAGE_ID}_token`)
    }

    if (token) {
      secureApi(token, { action: 'USER_DESTROY' }, (err, res) => {
        if (res && res.error) {
          dispatch(_setError(res.error))
        } else if (res && res.status === 'OK.') {
          if (!isServer) {
            localStorage.removeItem(`${STORAGE_ID}_token`)
            dispatch(_setSignin(false))
            Router.push('/profile-deleted')
          }
        } else if (err) {
          dispatch(_setError(err.error))
        }
        dispatch(_setLoading(false))
      })
    }
  }
}

export const refer = ({ to }) => {
  return (dispatch) => {
    dispatch(_setLoading(true))
    let token
    if (!isServer) {
      token = localStorage.getItem(`${STORAGE_ID}_token`)
    }

    if (token) {
      secureApi(token, { action: 'REFER_REFER', to }, (err, res) => {
        if (res && res.error) {
          dispatch(_setError(res.error))
        } else if (res && res.status === 'OK.') {
          dispatch(_setStatus(true))
        } else if (err) {
          dispatch(_setError(err.error))
        }
        dispatch(_setLoading(false))
      })
    }
  }
}

export const signoutUser = () => {
  return (dispatch) => {
    dispatch(_setLoading(true))
    let token
    if (!isServer) {
      token = localStorage.getItem(`${STORAGE_ID}_token`)
    }

    if (token) {
      return api({ action: 'TOKEN_DESTROY', tokenId: token }, (err, res) => {
        if (res && res.error) {
          dispatch(_setError(res.error))
        } else if (res && res.status === 'OK.') {
          if (!isServer) {
            Router.push('/signed-out')
            localStorage.removeItem(`${STORAGE_ID}_token`)
          }
          dispatch(_setSignin(false))
          dispatch(_setCurrentUser({}))
        } else if (err) {
          dispatch(_setError(err.error))
        }
        dispatch(_setLoading(false))
      })
    } else {
      dispatch(_setLoading(false))
    }
  }
}

export const signup = ({ email, password, tosAgreement }) => {
  return (dispatch) => {
    dispatch(_setLoading(true))
    return api({ action: 'USER_CREATE', email: email, password: password, tosAgreement: tosAgreement }, (err, res) => {
      if (res && res.error) {
        dispatch(_setSignin(false))
        if (res.error === 'User exists.') {
          dispatch(_setError((<Fragment>{res.error}, <a href="/signin">sign in</a>?</Fragment>)))
        } else {
          dispatch(_setError(res.error))
        }
      } else if (res && res.status === 'OK.') {
        dispatch(_setSignup(true))
      } else if (err) {
        dispatch(_setError(err.error))
      }
      dispatch(_setLoading(false))
    })
  }
}

export const signin = ({ email, password }) => {
  return (dispatch) => {
    dispatch(_setLoading(true))
    return api({ action: 'TOKEN_CREATE', email: email, password: password }, (err, res) => {
      if (res && res.error) {
        dispatch(_setSignin(false))
        if (res.error === 'Wrong login details.') {
          dispatch(_setError((<Fragment>Wrong login details, <a href="/reset">reset password</a>?</Fragment>)))
        } else {
          dispatch(_setError(res.error))
        }
      } else if (res && res.token) {
        if (!isServer) {
          localStorage.setItem(`${STORAGE_ID}_token`, res.token)
        }
        dispatch(_setSignin((true)))
      } else if (err) {
        dispatch(_setError(err.error))
      }
      dispatch(_setLoading(false))
    })
  }
}

export const setLanguage = (locale) => {
  return (dispatch) => {
    if (locale.length === 2) {
      if (!isServer) {
        localStorage.setItem(`${STORAGE_ID}_locale`, locale)
      }
      setLocale(locale)
      dispatch(_setLocale(locale))
    }
  }
}

export const confirm = ({ token }) => {
  return (dispatch) => {
    dispatch(_setLoading(true))
    return api({ action: 'CONFIRM', token: token }, (err, res) => {
      if (res && res.error) {
        dispatch(_setError(res.error))
      } else if (res && res.status === 'OK.') {
        dispatch(_setStatus(true))
      } else if (err) {
        dispatch(_setError(err.error))
      }
      dispatch(_setLoading(false))
    })
  }
}

export const reset = ({ email }) => {
  return (dispatch) => {
    dispatch(_setLoading(true))
    return api({ action: 'RESET_CREATE', email: email }, (err, res) => {
      if (res && res.error) {
        dispatch(_setError(res.error))
      } else if (res && res.status === 'OK.') {
        dispatch(_setStatus(true))
      } else if (err) {
        dispatch(_setError(err.error))
      }
      dispatch(_setLoading(false))
    })
  }
}

export const confirmReset = ({ token }) => {
  return (dispatch) => {
    dispatch(_setLoading(true))
    return api({ action: 'CONFIRM', token: token }, (err, res) => {
      if (res && res.error) {
        dispatch(_setError(res.error))
      } else if (res && res.status === 'OK.') {
        dispatch(_setStatus(true))
      } else if (err) {
        dispatch(_setError(err.error))
      }
      dispatch(_setLoading(false))
    })
  }
}

export const contact = ({ name, email, message }) => {
  return (dispatch) => {
    dispatch(_setLoading(true))
    return contactApi(name, email, message, (err, res) => {
      if (res && res.status === 'Wrong key.') {
        dispatch(_setError(res.status))
      } else if (res && res.status === 'sent') {
        dispatch(_setStatus(true))
      } else if (err) {
        dispatch(_setError(err.error))
      }
      dispatch(_setLoading(false))
    })
  }
}

export const socialSignin = (provider) => {
  return (dispatch) => {
    dispatch(_setLoading(true))
    api({ action: 'USER_CREATE_SOCIAL', provider }, (err, res) => {
      if (res && res.error) {
        dispatch(_setError(res.error))
      } else if (res && res.status === 'OK.') {
        // @TODO we should get token here
        dispatch(_setSignup(true))
      } else if (err) {
        dispatch(_setError(err.error))
      }
      dispatch(_setLoading(false))
    })
  }
}
