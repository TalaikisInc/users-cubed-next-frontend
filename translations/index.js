import { locale, fallback, set, t } from 'frenchkiss'

import en from 'translations/translations/en'
import fr from 'translations/translations/fr'

set('fr', fr)
set('en', en)

export const setLocale = (loc) => {
  locale(loc)
}

fallback('en')

export const locales = ['en', 'fr']

export { t }
