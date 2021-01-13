import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getPostFromId } from '../../config/api'


const Post = ({ history, post, match  }) => {
    // console.log('POST ', post)
    getPostFromId(match.params.id)





    const posts = useSelector(state => state.postReducer)
    console.log(posts)
    let selectedPost = posts.filter(x => x._id === match.params.id)
    console.log(selectedPost)
    selectedPost = selectedPost[0]



    const handleLikes = () => {
        // logic for likes here
        
    }



    if (!selectedPost) {
        return null
    } else {
        const { title, category, text, likes, user } = selectedPost
        // console.log("POST", post)
        
        return (
            <div>
                <div>
                    <div className="singlePostTitle">
                        <Link to={`/posts/${selectedPost._id}`} className="singleTitleLink">
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
                        </div>
                        
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}


export default Post