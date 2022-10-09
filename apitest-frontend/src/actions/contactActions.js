import axios from 'axios';
import {
    POST_CONTACTMESSAGE_REQUEST,
    POST_CONTACTMESSAGE_SUCCESS,
    POST_CONTACTMESSAGE_FAIL,  
    FETCH_CONTACTMESSAGE_REQUEST,
    FETCH_CONTACTMESSAGE_SUCCESS,
    FETCH_CONTACTMESSAGE_FAIL,      
} from '../constants/contactConstants';


export const postContactMessage = (result) => async (dispatch, getState) => {
    try {
        dispatch({
            type: POST_CONTACTMESSAGE_REQUEST,
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
            'api/users/postContactMessage/',
            result,
            config
        )

        dispatch({
            type: POST_CONTACTMESSAGE_SUCCESS,
            payload: data
        })
        

    } catch (error) {
        dispatch({
            type: POST_CONTACTMESSAGE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const getContactMessage = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_CONTACTMESSAGE_REQUEST
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
            'api/users/getContactMessage/',
            config
        )

        dispatch({
            type: FETCH_CONTACTMESSAGE_SUCCESS,
            payload: data
        })

        

    } catch (error) {
        dispatch({
            type: FETCH_CONTACTMESSAGE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


