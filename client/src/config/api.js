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
  CREATE_POST,

  CLEAR_PROFILE,

  CURRENT_POST,
  DELETE_POST,
  UPDATED_POST


} from '../actions/constants'

import history from "./../history";

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
    // history.push('/dashboard')
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
  dispatch({ type: CLEAR_PROFILE });
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

export const getAllPosts = (newPosts) => async dispatch =>{

  try {

    const { data } = await axios.get('/api/posts');
    if (newPosts){
      dispatch({type: ALL_POSTS, payload: newPosts })
    } else {
      dispatch({ type: ALL_POSTS, payload: data })

    }

    // console.log("DATA", data)
    
  } catch (err) {

    // const errors = err.response.data.errors;
    console.log(err)
    
    // if(err) {
    //   err.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    // }
    dispatch({
      type: POST_ERROR
    });
  }
}

//  create post

export const createPost = (post) => async dispatch => {
  if(localStorage.token) {
    setAuthToken(localStorage.token);
  } 


  try {
    const res = await axios.post('/api/posts', post)
    // .then(x => console.log("the data", x.data))
    // .then(x => history.push(`/posts/${x.data._id}`))

    console.log(res)

    dispatch({
      type: CREATE_POST,
      payload: res.data
    })

    history.push(`/posts/${res.data._id}`)
    // let url = `/posts/${res.data._id}`
    


  } catch (error) {
    console.log(error)
  }
}


// export const setAllPosts = (newPosts) => async dispatch => {
//   console.log(newPosts)

//   try {
//     dispatch({
//       type: ALL_POSTS,
//       payload: newPosts
//     })

//   } catch(err) {
//     console.log(err)
//   }


// }

// get post by id

export const getPostFromId = (id) => async dispatch => {

  try {
    const { data } = await axios.get(`/api/posts/${id}`)
    // console.log("correct: ", data)

    dispatch({
      type: CURRENT_POST,
      payload: data
    })


  } catch (err) {
    console.log(err)
  }
}

// edit post
export const editPost = (id, updatedPost) => async dispatch => {

  try{

    const res = await axios.post(`/api/posts/edit/${id}`, updatedPost)

    dispatch({
      type: UPDATED_POST,
      payload: res.data
    })
    return res.data


  } catch (err) {
    console.log(err)
  }
}


// delete post

export const deletePostById = (id) => async dispatch => {
  if(localStorage.token) {
    setAuthToken(localStorage.token);
  } 


  try {
    console.log("hello world")
    const { data } = await axios.delete(`/api/posts/${id}` )
    
    // .then(x => console.log(x))

    // dispatch({
    //   type: DELETE_POST,
    //   payload: data
    // })
  } catch (err) {
    console.log(err)
  }
}
