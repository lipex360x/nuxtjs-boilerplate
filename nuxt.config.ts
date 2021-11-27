export default {
  head: {
    title: 'Nuxt Boilerplate',
    htmlAttrs: {
      lang: 'pt'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt Boilerplate'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: ['normalize.css/normalize.css', '@/assets/scss/base.scss'],

  plugins: ['@/plugins/accessor'],

  components: [{ path: '@/components', pathPrefix: false }],

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/style-resources'],

  styleResources: {
    scss: ['@/components/bosons/*.scss']
  },

  modules: ['@nuxtjs/axios', 'cookie-universal-nuxt'],

  axios: {
    baseURL: 'http://...'
  },

  build: {
    extractCSS: true
  }
}
