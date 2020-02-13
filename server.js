const express = require('express')
const next = require('next')
const { resolve } = require('path')
const cacheableResponse = require('cacheable-response')
const { parse } = require('url')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = app.getRequestHandler()
const server = express()

const ssrCache = cacheableResponse({
  ttl: 1000 * 60 * 60 * 24,
  get: async ({ req, res, pathname, query }) => ({
    data: await app.renderToHTML(req, res, pathname, query)
  }),
  send: ({ data, res }) => res.send(data)
})

const serveStatic = (pathname) => {
  const filePath = resolve(__dirname, 'public', pathname)
  server.get(pathname, (req, res) => {
    app.serveStatic(req, res, filePath)
  })
}

app.prepare().then(() => {
  // Serve static
  serveStatic('/favicon.ico')
  serveStatic('/ads.txt')

  // Primary language paths
  server.get('/', (req, res) => ssrCache({ req, res, pathname: '/', query: {} }))
  server.get('/signup', (req, res) => ssrCache({ req, res, pathname: '/signup', query: {} }))
  server.get('/signin', (req, res) => ssrCache({ req, res, pathname: '/signin', query: {} }))
  server.get('/confirm', (req, res) => ssrCache({ req, res, pathname: '/confirm', query: {} }))
  server.get('/dashboard', (req, res) => ssrCache({ req, res, pathname: '/dashboard', query: {} }))
  server.get('/about', (req, res) => ssrCache({ req, res, pathname: '/about', query: {} }))
  server.get('/reset', (req, res) => ssrCache({ req, res, pathname: '/reset', query: {} }))
  server.get('/refer', (req, res) => ssrCache({ req, res, pathname: '/refer', query: {} }))
  server.get('/blog', (req, res) => ssrCache({ req, res, pathname: '/blog', query: {} }))
  server.get('/disclaimer', (req, res) => ssrCache({ req, res, pathname: '/disclaimer', query: {} }))
  server.get('/profile-edit', (req, res) => ssrCache({ req, res, pathname: '/profile-edit', query: {} }))
  server.get('/profile-deleted', (req, res) => ssrCache({ req, res, pathname: '/profile-deleted', query: {} }))
  server.get('/signed-out', (req, res) => ssrCache({ req, res, pathname: '/signed-out', query: {} }))
  server.get('/contact-us', (req, res) => ssrCache({ req, res, pathname: '/contact-us', query: {} }))
  server.get('/report-cert-transparency', (req, res) => ssrCache({ req, res, pathname: '/report-cert-transparency', query: {} }))
  server.get('/xss-report', (req, res) => ssrCache({ req, res, pathname: '/xss-report', query: {} }))
  server.get('/terms-and-conditions', (req, res) => ssrCache({ req, res, pathname: '/terms-and-conditions', query: {} }))
  server.get('/privacy-policy', (req, res) => ssrCache({ req, res, pathname: '/privacy-policy', query: {} }))
  server.get('/not-found', (req, res) => {
    res.status(404)
    ssrCache({ req, res, pathname: '/not-found', query: {} })
  })

  // Other languages
  // disclaimer, ToS and pribacu policy and not found are without custom locale
  server.get('/index/:locale', (req, res) => ssrCache({ req, res, pathname: '/', query: { locale: req.params.locale } }))
  server.get('/signup/:locale', (req, res) => ssrCache({ req, res, pathname: '/signup', query: { locale: req.params.locale } }))
  server.get('/signin/:locale', (req, res) => ssrCache({ req, res, pathname: '/signin', query: { locale: req.params.locale } }))
  server.get('/confirm/:locale', (req, res) => ssrCache({ req, res, pathname: '/confirm', query: { locale: req.params.locale } }))
  server.get('/dashboard/:locale', (req, res) => ssrCache({ req, res, pathname: '/dashboard', query: { locale: req.params.locale } }))
  server.get('/about/:locale', (req, res) => ssrCache({ req, res, pathname: '/about', query: { locale: req.params.locale } }))
  server.get('/reset/:locale', (req, res) => ssrCache({ req, res, pathname: '/reset', query: { locale: req.params.locale } }))
  server.get('/refer/:locale', (req, res) => ssrCache({ req, res, pathname: '/refer', query: { locale: req.params.locale } }))
  server.get('/blog/:locale', (req, res) => ssrCache({ req, res, pathname: '/blog', query: { locale: req.params.locale } }))
  server.get('/profile-edit/:locale', (req, res) => ssrCache({ req, res, pathname: '/profile-edit', query: { locale: req.params.locale } }))
  server.get('/profile-deleted/:locale', (req, res) => ssrCache({ req, res, pathname: '/profile-deleted', query: { locale: req.params.locale } }))
  server.get('/signed-out/:locale', (req, res) => ssrCache({ req, res, pathname: '/signed-out', query: { locale: req.params.locale } }))
  server.get('/contact-us/:locale', (req, res) => ssrCache({ req, res, pathname: '/contact-us', query: { locale: req.params.locale } }))
  server.get('/report-cert-transparency/:locale', (req, res) => ssrCache({ req, res, pathname: '/report-cert-transparency', query: { locale: req.params.locale } }))
  server.get('/xss-report/:locale', (req, res) => ssrCache({ req, res, pathname: '/xss-report', query: { locale: req.params.locale } }))

  // second parameter
  server.get('/confirm/:token', (req, res) => ssrCache({ req, res, pathname: '/confirm', query: { token: req.params.token } }))
  server.get('/confirm/:token/:locale', (req, res) => ssrCache({ req, res, pathname: '/confirm', query: { token: req.params.token, locale: req.params.locale } }))

  server.all('*', (req, res) => {
    return handler(req, res)
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
