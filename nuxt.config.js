import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  vue: {
    config: {
      productionTip: false,
      //devtools: true
    }
  },

  head: {
    titleTemplate: '%s - Nuxt2Test',
    title: 'Nuxt2Test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'this is my test description.'},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxt/image',
    //'nuxt-purgecss'
  ],

/*  purgecss: {
    paths: ['/node_modules/vuetify/src/!**!/!*.ts'],
    whitelist: ['v-application', 'v-application--wrap', 'theme--light'],
    whitelistPatterns: [/^v-((?!application).)*$/, /^theme--*!/, /.*-transition/],
    whitelistPatternsChildren: [/^v-((?!application).)*$/, /^theme--*!/],
  },*/

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n'
  ],

  i18n: {},

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#252733',
          secondary: '#0073c0',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          danger: '#FF5252'
        },
      }
    },
    defaultAssets: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    //analyze: true,
    extractCSS: {
      ignoreOrder: true
    },
    transpile: ['vuetify/lib'],
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: true,
        maxSize: 244000,
        cacheGroups: {
          vendor: {
            name: 'node_vendors',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            maxSize: 244000
          }
        }
      }
    }
  }
}
