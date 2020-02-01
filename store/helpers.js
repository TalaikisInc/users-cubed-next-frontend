import Router from 'next/router'
import { toast } from 'react-toastify'

import { STORAGE_ID } from 'config'
import { isServer } from 'utils'

export const localeDispatcher = (ctx) => {
  let currentLocale
  if (!isServer) {
    currentLocale = window.localStorage.getItem(`${STORAGE_ID}_locale`)
  }

  if (typeof ctx.query.locale === 'string' && ctx.query.locale.length === 2 && ctx.query.locale !== currentLocale) {
    if (!isServer) {
      window.localStorage.setItem(`${STORAGE_ID}_locale`, ctx.query.locale)
    }
    return ctx.query.locale
  } else {
    if (currentLocale !== null) {
      return currentLocale
    }
  }
}

export const errorDispatcher = (ctx) => {
  if (ctx.err) {
    toast.error(ctx.err)
  }
}

export const redirectOnError = (ctx) => {
  typeof window !== 'undefined' ? Router.push('/') : ctx.res.writeHead(302, { Location: '/' }).end()
}
