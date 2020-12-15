import React from 'react'
import {Link} from 'react-router-dom'

const Post = ({history, post}) => {


    if (!post) {
        return null
    } else {
        const { title, category, content, modified_date } = post
        console.log("POST", post)
        
        return (
            <div>
                <div>
                    <Link to={`/posts/${post._id}`}>
                        <h1>{title}</h1>
                    </Link>
                    <h3>{category}</h3>
                    <h5>{modified_date.toLocaleString()}</h5>
                    <p>{content}</p>
                </div>
            </div>
        )
    }
}


export default Post