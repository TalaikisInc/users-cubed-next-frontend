const { resolve } = require('path')
require('@babel/polyfill')
require('@babel/register')({ presets: ['@babel/preset-env'] })

require('./tests.js')
