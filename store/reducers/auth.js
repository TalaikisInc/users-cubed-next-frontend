import { SET_SIGNIN, SET_CURRENT_USER, SET_SIGNUP } from 'store/actionTypes'

const initialState = {
  isAuthenticated: false,
  currentUser: {},
  signupStatus: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGNIN:
      return { ...state, isAuthenticated: action.payload }
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload }
    case SET_SIGNUP:
      return { ...state, signupStatus: action.payload }
    default:
      return state
  }
}
