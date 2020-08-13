export const types = {
    REQUEST: "MOVIE_REQUEST",
    SUCCESS: "MOVIE_SUCCESS",
    ERROR: "MOVIE_ERROR"
}

const initialState = {
    loading: false,
    movie: {},
    error: ""
}

export default function movieReducer(state = initialState, action) {
    switch(action.type) {
        case types.REQUEST:
            return { ...state, loading: true, error: "" }
        case types.SUCCESS:
            return { ...state, loading: false, movie: action.payload, error: "" }
        case types.ERROR:
            return { ...state, loading: false, error: action.error }
        default:
            return state
    }
}

export function movieActionsCreator() {
    return {
        getMovieRequest: () => ({
            type: types.REQUEST
        }),
        getMovieSuccess: (payload) => ({
            type: types.SUCCESS,
            payload
        }),
        getMovieError: (error) => ({
            type: types.ERROR,
            error
        })
    }
}