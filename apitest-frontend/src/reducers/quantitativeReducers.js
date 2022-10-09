import axios from 'axios';
import {
    POST_QUANTITATIVESPS_REQUEST,
    POST_QUANTITATIVESPS_SUCCESS,
    POST_QUANTITATIVESPS_FAIL,

    FETCH_QUANTITATIVESPS_REQUEST,
    FETCH_QUANTITATIVESPS_SUCCESS,
    FETCH_QUANTITATIVESPS_FAIL,    
} from '../constants/quantitativeConstants'


// export const postQuantitativeSpsecReducer = (state = {}, action) => {
//     switch (action.type) {
//         case POST_QUANTITATIVESPS_REQUEST:
//             return { loading: true }

//         case POST_QUANTITATIVESPS_SUCCESS:
//             return { loading: false, resultPost: action.payload }

//         case POST_QUANTITATIVESPS_FAIL:
//             return { loading: false, error: action.payload }

//         default:
//             return state
//     }
// }

export const postQuantitativeSpsecReducer = (state = {}, action) => {
    switch (action.type) {
        case POST_QUANTITATIVESPS_REQUEST:
            return { loading: true }

        case POST_QUANTITATIVESPS_SUCCESS:
            return { loading: false, success: true, }

        case POST_QUANTITATIVESPS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const fetchQuantitativeSpsecReducer = (state = { results: [] }, action) => {
    switch (action.type) {
        case FETCH_QUANTITATIVESPS_REQUEST:
            return { loading: true }

        case FETCH_QUANTITATIVESPS_SUCCESS:
            return { loading: false, results: action.payload }

        case FETCH_QUANTITATIVESPS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
