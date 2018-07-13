const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
  },
  /*
  ** Build configuration
  */
  loading: {
    height: '0.5em'
  },
  router: {
    middleware: ['ssr-cookie']
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config,  { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [
      'jquery',
      'materialize-css',
      './assets/dropdown.js',
      './assets/email.js',	
      './assets/init.js',	
      './assets/jquery.sticky-kit.js',	
      './assets/scrollspy.js',	
      './assets/sidenav.js',	
      './assets/sidebox.js',
      './assets/judge.js'
    ],
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },
  modules: [
    ['@nuxtjs/google-analytics'],
    ['@nuxtjs/sitemap'],
    ['qonfucius-nuxt-fontawesome'],
    'nuxt-rfg-icon'
  ],
  'google-analytics': {
    id: 'UA-61070671-9'
  },
  sitemap: {
    path: '/sitemap.xml'
  },
  fontAwesome: {
    packs: [
      {
        package: '@fortawesome/fontawesome-free-regular',
        icons: ['faEnvelope']
      }, {
        package: '@fortawesome/fontawesome-free-brands',
        icons: ['faTelegram', 'faDiscord']
      }, {
        package: '@fortawesome/fontawesome-free-solid',
        icons: ['faExclamation']
      }
    ]
  },
  'rfg-icon': {
    static: true,
    staticPath: '/_favicons/',
    masterPicture: 'static/icon.png'
  }
}
