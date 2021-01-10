
import React, { Fragment, useEffect, useReducer, useState } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import stateReducer from './config/stateReducer'
import { StateContext } from './config/globalState'
import blogData from './data/post_data'
import profileData from './data/profile_data'
import Alert from './components/reusable/Alert'

// Redux
import { Provider } from 'react-redux';
import store from './store';


// components :
import Navbar from './components/Navbar'
import Home from './components/Home'
import Oopsie from './components/Oopsie'

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






const App = () => {


    const initialState = {
        blogPosts: [],
        loggedInUser: null,
    }

    // const fetchBlogPosts = () => {
    //     getAllBlogPosts().then((blogData) => {
    //         dispatch({
    //             type: "setBlogPosts",
    //             data: blogData
    //         })
    //     }).catch((error) => {
    //         dispatch({
    //             type: "setError",
    //             data: true
    //         })
    //         console.log("an error occured fetching blog posts from the server: ", error)
    //     })
    // }

    const getPostFromId = (id) => {
        return posts.find((t) => t._id === parseInt(id))

    }

    const getProfileFromId = (id) => {

        return profileData.find((p) => p._id === parseInt(id))
    }


    // const [store, dispatch] = useReducer(stateReducer, initialState)
    // const {blogPosts, error} = store


    const [posts, setPosts] = useState([])
    const [profiles, setProfiles] = useState([])


    // set blog posts
    useEffect(() => {
        // fetchBlogPosts()
        setPosts(blogData)
        setProfiles(profileData)
    }, [])

    // add blog posts
    const addPost = (post) => {
        setPosts([...posts, post])
    }

    const addProfile = (profile) => {
        setProfiles([...profiles, profile])
    }

    // next id for blog posts
    const nextId = () => {
        return posts.reduce((acc, cur) => acc._id > cur._id ? acc : cur, {_id: 0})._id + 1
    }


    // const addProfile = (profile) => {
    //     setProfiles([...profiles, profile])
    // }




    return (
        <div>
            <Provider store={store}>
                
                <BrowserRouter >
                <Fragment>
                <Navbar/>  
                <Alert /> 
                    <Switch>

                        <Route exact path="/auth/register" component={Register} />
                        <Route exact path="/auth/signin" component={SignIn} />

                        <Route exact path="/profiles" render={(props) => <Profiles {...props} profileData={profileData} />} />
                        <Route exact path="/profiles/new" component={AddProfile} />
                        <Route exact path="/profiles/edit/:id" render={(props) => <EditProfile {...props} />} />
                        <Route exact path="/profiles/:id" render={(props) => <Profile {...props} profile={getProfileFromId(props.match.params.id)}/>} />
                        
                        
                        <Route exact path="/posts/new" render={(props) => <AddPost {...props} addPost={addPost} nextId={nextId()} />} />
                        <Route exact path="/posts/edit/:id" render={(props) => <EditPost {...props} />} />
                        <Route exact path="/posts/:id" render={(props) => <Post {...props}  post={getPostFromId(props.match.params.id)}/>} />
                        
                        <Route exact path="/" render={(props) => <Home {...props} postsData={posts} />} />

                    </Switch>
                    </Fragment>
                    </BrowserRouter>
            </Provider>
        </div>
                    
                )};


export default App;