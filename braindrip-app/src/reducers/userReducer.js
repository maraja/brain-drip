// FOR TESTING

import * as actions from '../actions/userActions'

export const initialState = {
  user: null,
  loading: false,
  hasErrors: false,
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN_USER:
      return { ...state, loading: true }
    case actions.LOGIN_USER_SUCCESS:
      return { user: action.payload, loading: false, hasErrors: false }
    case actions.LOGIN_USER_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}