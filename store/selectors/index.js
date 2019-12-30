import { createSelector } from 'reselect'

const _getCurrentUser = (state) => state.auth.currentUser
const _getLocale = (state) => state.utils.locale
const _getStatus = (state) => state.utils.status
const _getLoading = (state) => state.utils.loading
const _getAuthStatus = (state) => state.auth.isAuthenticated

export const getCurrentUser = createSelector(
  [_getCurrentUser],
  (data) => data
)

export const getLocale = createSelector(
  [_getLocale],
  (data) => data
)

export const getStatus = createSelector(
  [_getStatus],
  (data) => data
)

export const getLoading = createSelector(
  [_getLoading],
  (data) => data
)

export const getAuthStatus = createSelector(
  [_getAuthStatus],
  (data) => data
)
