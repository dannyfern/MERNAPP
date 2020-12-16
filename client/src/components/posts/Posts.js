import React from 'react'
import Post from './Post'
import { Link } from 'react-router-dom'


const Posts = ({postsData}) => {

    const posts = (post) => {
        const { title, category, modified_date } = post
        return (
            <div className="postCard">
                <Link to={`/posts/${post._id}`} className="titleLink">
                    <h1 className="postTitle">{title}</h1>
                </Link>
                <div className="postInfo">
                    
                    <h5>Posted by: (user), {modified_date.toLocaleString()}</h5>
                    <h3>{category}</h3>
                    {/* <p>{content}</p> */}
                    <div className="upVotesDiv">
                        <p className="upVotes">++5</p>
                    </div>
                    
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
            
            <div className="width70 posts">
                <Display />
            </div>


        </div>
    )
}


export default Posts