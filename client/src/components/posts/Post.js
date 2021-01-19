import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deletePostById, toggleLikes } from '../../config/api'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { currentProfile, getProfileId } from '../../actions/profile'



const Post = ({ history, match, currentProfile, auth: { user }, profile: { profile, loading}   }) => {
    
    
    const currentUser = user

    const [postUser, setPostUser] = useState(null)

    const dispatch = useDispatch()
    let posts = useSelector(state => state.postReducer)
    
    posts = [...posts]
    console.log(posts)

    let post = posts && posts.filter(x => x._id === match.params.id)[0] 
    

    
   

    let correctProfile = useSelector(state => state.profile.profile)
    // correctProfile && setPostUser(correctProfile)
    
    // useEffect(() => {
    //     post && correctProfile && setPostUser(correctProfile)
    //     // dispatch(getProfileId(postUser))
        
        
    // }, [correctProfile, post])



    // console.log(profiles)
    // console.log(post.user)
    // let correctProfile = profiles.filter(x => x.user._id === post.user)[0]
    // console.log(correctProfile.username)
    // // profiles = profiles.profile
    // // let correctProfile = profiles
    // let username
    // let blogpostdescription
    // if (currentProfile) {
    //     blogpostdescription = correctProfile.blogpostdescription
    //     username = correctProfile.username 
    // }
    // console.log(username)


    


    
   
    // const profileId = correctProfile._id


    
 
    const handleLikes = () => {
        // doesnt quite work yet :(
       
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
        // console.log(user.name)

        
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
                            {correctProfile &&
                                
                                <div>
                                    <p className="postUsername">@{correctProfile.username && correctProfile.username}</p>
                                
                                    <p className="postDesc">{
                                        correctProfile.blogpostdescription && correctProfile.blogpostdescription
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
