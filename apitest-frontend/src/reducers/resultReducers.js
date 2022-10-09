import {
    POST_RESULT_REQUEST,
    POST_RESULT_SUCCESS,
    POST_RESULT_FAIL,

    FETCH_RESULT_REQUEST,
    FETCH_RESULT_SUCCESS,
    FETCH_RESULT_FAIL,    
} from '../constants/resultConstants'


export const postResultReducer = (state = {}, action) => {
    switch (action.type) {
        case POST_RESULT_REQUEST:
            return { loading: true }

        case POST_RESULT_SUCCESS:
            return { loading: false, success: true, }

        case POST_RESULT_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}



export const fetchResultReducer = (state = { results: [] }, action) => {
    switch (action.type) {
        case FETCH_RESULT_REQUEST:
            return { loading: true }

        case FETCH_RESULT_SUCCESS:
            return { loading: false, results: action.payload }

        case FETCH_RESULT_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
