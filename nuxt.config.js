const parseArgs = require('minimist')
const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: 'hostname',
    p: 'port'
  },
  string: ['H'],
  unknown: parameter => false
})

const port =
  argv.port ||
  process.env.PORT ||
  process.env.npm_package_config_nuxt_port ||
  '3000'
const host =
  argv.hostname ||
  process.env.HOST ||
  process.env.npm_package_config_nuxt_host ||
  'localhost'
module.exports = {
  env: {
    baseUrl:
      process.env.BASE_URL ||
      `http://${host}:${port}`
  },
  router: {
    base: process.env.NODE_ENV !== 'prod' ? '' : '/nuxt-blog'
  },
  head: {
    title: 'Frank\'s HomePage',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  css: [
    '~/assets/css/main.css',
    'element-ui/lib/theme-chalk/index.css',
    '~/node_modules/highlight.js/styles/hopscotch.css',
    '~/assets/scss/main.scss'
  ],
  build: {
    extend (config, { isDev, isClient }) {
      const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
      vueLoader.options.loaders.sass = 'vue-style-loader!css-loader!sass-loader'
    }
  },
  modules: [
    '@nuxtjs/axios',
    '~/modules/typescript.js',
    'bootstrap-vue/nuxt',
    '@nuxtjs/markdownit'
  ],
  axios: {},
  /*
  ** Add element-ui in our app, see plugins/element-ui.js file
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  performance: { hints: false },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    use: [
      'markdown-it-highlightjs'
    ]
  }
}
