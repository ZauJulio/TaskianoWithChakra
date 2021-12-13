/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const secureEnv = require('secure-env')

const enc_env = secureEnv({
  secret: process.env.SECURE_ENV
})

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV !== 'production'
  },
  env: {
    ...enc_env
  },
  reactStrictMode: true
})
