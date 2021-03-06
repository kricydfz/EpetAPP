'use strict'
// Template version: 1.2.8
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'https://mallcdn.api.epet.com/v3/index/main.html?pet_type=dog&version=358&is_single=0&system=wap&isWeb=1&_=1515153168660',

        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
      '/test': {
        target: 'http://mall.api.epet.com/v3/index/main.html?do=GetDynamicV315&pet_type=dog&version=358&system=wap&isWeb=1&_=1515173008616',
        changeOrigin: true,
        pathRewrite: {
          '^/test': '/'
        }
      },
      '/menuL': {
        target: 'https://mallcdn.api.epet.com/v3/goods/category/main.html?pet_type=dog&system=wap&isWeb=1&version=303&_=1515241077976',
        changeOrigin: true,
        pathRewrite: {
          '^/menuL': '/'
        }
      },
      '/brands': {
        target: 'https://mallcdn.api.epet.com/v3/brand/list/main.html?pet_type=dog&system=wap&isWeb=1&version=303&_=1515291994806',
        changeOrigin: true,
        pathRewrite: {
          '^/brands': '/'
        }

      },

      '/pet': {
        target: 'https://mallcdn.api.epet.com/v3/goods/category/main.html',
        changeOrigin: true,
        pathRewrite: {
          '^/pet': '/'
        }

      },
      '/login': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/login': '/'
        }

      },

    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true,
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
