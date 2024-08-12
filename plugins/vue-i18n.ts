import { createI18n } from 'vue-i18n'
import es from '../locales/es.json'
import en from '../locales/en.json'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'es',
  messages: {
    es,
    en
  }
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(i18n)
})
