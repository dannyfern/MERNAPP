import React, { Fragment, useEffect, useState } from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import history from "./history";
import Alert from './components/reusable/Alert'

// Redux
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import { loadUser, getAllPosts, getPostFromId } from './config/api';
import  setAuthToken  from './utils/setAuthToken';


// components :
import Navbar from './components/Navbar'
import Home from './components/Home'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './components/privateroutes/PrivateRoute'

import Posts from './components/posts/Posts'
import Post from './components/posts/Post'
import AddPost from './components/posts/AddPost'
import EditPost from './components/posts/EditPost'

import Profile from './components/profile/Profile'
import Profiles from './components/profiles/Profiles'
import BaseProfile from './components/profiles/BaseProfile'
// import Profile from './components/profiles/Profilemeikas'
// import Profiles from './components/profiles/Profilemeika'
import AddProfile from './components/profiles/AddProfile'
import EditProfile from './components/profiles/EditProfile'
import AddExperience from './components/profiles/AddExperience'
import AddQualification from './components/profiles/AddQualification'

import Register from './components/auth/Register'
import SignIn from './components/auth/SignIn'



// styles :
import './styles/Styles.css'
import './styles/Profile.css'
import './styles/Desktop.css'
import './styles/Posts.css'
import './styles/Tablet.css'


const App = () => { 


    const dispatch = useDispatch()


    
    // get blog posts
    useEffect(() => {

       
        dispatch(getAllPosts())

        .catch(y => {
            console.log(y)
        })

        
    }, [])
    const blogPosts = useSelector((state) =>  state.postReducer)

    



    return (
        <div>
            {/* <Provider store={store}> */}
                
                <Router history = {history}>
                <Fragment>
                <Navbar/>  
                <Alert /> 
                    <Switch>
                        <Route exact path="/profiles" component={Profiles} />
                        <Route exact path="/profile/:id" component={Profile} />
                        <Route exact path="/auth/register" component={Register} />
                        <Route exact path="/auth/signin" component={SignIn} />
                        <PrivateRoute exact path="/dashboard" component={Dashboard} />
                        <PrivateRoute exact path="/createprofile" component={BaseProfile} />
                        <PrivateRoute exact path="/editprofile" component={EditProfile} />
                        <PrivateRoute exact path="/addexperience" component={AddExperience} /> 
                        <PrivateRoute exact path="/addqualification" component={AddQualification} />

                        
                        {/* <Route exact path="/profiles" render={(props) => <Profiles {...props} profileData={profiles} />} />
                        <Route exact path="/profiles/new" render={(props) => <AddProfile {...props} profiles={profiles} />} />
                        <Route exact path="/profiles/edit/:id" render={(props) => <EditProfile {...props}   />} />
                        <Route exact path="/profiles/:id" render={(props) => <Profile {...props} />} /> */}
                        
                        <Route exact path="/posts" render={(props) => <Posts {...props} posts={blogPosts} />} />
                        <Route exact path="/posts/new" render={(props) => <AddPost {...props}/>} />
                        <Route exact path="/posts/edit/:id" render={(props) => <EditPost {...props} posts={blogPosts} />} />
                        <Route exact path="/posts/:id" render={(props) => <Post {...props} />} />
                        
                        
                        <Route exact path="/" render={(props) => <Home {...props} posts={blogPosts} />} />

                    </Switch>
                    </Fragment>
                    </Router>
            {/* </Provider> */}
        </div>
                    
                )};


export default App;