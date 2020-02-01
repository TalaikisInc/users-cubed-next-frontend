const { resolve } = require('path')
const { WebpackBundleSizeAnalyzerPlugin } = require('webpack-bundle-size-analyzer')

module.exports = {
  webpack (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 5,
          name: '[name].[ext]'
        }
      }
    })

    config.module.rules.push({
      test: /\.proto$/,
      loader: 'ignore-loader'
    })

    config.plugins.push(new WebpackBundleSizeAnalyzerPlugin('stats.txt'))

    config.resolve.modules.push(resolve(__dirname, './'))

    return config
  },
  rossOrigin: 'anonymous',
  env: {
    API_KEY: process.env.API_KEY,
    API_URL: process.env.API_URL,
    FRONTEND_URL: process.env.FRONTEND_URL,
    STORAGE_ID: process.env.STORAGE_ID,
    AUTH0_CLIENTID: process.env.AUTH0_CLIENTID,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_REDIRECTURI: process.env.AUTH0_REDIRECTURI,
    STRIPE_TEST_KEY: process.env.STRIPE_TEST_KEY,
    STRIPE_LIVE_KEY: process.env.STRIPE_LIVE_KEY,
    GOOGLE_ADSENSE_ID: process.env.GOOGLE_ADSENSE_ID,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    MAILCHIMP_URL: process.env.MAILCHIMP_URL
  }
}
