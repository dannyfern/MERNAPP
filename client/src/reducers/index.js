import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import postReducer from './post'
import profile from './profile'



export default combineReducers({
    alert,
    auth,
    profile,
    postReducer

});