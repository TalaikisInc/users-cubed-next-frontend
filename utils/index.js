import { post } from 'axios'
import isBase64 from 'validator/lib/isBase64'
import { promisify } from 'es6-promisify'

import jwtDecode from 'jwt-decode'

import { STORAGE_ID, API_URL, API_KEY, AUTH0_CLIENTID, AUTH0_DOMAIN, AUTH0_REDIRECTURI } from 'config'
import { protoMap } from 'actions'
import { encodeRequest, decodeResponse } from 'proto'
import { t } from 'translations'
import { Error } from 'proto/responses/error'

export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

const _api = async (data, done) => {
  const locale = window.localStorage.getItem(`${STORAGE_ID}_locale`) || 'en'
  const auth = data.headers.Authorization
  data.body.locale = locale || 'en'
  const responseHandler = protoMap[data.headers.Action]
  const output = {
    body: data.body,
    headers: {
      Action: data.headers.Action,
      'x-api-key': API_KEY,
      Authorization: auth ? `Bearer ${auth}` : ''
    }
  }

  const body = await encodeRequest(output).catch(() => done(t('error.encoding')))
  const postParams = {
    method: 'POST',
    responseType: 'text',
    body,
    headers: {
      'Content-Type': 'text/plain',
      Accept: 'text/plain'
    }
  }

  const res = await post(API_URL, postParams)
    .catch((e) => {
      if (e && typeof e.response === 'object') {
        const data = e.response.data
        if (isBase64(data)) {
          const err = Error.decode(Buffer.from(data, 'base64'))
          done(err.error)
        }
      } else {
        done(e.message)
      }
    })

  if (res && res.status === 200 && typeof res.data === 'string' && res.data.length > 0) {
    const decoded = await decodeResponse(responseHandler, res.data)
    done(null, decoded)
  }
}

export const api = promisify(_api)

export const getSocialProfile = (done) => {
  if (!isServer) {
    const idToken = window.localStorage.getItem('id_token')
    if (idToken) {
      try {
        done(null, jwtDecode(idToken))
      } catch (err) {
        done(`${t('error.social_profile')}`)
      }
    }
  }
}

export const socialSignin = (done) => {
  if (!isServer) {
    const { WebAuth } = require('auth0-js')
    const _auth0 = new WebAuth({
      clientID: AUTH0_CLIENTID,
      domain: AUTH0_DOMAIN,
      scope: 'openid email profile purchase',
      responseType: 'token id_token',
      redirectUri: AUTH0_REDIRECTURI
    })

    _auth0.parseHash(window.location.hash, (err, result) => {
      if (err || !result) {
        done(err)
      }

      window.localStorage.setItem('id_token', result.idToken)
      window.localStorage.setItem('access_token', result.accessToken)
      done()
    })
  }
}

export const socialLogout = () => {
  if (!isServer) {
    window.localStorage.removeItem('id_token')
    window.localStorage.removeItem('access_token')
    window.location.href = '/'
  }
}
