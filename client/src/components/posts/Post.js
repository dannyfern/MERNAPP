import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deletePostById, getPostFromId, toggleLikes } from '../../config/api'
import axios from 'axios'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { currentProfile, getProfileId } from '../../actions/profile'



const Post = ({ history, match, currentProfile, auth: { user }, profile: { profile, loading}   }) => {
    const currentUser = user
    // console.log(currentUser)

    const [postUser, setPostUser] = useState(null)
 

    const dispatch = useDispatch()
    let posts = useSelector(state => state.postReducer)
    // console.log(posts)
    
    posts = [...posts]
    let post = posts && posts.filter(x => x._id === match.params.id)[0] 
    console.log(post.user) 
    

    
    // console.log(post.user)
    
    // let postUser = post.user
    // setPostUser(post.user)
    // postUser = 
    // console.log(postUser)

    
    
    useEffect(() => {
        post && setPostUser(post.user)
        dispatch(getProfileId(postUser))
        
        
    }, [dispatch, post, postUser])

    // console.log(postUser)

    let profiles = useSelector(state => state.profile)
    console.log(profiles)
    profiles = profiles.profile
    let correctProfile = profiles


    


    // let correctProfile = profiles.filter(x => x.user._id === post.user)
    console.log(correctProfile)
    
    const blogpostdescription = correctProfile.blogpostdescription
    const username = correctProfile.username
        // const { blogpostdescription, username } = correctProfile
    const profileId = correctProfile._id


    
    







    


    // user only likes once
    // 
    const handleLikes = () => {
        
       
        dispatch(toggleLikes(post._id))
        
        

        
    }

    const deletePost = (e) => {
        e.preventDefault()
        dispatch(deletePostById(match.params.id))
        history.push('/')
    }






    if (!post) {
        return null
    } else {
        const { title, category, text, likes, user, modified_date } = post

        
        return (
            <div>
                <div>
                    <div className="postBgImage"></div>
                    <div className="singlePostTitle">
                        <Link to={`/posts/${post._id}`} className="singleTitleLink">
                            <h1 id="postTitle">{title}</h1>
                        </Link>
                    </div>
                    <div className="backToPosts">
                        <Link to="/posts"><button>Back to Posts</button></Link>
                    </div>
                    <div id="postSections" className="width70">
                        
                        <div className="singlePostInfo">
                            <h5 id="postDate">Posted {modified_date.toLocaleString().slice(0, 10)}</h5>
                            <h3>{category}</h3>
                            
                            <p>{text}</p>
                        </div>
                        <div className="authorInfo">
                            {
                                username && blogpostdescription && profileId &&
                                <div>
                                    <p className="postUsername">@{username && username}</p>
                                
                                    <p className="postDesc">{
                                        blogpostdescription && blogpostdescription
                                    }
                                    </p>
                                </div>
                            }
                            
                            

                            <div className="postUpvotes">
                                <p onClick={handleLikes} className="upvoteButton">++ {likes && likes.length}</p>
                            
                            </div>
                            <div className="crudBtns">

                                {
                                    currentUser && currentUser._id === user && 
                                    <button className="crudB" onClick={deletePost} >Delete post</button>
                                }
                                {
                                    currentUser && currentUser._id === user && 
                                    <Link to={`/posts/edit/${match.params.id}`}>
                                        <button className="crudB" >Edit post</button>
                                    </Link>
                                    
                                }
                            </div>

                        </div>
                        
                        
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}

Post.propTypes = {
    // currentProfile: PropTypes.func.isRequired,
    getProfileId: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});


export default connect(mapStateToProps, { getProfileId })(Post);
