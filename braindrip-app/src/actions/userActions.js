// import got from 'got';


// Create Redux action types
export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'

// Create Redux action creators that return an action
export const _loginUser = () => ({
    type: LOGIN_USER,
})
  
export const _loginUserSuccess = user => ({
    type: LOGIN_USER_SUCCESS,
    payload: user,
})

export const _loginUserFailure = () => ({
    type: LOGIN_USER_FAILURE,
})

// Combine them all in an asynchronous thunk
export function loginUser(user) {
    return async dispatch => {
        dispatch(_loginUserSuccess(user));
    }
}