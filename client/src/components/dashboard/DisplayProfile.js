import React from 'react'
import Profiles from '../profiles/Profiles'

const DisplayProfile = ({ profile }) => {
    console.log(profile)

    const { bio, blogPostDescription, currentroles, dateofbirth, 
    interests, location, name, pastroles, portfolio, prospects, 
    qualifications, skills, username, user } = profile

    const { avatar } = user


    return (
        <div id="profileDiv">
            


        </div>
    )

}

export default DisplayProfile