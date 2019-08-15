const express = require('express')
const next = require('next')
const { resolve } = require('path')
const cacheableResponse = require('cacheable-response')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = app.getRequestHandler()
const server = express()

const ssrCache = cacheableResponse({
  ttl: 1000 * 60 * 60 * 24,
  get: async ({ req, res, pagePath, queryParams }) => ({
    data: await app.renderToHTML(req, res, pagePath, queryParams)
  }),
  send: ({ data, res }) => res.send(data)
})

app.prepare().then(() => {
  server.get('/favicon.ico', (req, res) => {
    const filePath = resolve(__dirname, 'static', '/favicon.ico')
    app.serveStatic(req, res, filePath)
  })

  server.get('/ads.txt', (req, res) => {
    const filePath = resolve(__dirname, 'static', 'ads.txt')
    app.serveStatic(req, res, filePath)
  })

  server.get('/_next/*', (req, res) => {
    handler(req, res)
  })

  server.get('/', (req, res) => {
    const pagePath = '/'
    const queryParams = {}
    return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('/index/:locale', (req, res) => {
    const pagePath = '/index'
    const queryParams = { locale: req.params.locale }
    return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('/error', (req, res) => {
    res.status(404)
    const pagePath = '/error'
    const queryParams = {}
    return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('/error/:locale', (req, res) => {
    res.status(404)
    const pagePath = '/error'
    const queryParams = { locale: req.params.locale }
    return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('/about', (req, res) => {
    const pagePath = '/about'
    const queryParams = {}
    return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('/about/:locale', (req, res) => {
    const pagePath = '/about'
    const queryParams = { locale: req.params.locale }
    return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('/confirm/:token', (req, res) => {
    const pagePath = '/confirm'
    const queryParams = { token: req.params.token }
    return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('/confirm/:token/:locale', (req, res) => {
    const pagePath = '/confirm'
    const queryParams = { token: req.params.token }
    return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('/refer-use/:token', (req, res) => {
    const pagePath = '/refer-use'
    const queryParams = { token: req.params.token }
    return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('/refer-use/:token/:locale', (req, res) => {
    const pagePath = '/refer-use'
    const queryParams = { token: req.params.token, locale: req.params.locale }
    return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('/reset', (req, res) => {
    const pagePath = '/reset'
    const queryParams = {}
    return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('/reset/:locale', (req, res) => {
    const pagePath = '/reset'
    const queryParams = { locale: req.params.locale }
    return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('/refer', (req, res) => {
    const pagePath = '/refer'
    const queryParams = {}
    return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('/refer/:locale', (req, res) => {
    const pagePath = '/refer'
    const queryParams = { locale: req.params.locale }
    return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('/profile-edit', (req, res) => {
    const pagePath = '/profile-edit'
    const queryParams = {}
    return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('/profile-edit/:locale', (req, res) => {
    const pagePath = '/profile-edit'
    const queryParams = { locale: req.params.locale }
    return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('/confirm-reset/:token', (req, res) => {
    const pagePath = '/confirm-reset'
    const queryParams = { token: req.params.token }
    return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('/confirm-reset/:token/:locale', (req, res) => {
    const pagePath = '/confirm-reset'
    const queryParams = { token: req.params.token, locale: req.params.locale }
    return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('/privacy-policy', (req, res) => {
    const pagePath = '/privacy-policy'
    const queryParams = {}
    return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('/terms-and-conditions', (req, res) => {
    const pagePath = '/terms-and-conditions'
    const queryParams = {}
    return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('/disclaimer', (req, res) => {
    const pagePath = '/disclaimer'
    const queryParams = {}
    return ssrCache({ req, res, pagePath, queryParams })
  })

  /*
  profile deleted
  referred
  refer use
  signed out
  signin
  signout
  conatct us ir kit
  */

  server.get('*', (req, res) => {
    return handler(req, res)
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
