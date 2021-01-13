import axios from 'axios';
import { setAlert } from '../actions/alert';
import setAuthToken from '../utils/setAuthToken'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CREATE_PROFILE,
  PROFILE_LOADED,
  PROFILE_ERROR,
  PROFILE_LOAD_ERROR,
  ALL_POSTS,
  POST_ERROR,
  CREATE_POST
} from '../actions/constants'

// to connect to deployed server

// Create an axios instance
export default axios.create({
  baseURL: 'https://localhost:5000',
  timeout: 10000,
  withCredentials: true
});

// Load a user 
export const loadUser = () => async dispatch => {
  if(localStorage.token) {
    setAuthToken(localStorage.token);
  } 

  try {
    
    const res = await axios.get('/api/auth');
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
    // return res.data
    // console.log("USER LOADED", USER_LOADED)
    // console.log("ID: ", res.data)
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
}

// Register a user

export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type' : 'application/json'
    }
  }

  const body = JSON.stringify ({ name, email, password });

  try {
    const res = await axios.post('/api/users', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    
    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
}


// Login a User -------
export const login = ( email, password ) => async dispatch => {
  const config = {
    headers: {
      'Content-Type' : 'application/json'
    }
  }

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    
    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// logout user 

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};





// create profile

export const addProfile = ( newProfile ) => async dispatch => {
  console.log("the profile:", newProfile)
  if(localStorage.token) {
    setAuthToken(localStorage.token);
  } 


  try {
    const { data } = await axios.post('/api/profile', newProfile)
    .then(x =>  console.log("x ", x))

    dispatch({
      type: CREATE_PROFILE,
      payload: data
    });
    console.log
    ('profile data: , ', data)
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(err)
    
    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    // dispatch({
    //   type: PROFILE_ERROR
    // });
  }

}





// get all posts

export const getAllPosts = () => async dispatch =>{

  try {

    const { data } = await axios.get('/api/posts');
    dispatch({ type: ALL_POSTS, payload: data })
    console.log("DATA", data)
    
  } catch (err) {

    const errors = err.response.data.errors;
    
    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: POST_ERROR
    });
  }
}

//  create post

export const createPost = (post) => async dispatch => {
  


  try {
    const { data } = await axios.post('/api/posts', post)
    .then(x => console.log("the data", x))

    dispatch({
      type: CREATE_POST,
      payload: data
    })


  } catch  (error) {
    console.log(error)
  }
}

