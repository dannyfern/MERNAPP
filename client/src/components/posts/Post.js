import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deletePostById, getPostFromId } from '../../config/api'
import axios from 'axios'

const Post = ({ history, match  }) => {
    // console.log('POST ', post)
    // console.log(user)

    // const [postData, setPost] = useState({})

    const dispatch = useDispatch()
    // dispatch(getPostFromId(match.params.id))

    const posts = useSelector(state => state.postReducer)
    // console.log(posts)
    let post 
    if (posts){ 
        console.log(posts)
        post = posts.filter(x => x._id === match.params.id)
        post = post[0]

    }







    



    const handleLikes = () => {
        // logic for likes here
        
    }

    const deletePost = (e) => {
        e.preventDefault()
        dispatch(deletePostById(match.params.id))
        history.push('/')
    }

    const editPost = (e) => {
        e.preventDefault()


    }


    // console.log(post.user)
    const getProfile = async () => {
        const profile = await axios.get('http://localhost:5000/api/profile/')
        console.log(profile)
    }
    // getProfile()



    if (!post) {
        return null
    } else {
        const { title, category, text, likes, user } = post
        // console.log("POST", post)
        // console.log(match.params.id)
        
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
                            {/* <h5 id="postDate">Posted {modified_date.toLocaleString()}</h5> */}
                            <h3>{category}</h3>
                            
                            <p>{text}</p>
                        </div>
                        <div className="authorInfo">
                            <p>{user}</p>
                            <p>author description</p>

                            <div className="postUpvotes">
                                <p onClick={handleLikes} className="upvoteButton">++ {likes && likes.length}</p>
                            
                            </div>
                            {
                                user === localStorage.userId && 
                                <button onClick={deletePost} >Delete post</button>
                            }
                            {
                                user === localStorage.userId && 
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


export default Post