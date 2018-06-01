const merge = require('lodash/merge')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    isBrowser: typeof window !== 'undefined',
    apiUrl: 'https://rest.coinapi.io/v1',
  },
  test: {},
  development: {},
  production: {
    apiUrl: 'https://rest.coinapi.io/v1',
  },
}

module.exports = merge(config.all, config[config.all.env])
