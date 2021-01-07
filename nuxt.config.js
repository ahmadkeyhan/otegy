module.exports = {
  server: {
    port: 3069
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'otegy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { href: 'https://fonts.gstatic.com', rel: 'preconnect' },
      { href: "https://fonts.googleapis.com/css2?family=Markazi+Text&display=swap", rel: "stylesheet" },
      { href: "https://fonts.googleapis.com/css2?family=Jost&display=swap", rel: "stylesheet"}
    ]
  },

  loading: { color: '#fff' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/google-fonts'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'nuxt-material-design-icons',
    '@nuxtjs/auth-next',
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/users/login',
            method: 'post',
            propertyName: 'token'
          },
          logout: true,
          user: {
            url: '/api/users/user',
            method: 'get',
            propertyName: 'user'
          }
        },
        tokenRequired: true,
        tokenType: "Bearer"
      }
    },
    redirect: {
      login: '/user/login', // User will be redirected to this path if login is required
      logout: '/', // User will be redirected to this path if after logout, current route is protected
      home: '/user/panel' // User will be redirect to this path after login if accessed login page directly
    },
    rewriteRedirects: true,
    proxy: true
  },

  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true
  },

  proxy: {
    '/api/': { target: 'http://mocube.ir', pathRewrite: {'^/api/': ''} }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  serverMiddleware: [
    '~/api/index.js'
  ]
}
