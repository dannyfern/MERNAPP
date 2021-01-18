import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deletePostById, getPostFromId, toggleLikes } from '../../config/api'
import axios from 'axios'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { currentProfile, getProfileId } from '../../actions/profile'



const Post = ({ history, match, currentProfile, auth: { user }, profile: { profile, loading}   }) => {
    // console.log(user)
    const currentUser = user



    const dispatch = useDispatch()

    const posts = useSelector(state => state.postReducer)

    let post 
    if (posts){ 
        // console. log(posts)
        post = posts.filter(x => x._id === match.params.id)
        post = post[0]

    }
    const postUser = post.user
    console.log(postUser)
    
    useEffect(() => {
        dispatch(getProfileId(postUser))
        
    }, [dispatch, postUser])

    // console.log(postUser)

    let profiles = useSelector(state => state.profile)
    profiles = profiles.profiles
    console.log(profiles)
    const { blogpostdescription, username } = profiles
    // console.log(blogpostdescription)
    // const avatar = profiles.user.avatar

    // const [correctPost, setPost] = useState(post)







    


    // user only likes once
    // 
    const handleLikes = () => {
        // console.log(currentUser)
        // const currentId = currentUser._id
        // if (post.likes.includes(currentId)){
        //     let index = post.likes.findIndex(x => x === currentId)
        //     post.likes.splice(index, 1)
        // } else {
        //     post.likes.push(currentId)
        //     console.log(post.likes)
        // }
       
        dispatch(toggleLikes(post._id))
        // console.log(post.likes)
        
        

        
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
                    <div className="singlePostTitle">
                        <Link to={`/posts/${post._id}`} className="singleTitleLink">
                            <h1 id="postTitle">{title}</h1>
                        </Link>
                    </div>
                    <div id="postSections" className="width70">
                        
                        <div className="singlePostInfo">
                            <h5 id="postDate">Posted {modified_date.toLocaleString().slice(0, 10)}</h5><br></br>
                            <h3>{category}</h3>
                            
                            <p>{text}</p>
                        </div>
                        <div className="authorInfo">
                            {/* <img src={avatar} alt="avatar"  id="postAvatar"/> */}
                            <p className="postUsername">@{username}</p>
                            
                            <p className="postDesc">{
                                blogpostdescription && blogpostdescription
                            }
                            </p>

                            <div className="postUpvotes">
                                <p onClick={handleLikes} className="upvoteButton">++ {likes && likes.length}</p>
                            
                            </div>
                            {
                                currentUser && currentUser._id === user && 
                                <button onClick={deletePost} >Delete post</button>
                            }
                            {
                                currentUser && currentUser._id === user && 
                                <Link to={`/posts/edit/${match.params.id}`}>
                                    <button>Edit post</button>
                                </Link>
                                
                            }
                        </div>
                        
                        
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}

Post.propTypes = {
    currentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});


export default connect(mapStateToProps, {currentProfile})(Post);
