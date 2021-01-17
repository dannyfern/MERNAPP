import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CREATE_PROFILE_SUCCESS,
    PROFILE_LOADED,
    PROFILE_LOAD_ERROR,
    PROFILE_ERROR, 
    
}   from '../actions/constants';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    const { type, payload } = action;
    
    switch(type) {
        case USER_LOADED:
            
            // console.log("USER ID !:", localStorage)
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token );
            
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
        case REGISTER_FAIL: 
        case AUTH_ERROR: 
        case LOGIN_FAIL:
        case LOGOUT: 
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false

            };
        
        default:
            return state;
    }
};