
import React, { Fragment, useEffect, useState } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import stateReducer from './config/stateReducer'
// import { StateContext } from './config/store'
// import blogData from './data/post_data'
import profileData from './data/profile_data'
import axios from 'axios'

import Alert from './components/reusable/Alert'

// Redux

import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import { loadUser, getAllPosts, getPostFromId } from './config/api';
import  setAuthToken  from './utils/setAuthToken';

import { getAllUserProfiles } from './services/profileServices'



// components :
import Navbar from './components/Navbar'
import Home from './components/Home'
import Oopsie from './components/Oopsie'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './components/privateroutes/PrivateRoute'

import Post from './components/posts/Post'
import AddPost from './components/posts/AddPost'
import EditPost from './components/posts/EditPost'

import Profile from './components/profiles/Profile'
import Profiles from './components/profiles/Profiles'
import AddProfile from './components/profiles/AddProfile'
import EditProfile from './components/profiles/EditProfile'

import Register from './components/auth/Register'
import SignIn from './components/auth/SignIn'



// styles :
import './styles/Styles.css'
import './styles/Profile.css'
import './styles/Desktop.css'
import './styles/Posts.css'
import './styles/Tablet.css'
// import { getAllBlogPosts, getPostFromId } from './services/blogPostServices'



// if(localStorage.token) {
//     setAuthToken(localStorage.token);
//   }; 


const App = () => { 

    const [posts, setPosts] = useState([])
    const [profiles, setProfiles] = useState([])

    const dispatch = useDispatch()
    const blogPosts = useSelector((state) =>  state.postReducer)


    
    // get blog posts
    useEffect(() => {

       
        dispatch(getAllPosts())
        .catch(y => {
            console.log(y)
        })
        
    }, [dispatch])
    


    // const getPostFromId = (id) => {
    //     return posts.find((t) => t._id === id)

    // }

    const getProfileFromId = (id) => {
        console.log(typeof(id))
        console.log(profileData)

        return profiles.find((p) => p._id === parseInt(id))
    }

    


    
    // next id for blog posts
    const nextId = () => {
        return posts.reduce((acc, cur) => acc._id > cur._id ? acc : cur, {_id: 0})._id + 1
    }
    const nextIdProfile = () => {
        return profiles.reduce((acc, cur) => acc._id > cur._id ? acc : cur, {_id: 0})._id + 1
    }




    return (
        <div>
            {/* <Provider store={store}> */}
                
                <BrowserRouter >
                <Fragment>
                <Navbar/>  
                <Alert /> 
                    <Switch>

                        <Route exact path="/auth/register" component={Register} />
                        <Route exact path="/auth/signin" component={SignIn} />
                        <PrivateRoute exact path="/dashboard" component={Dashboard} />


                        <Route exact path="/profiles" render={(props) => <Profiles {...props} profileData={profiles} />} />
                        <Route exact path="/profiles/new" render={(props) => <AddProfile {...props} nextIdProfile={nextIdProfile()} profiles={profiles} />} />
                        <Route exact path="/profiles/edit/:id" render={(props) => <EditProfile {...props} profile={getProfileFromId(props.match.params.id)}  />} />

                        <Route exact path="/profiles/:id" render={(props) => <Profile {...props} profile={getProfileFromId(props.match.params.id)}/>} />
                        
                        
                        <Route exact path="/posts/new" render={(props) => <AddPost {...props} nextId={nextId()} />} />
                        <Route exact path="/posts/edit/:id" render={(props) => <EditPost {...props} />} />
                        <Route exact path="/posts/:id" render={(props) => <Post {...props}  />} />
                        
                        <Route exact path="/" render={(props) => <Home {...props} posts={blogPosts} />} />

                    </Switch>
                    </Fragment>
                    </BrowserRouter>
            {/* </Provider> */}
        </div>
                    
                )};


export default App;