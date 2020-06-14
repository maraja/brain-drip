// import got from 'got';


// Create Redux action types
export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'

export const SIGNUP_USER = 'SIGNUP_USER'
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS'
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE'

export const LOGOUT_USER = 'LOGOUT_USER'

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


export const _signupUser = () => ({
    type: SIGNUP_USER,
})
  
export const _signupUserSuccess = user => ({
    type: SIGNUP_USER_SUCCESS,
    payload: user,
})

export const _signupUserFailure = () => ({
    type: SIGNUP_USER_FAILURE,
})


export const _logoutUser = () => ({
    type: LOGOUT_USER,
    payload: null
})


// Combine them all in an asynchronous thunk
export function logoutUser() {
    return async dispatch => {
        dispatch(_logoutUser());
    }
}

// Combine them all in an asynchronous thunk
export function loginUser(user) {
    return async dispatch => {
        dispatch(_loginUserSuccess(user));
    }
}

// Combine them all in an asynchronous thunk
export function signupUser(user) {
    return async dispatch => {
        dispatch(_signupUserSuccess(user));
    }
}