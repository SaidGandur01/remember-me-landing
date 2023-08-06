// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          charset: 'utf-8'
        }
      ],
      title: 'Remember me',
      link: [],
      style: [],
      script: [],
      noscript: []
    }
  },
  css: ['@/assets/css/base.css'],
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxtjs/eslint-module',
  ],
  googleFonts: {
    families: {
      Roboto: {
        wght: [100,200,300,400,500,600,700,800, 900]
      }
    }
  },
  devtools: { enabled: false }
})
