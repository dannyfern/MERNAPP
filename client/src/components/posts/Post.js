import React from 'react'
import {Link} from 'react-router-dom'

const Post = ({ history, post }) => {


    const handleLikes = () => {
        // logic for likes here
        
    }


    if (!post) {
        return null
    } else {
        const { title, category, text, likes, user } = post
        // console.log("POST", post)
        
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
                        </div>
                        
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}


export default Post