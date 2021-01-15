import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deletePostById, getPostFromId } from '../../config/api'


const Post = ({ history, match }) => {
    // console.log('POST ', post)

    // const [post, setPost] = useState({})

    const dispatch = useDispatch()
    // dispatch(getPostFromId(match.params.id))

    const posts = useSelector(state => state.postReducer)
    // console.log(posts)

    let post = posts.filter(x => x._id === match.params.id)

    post = post[0]
    // setPost(selectedPost)






    



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
                        </div>
                        
                        
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}


export default Post