// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
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
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: process.env.SANDBOX_ENDPOINT || 'https://sandbox.wompi.co/v1/' }
      ],
      style: [],
      script: [],
      noscript: []
    }
  },

  css: ['@/assets/css/base.css', '@fortawesome/fontawesome-svg-core/styles.css'],

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxtjs/eslint-module'
  ],
  ssr: true,
  runtimeConfig: {
    sandboxSecretIntegrityKey: '',
    sandboxSecretEventsKey: '',
    prodSecretIntegrityKey: '',
    prodSecretEventsKey: '',

    public: {
      sandboxEndpoint: '',
      sandboxPublicKey: '',
      prodEndpoint: '',
      prodPublicKey: ''
    }
  },
  googleFonts: {
    families: {
      Roboto: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      },
      'Work+Sans': {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      }
    }
  },
  plugins: [
    { src: '~/plugins/intersection-observer.client.ts', mode: 'client' }
  ],
  devtools: { enabled: false },
  compatibilityDate: '2024-08-05'
})
