import axios from 'axios';
import {
    POST_QUANTITATIVESPS_REQUEST,
    POST_QUANTITATIVESPS_SUCCESS,
    POST_QUANTITATIVESPS_FAIL,

    FETCH_QUANTITATIVESPS_REQUEST,
    FETCH_QUANTITATIVESPS_SUCCESS,
    FETCH_QUANTITATIVESPS_FAIL,    
} from '../constants/quantitativeConstants'


export const postQuantitativeSpsec = (result) => async (dispatch, getState) => {
    try {
        dispatch({
            type: POST_QUANTITATIVESPS_REQUEST,
        })
        const {
            userLogin: { userInfo },
        } = getState()
       
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            'api/users/postQuantitativeSpsec/',
            result,
            config
        )

        dispatch({
            type: POST_QUANTITATIVESPS_SUCCESS,
            payload: data
        })
        

    } catch (error) {
        dispatch({
            type: POST_QUANTITATIVESPS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}




export const getQuantitativeSpsec = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_QUANTITATIVESPS_REQUEST
        })

       
        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            'api/users/getQuantitativeSpsec/',
            config
        )

        dispatch({
            type: FETCH_QUANTITATIVESPS_SUCCESS,
            payload: data
        })

        

    } catch (error) {
        dispatch({
            type: FETCH_QUANTITATIVESPS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

