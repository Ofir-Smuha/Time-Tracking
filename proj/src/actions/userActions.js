import { SET_LOGGED_IN, SET_LOGGED_OUT } from 'actions/types'

export const setLoggedIn = (email, userId) => ({
  type: SET_LOGGED_IN,
  email,
  userId
})

export const setLoggedOut = () => ({
  type: SET_LOGGED_OUT
})