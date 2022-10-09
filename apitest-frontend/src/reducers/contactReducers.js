import {
    POST_CONTACTMESSAGE_REQUEST,
    POST_CONTACTMESSAGE_SUCCESS,
    POST_CONTACTMESSAGE_FAIL,
    FETCH_CONTACTMESSAGE_REQUEST,
    FETCH_CONTACTMESSAGE_SUCCESS,
    FETCH_CONTACTMESSAGE_FAIL,       
} from '../constants/contactConstants'


export const postContactMessageReducer = (state = {}, action) => {
    switch (action.type) {
        case POST_CONTACTMESSAGE_REQUEST:
            return { loading: true }

        case POST_CONTACTMESSAGE_SUCCESS:
            return { loading: false, success: true, }

        case POST_CONTACTMESSAGE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const fetchContactMessageReducer = (state = { results: [] }, action) => {
    switch (action.type) {
        case FETCH_CONTACTMESSAGE_REQUEST:
            return { loading: true }

        case FETCH_CONTACTMESSAGE_SUCCESS:
            return { loading: false, results: action.payload }

        case FETCH_CONTACTMESSAGE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}