// For testing

// Create Redux action types
export const GET_PATHS = 'GET_PATHS'
export const GET_PATHS_SUCCESS = 'GET_PATHS_SUCCESS'
export const GET_PATHS_FAILURE = 'GET_PATHS_FAILURE'

// Create Redux action creators that return an action
export const getPaths = () => ({
    type: GET_PATHS,
})
  
export const getPathsSuccess = paths => ({
    type: GET_PATHS_SUCCESS,
    payload: paths,
})

export const getPathsFailure = () => ({
    type: GET_PATHS_FAILURE,
})

// Combine them all in an asynchronous thunk
export function fetchPaths() {
    return async dispatch => {
        dispatch(getPaths())

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()

            dispatch(getPathsSuccess(data))
        } catch (error) {
            dispatch(getPathsFailure())
        }
    }
}