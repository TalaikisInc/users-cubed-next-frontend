import { setLanguage, setError } from 'store/actions'

export const localeDispatcher = (reduxStore, query) => {
  if (query.locale) {
    reduxStore.dispatch(setLanguage(query.locale))
  }
}

export const errorDispatcher = (reduxStore, err) => {
  if (err) {
    reduxStore.dispatch(setError(err))
  } else {
    reduxStore.dispatch(setError(null))
  }
}
