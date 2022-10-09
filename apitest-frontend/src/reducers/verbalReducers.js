import {
    POST_VERBALSPS_REQUEST,
    POST_VERBALSPS_SUCCESS,
    POST_VERBALSPS_FAIL,

    FETCH_VERBALSPS_REQUEST,
    FETCH_VERBALSPS_SUCCESS,
    FETCH_VERBALSPS_FAIL,    
} from '../constants/verbalConstants'


export const postVerbalSpsecReducer = (state = {}, action) => {
    switch (action.type) {
        case POST_VERBALSPS_REQUEST:
            return { loading: true }

        case POST_VERBALSPS_SUCCESS:
            return { loading: false, success: true,}

        case POST_VERBALSPS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}



export const fetchVerbalSpsecReducer = (state = { results: [] }, action) => {
    switch (action.type) {
        case FETCH_VERBALSPS_REQUEST:
            return { loading: true }

        case FETCH_VERBALSPS_SUCCESS:
            return { loading: false, results: action.payload }

        case FETCH_VERBALSPS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
