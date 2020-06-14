// FOR TESTING

import * as actions from '../actions/learningPathActions'

export const initialState = {
  paths: [],
  loading: false,
  hasErrors: false,
}

export default function learningPathReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_PATHS:
      return { ...state, loading: true }
    case actions.GET_PATHS_SUCCESS:
      return { paths: action.payload, loading: false, hasErrors: false }
    case actions.GET_PATHS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}