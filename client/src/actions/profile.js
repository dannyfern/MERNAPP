import axios from 'axios';
import { setAlert } from './alert';

import {
    ALL_PROFILE,
    PROFILE_ERROR,
} from './constants';

// WILL GET THE CURRENT USERS PROFILE UPON SIGN IN IF NOT SIGN UP
export const currentProfile = () => async dispatch => {
    try {
        const res = await axios.get('api/profile/me');

        dispatch({
            type: ALL_PROFILE,
            payload: res.data
        }); 
    } catch (err) {
        const errors = err.response.data.errors;
    
        if(errors) {
          errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type:PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

// CREATE DELETE UPDATE PROFILE 
export const createProfile = (formData, history, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        const res = await axios.post('/api/profile', formData, config);

        dispatch({
            type: ALL_PROFILE,
            payload: res.data
        }); 

        dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

        if(!edit) {
            history.push('/dashboard');
        } 
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        
        dispatch({
            type:PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}