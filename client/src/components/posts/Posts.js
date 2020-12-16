import React from 'react'
import Post from './Post'
import { Link } from 'react-router-dom'


const Posts = ({postsData}) => {

    const posts = (post) => {
        const { title, category, content, modified_date } = post
        return (
            <div>
                <Link to={`/posts/${post._id}`}>
                    <h1>{title}</h1>
                </Link>
                <div>
                    <h3>{category}</h3>
                    <h5>Posted on: {modified_date.toLocaleString()}</h5>
                    <p>{content}</p>
                </div>
                    
                
            </div>
        )
    }

    function Display (){
        return (postsData
            .sort((a, b) => b.modified_date - a.modified_date)
            .map((post) => {
                return posts(post)
            })
        )
    }


    return(
        <div>
            <div className="heading">
                <h4>Posts</h4>
            </div>
            
            <div>
                <Display />
            </div>


        </div>
    )
}


export default Posts