
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#007399' },
  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    'sweetalert2/dist/sweetalert2.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/buefy.js',
    // '~/plugins/vue-date-fns.js',
    '~/plugins/vuelidate.js',
    '~/plugins/axios.js',
    '~/plugins/date-fns.js',
    // '~/plugins/logrocket.js',
    '~/plugins/v-lazy-image.js',
    // '~/plugins/perftest.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
    // '@nuxtjs/date-fns'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // 'nuxt-buefy',
    'nuxt-fontawesome',
    '@nuxtjs/auth',
    'vue-sweetalert2/nuxt'
  ],
  buefy: {
    materialDesignIcons: false,
    defaultIconPack: 'fas',
    defaultIconComponent: 'font-awesome-icon'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: "http://localhost:9000"
    // credentials: true
  },
  auth: {
  //   token: {
  //     prefix: 'Token.', //  Default prefix used in building a key for token storage across all storage providers.
  //   },
  //   // localStorage: false,
    cookie: {
      options: {
        expires: 7
      }
    },
    redirect: {
    login: '/auth/login',
    logout: '/',
  //   // callback: '/login',
    home: '/'
    },
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: '/auth/token/login/', method: 'post', propertyName: 'auth_token' },
  //         logout: { url: '/auth/token/logout/', method: 'post', propertyName: false },
  //         user: { url: '/auth/users/me/', method: 'get', propertyName: false },
  //       },
  //       // tokenRequired: true,
  //       tokenType: 'Token',
  //       tokenName: 'Authorization'
  //     }
  //   }
  },
  router: {
  middleware: ['auth']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   analyze: true,
    extend (config, ctx) {
    }
  }
}
