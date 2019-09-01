const { resolve, join } = require('path')
const { WebpackBundleSizeAnalyzerPlugin } = require('webpack-bundle-size-analyzer')
const withTM = require('next-transpile-modules')
const withCSS = require('@zeit/next-css')
const withSourceMaps = require('@zeit/next-source-maps')

module.exports = withCSS(withTM(withSourceMaps({
  webpack (config, { dev }) {
    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()

      if (entries['main.js'] && !entries['main.js'].includes('./utils/polyfills.js')) {
        entries['main.js'].unshift('./utils/polyfills.js')
      }

      return entries
    }

    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })

    config.plugins.push(new WebpackBundleSizeAnalyzerPlugin('stats.txt'))

    config.resolve.modules.push(resolve(__dirname, './'))

    return config
  },
  transpileModules: ['react-spinners']
  // exportTrailingSlash: true
  /*
  exportPathMap: async function (defaultPathMap,{ dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/error': { page: '/error' },
      '/confirm': { page: '/confirm' },
      '/refer': { page: '/refer' },
      '/profile-edit': { page: '/profile-edit' },
      '/refer-use': { page: '/refer-use' },
      '/reset': { page: '/reset' },
      '/dashboard': { page: '/dashboard' },
      '/confirm-reset': { page: '/confirm-reset' },
      '/privacy-policy': { page: '/privacy-policy' },
      '/terms-and-conditions': { page: '/terms-and-conditions' },
      '/disclaimer': { page: '/disclaimer' },
      '/referred': { page: '/referred' },
      '/signin': { page: '/signin' },
      '/signup': { page: '/signup' },
      '/xss-report': { page: '/xss-report' },
      '/report-cert-transparency': { page: '/report-cert-transparency' },
      '/contact-us': { page: '/contact-us' },
      '/not-found': { page: '/not-found' },
      '/signed-out': { page: '/signed-out' },
      '/profile-deleted': { page: '/profile-deleted' },
    }
  }
  */
})))
