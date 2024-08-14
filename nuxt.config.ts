import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'es'
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"' },
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
      sandboxPublicTransactionEndpoint: '',
      prodPublicTransactionEndpoint: '',
      prodEndpoint: '',
      prodPublicKey: '',
      nodeEnv: ''
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
  build: {
    transpile: ['vue-i18n']
  },
  devtools: { enabled: false },
  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
        ]
      })
    ]
  },
  compatibilityDate: '2024-08-05'
})
