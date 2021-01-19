import axios from 'axios';
import { setAlert } from './alert';

import {
    ALL_PROFILE,
    GET_PROFILES,
    CLEAR_PROFILE,
    DELETE_ACCOUNT,
    PROFILE_ERROR,
    UPDATE_PROFILE,

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

// ALL PROFILES

export const getProfiles = () => async dispatch => {
    dispatch({ type: CLEAR_PROFILE });
    try {
        const res = await axios.get('/api/profile');
        console.log(res)

        dispatch({
            type: GET_PROFILES,
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
// PROFILE BY ID
export const getProfileId = (userId) => async dispatch => {
    // dispatch({ type: CLEAR_PROFILE });
    try {
        const res = await axios.get(`/profile/user/${userId}`);

        dispatch({
            type: GET_PROFILES,
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
};

// EXPERIENCE ROUTE
export const addExperience = (formData, history) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        const res = await axios.put('/api/profile/experience', formData, config);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        }); 

        dispatch(setAlert('Experience Successfully Added', 'success'));

        history.push('/dashboard');
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        
        dispatch({
            type:PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }};

    // qualifications route

    export const addQualification = (formData, history) => async dispatch => {
        try {
            const config = {
                headers: {
                    'Content-Type' : 'application/json'
                }
            }
    
            const res = await axios.put('/api/profile/qualification', formData, config);
    
            dispatch({
                type: UPDATE_PROFILE,
                payload: res.data
            }); 
    
            dispatch(setAlert('Qualifications Successfully Added', 'success'));
    
            history.push('/dashboard');
        } catch (err) {
            const errors = err.response.data.errors;
    
            if(errors) {
                errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
            }
            
            dispatch({
                type:PROFILE_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            });
        }};

// Delete Experiences
export const deleteExperience = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/profile/experience/${id}`);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Experience Deleted', ' Success'))
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
};

// Delete qaulification

export const deleteQualification = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/profile/qualification/${id}`);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Qualification Deleted', ' Success'))
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
};

// DELETE EVERYTHING

export const deleteAccount = () => async dispatch => {
    if(window.confirm('Confirmation of Nuclear Codes')) {

    }
    try {
        const res = await axios.delete(`/api/profile`);

        dispatch({
            type: CLEAR_PROFILE,
            TYPE: DELETE_ACCOUNT,
        });

        dispatch(setAlert('Account Deleted'))
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
};