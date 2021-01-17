import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deletePostById, getPostFromId } from '../../config/api'
import axios from 'axios'

const Post = ({ history, match  }) => {


    const dispatch = useDispatch()

    const posts = useSelector(state => state.postReducer)

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