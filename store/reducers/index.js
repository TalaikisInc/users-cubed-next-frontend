import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import auth from 'store/reducers/auth'
import utils from 'store/reducers/utils'

export default combineReducers({
  auth,
  utils,
  form
})
