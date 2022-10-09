import axios from 'axios';
import {
    POST_RESULT_REQUEST,
    POST_RESULT_SUCCESS,
    POST_RESULT_FAIL,

    FETCH_RESULT_REQUEST,
    FETCH_RESULT_SUCCESS,
    FETCH_RESULT_FAIL,    
} from '../constants/resultConstants'


export const postMyResult = (result) => async (dispatch, getState) => {
    try {
        dispatch({
            type: POST_RESULT_REQUEST,
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
            'api/users/postMyResult/',
            result,
            config
        )

        dispatch({
            type: POST_RESULT_SUCCESS,
            payload: data
        })
        

    } catch (error) {
        dispatch({
            type: POST_RESULT_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}




export const getMyResults = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_RESULT_REQUEST
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
            'api/users/getMyResults/',
            config
        )

        dispatch({
            type: FETCH_RESULT_SUCCESS,
            payload: data
        })

        

    } catch (error) {
        dispatch({
            type: FETCH_RESULT_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

