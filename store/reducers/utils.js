import { SET_LOCALE, SET_BURGER, SET_ERROR, SET_LOADING, SET_STATUS } from 'store/actionTypes'

const initialState = {
  error: null,
  loading: false,
  locale: 'en',
  burger: false,
  status: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload }
    case SET_LOADING:
      return { ...state, loading: action.payload }
    case SET_STATUS:
      return { ...state, status: action.payload }
    case SET_LOCALE:
      return { ...state, locale: action.payload }
    case SET_BURGER:
      return { ...state, burger: action.payload }
    default:
      return state
  }
}
