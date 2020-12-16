import React from 'react'
import { Link } from 'react-router-dom'

const Profiles = () => {


    return(
        <div>
            <div className="heading">
                <h1>Profiles</h1>
                <Link to="/profiles/new">New Profile</Link>
            </div>
            
        </div>
    )
}


export default Profiles