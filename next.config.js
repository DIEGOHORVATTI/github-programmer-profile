/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/interaction',
  '@fullcalendar/list',
  '@fullcalendar/react',
  '@fullcalendar/timegrid',
  '@fullcalendar/timeline'
])

module.exports = {
  output: 'standalone',
  reactStrictMode: true,
  plugins: {
    cssnano:
      process.env.NODE_ENV === 'production'
        ? {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true
              }
            }
          ]
        }
        : false
  },
  webpack: (config) => {
    config.resolve.alias.react = './node_modules/react'
    return config
  }
}

module.exports = withTM({
  swcMinify: false,
  trailingSlash: true,
  env: {
    HOST_API_KEY: 'https://minimal-assets-api.vercel.app',
    // FIREBASE AUTH
    FIREBASE_API_KEY: '',
    FIREBASE_AUTH_DOMAIN: '',
    FIREBASE_PROJECT_ID: '',
    FIREBASE_STORAGE_BUCKET: '',
    FIREBASE_MESSAGING_SENDER_ID: '',
    FIREBASE_APPID: '',
    FIREBASE_MEASUREMENT_ID: '',
    // AWS COGNITO AUTH
    AWS_COGNITO_USER_POOL_ID: '',
    AWS_COGNITO_CLIENT_ID: '',
    // AUTH0 AUTH
    AUTH0_CLIENT_ID: '',
    AUTH0_DOMAIN: '',
    //
    MAPBOX: ''
  }
})
