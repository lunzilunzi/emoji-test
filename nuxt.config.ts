import NuxtConfiguration from '@nuxt/config'

// import envConfig, { NuxtEnvironmentConfig } from './nuxt.environment'
import envConfig from './nuxt.env'

// @ts-ignore
// const env: NuxtEnvironmentConfig = envConfig[process.env.START_MODE]

// @ts-ignore
const nuxtConfig: NuxtConfiguration = {
  server: {
    // @ts-ignore
    port: envConfig[process.env.START_MODE].PORT,
    // @ts-ignore
    host: envConfig[process.env.START_MODE].HOST,
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - lunzi-blog-webui-vuetity',
    title: 'lunzi-blog-webui-vuetity',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    optionsPath: './plugins/vuetify.js',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
export default nuxtConfig
