import React from 'react'
import { toast } from 'react-toastify'

import { api, isServer, socialLogout } from 'utils'
import { STORAGE_ID } from 'config'
import { t } from 'translations'
import storeHook from 'utils/useStore'

const initialState = {
  isAuthenticated: false,
  currentUser: {},
  signupStatus: false,
  error: null,
  loading: false,
  locale: 'en',
  burger: false,
  status: false,
  state: {}
}

const setError = (store, error) => {
  store.setState({ error, loading: false })
  toast.error(error)
}

const signOut = async (store, token) => {
  const o = {
    body: {},
    headers: { Action: 'TOKEN_DESTROY', Authorization: `Bearer ${token}` }
  }
  const decoded = await api(o).catch((e) => setError(store, e))
  if (decoded && decoded.status === 'ok') {
    if (!isServer) {
      window.localStorage.removeItem(`${STORAGE_ID}_token`)
    }
    socialLogout()
    store.setState({ loading: false, currentUser: {}, isAuthenticated: false })
  }
}

const extendToken = async (token) => {
  const o = {
    body: { tokenId: token },
    headers: { Action: 'TOKEN_EXTEND', Authorization: `Bearer ${token}` }
  }
  await api(o).catch((e) => e)
}

const actions = {
  setState: (store, state) => {
    store.setState({ state })
  },
  setError: setError,
  setLoading: (store, loading) => {
    store.setState({ loading })
  },
  setLocale: (store, locale) => {
    store.setState({ locale })
  },
  contact: async (store, { name, email, msg }) => {
    store.setState({ loading: true })
    const o = {
      body: { email, name, msg },
      headers: { Action: 'CONTACT_US' }
    }
    const decoded = await api(o).catch((e) => setError(store, e))
    if (decoded) {
      if (decoded.status === 'ok') {
        store.setState({ status: true, loading: false })
      }
    }
  },
  refer: async (store, { to }) => {
    store.setState({ loading: true })
    let token
    if (!isServer) {
      token = window.localStorage.getItem(`${STORAGE_ID}_token`)
    }

    if (token) {
      const o = {
        body: { to },
        headers: { Action: 'REFER_REFER', Authorization: `Bearer ${token}` }
      }
      const decoded = await api(o).catch((e) => setError(store, e))
      if (decoded && decoded.status === 'ok') {
        store.setState({ status: true, loading: false })
        await extendToken(token)
      }
    }
  },
  getUser: async (store) => {
    store.setState({ loading: true })
    let token
    if (!isServer) {
      token = window.localStorage.getItem(`${STORAGE_ID}_token`)
    }
    console.log('token')
    console.log(token)

    if (token) {
      const o = {
        body: { token },
        headers: { Action: 'USER_GET', Authorization: `Bearer ${token}` }
      }
      const decoded = await api(o).catch(async (e) => {
        if (e === 'Unauthorized') {
          if (!isServer) {
            window.localStorage.removeItem(`${STORAGE_ID}_token`)
          }
          socialLogout()
          await signOut(store, token)
          store.setState({ isAuthenticated: false })
        } else {
          setError(store, e)
        }
      })
      console.log('decoded')
      console.log(decoded)
      if (decoded) {
        store.setState({ loading: false, currentUser: decoded, isAuthenticated: true })
        await extendToken(token)
      }
    } else {
      setError(store, t('error.token'))
    }
  },
  editUser: async (store, { ...rest }) => {
    store.setState({ loading: true })
    let token
    if (!isServer) {
      token = window.localStorage.getItem(`${STORAGE_ID}_token`)
    }

    if (token) {
      const o = {
        body: { ...rest },
        headers: { Action: 'USER_EDIT', Authorization: `Bearer ${token}` }
      }
      const decoded = await api(o).catch((e) => setError(store, e))
      if (decoded) {
        store.setState({ loading: false, currentUser: decoded, status: true, isAuthenticated: true })
        await extendToken(token)
      }
    } else {
      setError(store, t('error.token'))
    }
  },
  deleteUser: async (store) => {
    store.setState({ loading: true })
    let token
    if (!isServer) {
      token = window.localStorage.getItem(`${STORAGE_ID}_token`)
    }

    if (token) {
      const o = {
        body: {},
        headers: { Action: 'USER_DESTROY', Authorization: `Bearer ${token}` }
      }
      const decoded = await api(o).catch((e) => setError(store, e))
      if (decoded && decoded.status === 'ok') {
        if (!isServer) {
          window.localStorage.removeItem(`${STORAGE_ID}_token`)
          store.setState({ loading: false, currentUser: {}, isAuthenticated: false })
        }
      }
    }
  },
  signoutUser: async (store) => {
    store.setState({ loading: true })
    let token
    if (!isServer) {
      token = window.localStorage.getItem(`${STORAGE_ID}_token`)
    }

    if (token) {
      await signOut(store, token)
    } else {
      setError(store, t('error.token'))
    }
  },
  signup: async (store, { email, password, tosAgreement, locale }) => {
    const o = {
      body: { email, password, tosAgreement, locale },
      headers: { Action: 'USER_CREATE' }
    }
    store.setState({ loading: true })
    const decoded = await api(o).catch((e) => setError(store, e))
    if (decoded && decoded.status === 'ok') {
      store.setState({ loading: false, isAuthenticated: true })
    }
  },
  signin: async (store, { email, password }) => {
    store.setState({ loading: true })
    const o = {
      body: { email, password },
      headers: { Action: 'TOKEN_CREATE' }
    }
    const decoded = await api(o).catch((e) => setError(store, e))
    if (decoded && typeof decoded.tokenId === 'string') {
      if (!isServer) {
        console.log('setting on local storage')
        window.localStorage.setItem(`${STORAGE_ID}_token`, decoded.tokenId)
      }
      store.setState({ loading: false, isAuthenticated: true })
    }
  },
  confirm: async (store, { token }) => {
    store.setState({ loading: true })
    const o = {
      body: { token },
      headers: { Action: 'CONFIRM' }
    }
    const decoded = await api(o).catch((e) => setError(store, e))
    if (decoded && decoded.status === 'ok') {
      store.setState({ loading: false, status: true })
    }
  },
  reset: async (store, { email }) => {
    store.setState({ loading: true })
    const o = {
      body: { email },
      headers: { Action: 'RESET_CREATE' }
    }
    const decoded = await api(o).catch((e) => setError(store, e))
    if (decoded && decoded.status === 'ok') {
      store.setState({ loading: false, status: true })
    }
  },
  confirmReset: async (store, { token }) => {
    store.setState({ loading: true })
    const o = {
      body: { token },
      headers: { Action: 'CONFIRM' }
    }
    const decoded = await api(o).catch((e) => setError(store, e))
    if (decoded && decoded.status === 'ok') {
      store.setState({ loading: false, status: true })
    }
  },
  socialSignin: async (store, { provider, idToken, accessToken }) => {
    store.setState({ loading: true })
    const o = {
      body: { provider, idToken, accessToken },
      headers: { Action: 'USER_CREATE_SOCIAL' }
    }
    const decoded = await api(o).catch((e) => setError(store, e))
    if (decoded && decoded.status === 'ok') {
      store.setState({ loading: false, signupStatus: true })
    }
  },
  referUse: async (store, token) => {
    
  }
}

const usestore = storeHook(React, initialState, actions)

export default usestore
