import axios from 'axios';
import {
    POST_VERBALSPS_REQUEST,
    POST_VERBALSPS_SUCCESS,
    POST_VERBALSPS_FAIL,

    FETCH_VERBALSPS_REQUEST,
    FETCH_VERBALSPS_SUCCESS,
    FETCH_VERBALSPS_FAIL,    
} from '../constants/verbalConstants'


export const postVerbalSpsec = (result) => async (dispatch, getState) => {
    try {
        dispatch({
            type: POST_VERBALSPS_REQUEST,
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
            'api/users/postVerbalSpsec/',
            result,
            config
        )

        dispatch({
            type: POST_VERBALSPS_SUCCESS,
            payload: data
        })
        

    } catch (error) {
        dispatch({
            type: POST_VERBALSPS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}




export const getVerbalSpsec = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_VERBALSPS_REQUEST
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
            'api/users/getVerbalSpsec/',
            config
        )

        dispatch({
            type: FETCH_VERBALSPS_SUCCESS,
            payload: data
        })

        

    } catch (error) {
        dispatch({
            type: FETCH_VERBALSPS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

