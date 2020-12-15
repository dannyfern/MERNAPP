import React from 'react'
import Posts from './posts/Posts'



const Home = ({postsData}) => {
    const props = {postsData}


    return (
        <div>
            <div className="heading">
                <h2>home page</h2>
            </div>
            

            <Posts {...props} />


        </div>
    )
}



export default Home