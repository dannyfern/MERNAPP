import React from 'react'
import Post from './Post'

const Posts = ({postsData}) => {


    return(
        <div>
            <div className="heading">
                <h3>
                    posts
                </h3>
            </div>
            
            <div>
                {
                    postsData
                    .sort((a, b) => b.modified_date - a.modified_date)
                    .map((post) => <Post key={post._id} post={post} />)
                }
            </div>

        </div>
    )
}


export default Posts