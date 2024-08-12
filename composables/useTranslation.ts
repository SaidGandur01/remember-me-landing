import { useI18n } from 'vue-i18n'

export const useTranslation = () => {
  const { t, locale, availableLocales } = useI18n()

  return { t, locale, availableLocales }
}
