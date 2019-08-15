const { resolve, join } = require('path')
const { WebpackBundleSizeAnalyzerPlugin } = require('webpack-bundle-size-analyzer')
const withTM = require('next-transpile-modules')
const withCSS = require('@zeit/next-css')
const withSourceMaps = require('@zeit/next-source-maps')

module.exports = withCSS(withTM(withSourceMaps({
  webpack (config, options) {
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
})))
