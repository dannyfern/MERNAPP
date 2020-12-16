import React from 'react'
import Posts from './posts/Posts'



const Home = ({postsData}) => {
    const props = {postsData}


    return (
        <div className="width70">
            <div className="heading">

                <h1>Home</h1>

            </div>
            

            <Posts {...props} />


        </div>
    )
}



export default Home