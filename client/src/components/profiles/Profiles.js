import React from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile'

const Profiles = ({ profileData }) => {

    console.log(profileData)



    return(
        <div>
            <div className="heading">
                <h1>Profiles</h1>
                <Link to="/profiles/new">New Profile</Link>
            </div>

            <div className="profileWrapper">
                {
                    profileData.map((x) => {
                        console.log(x)
                        const { detailsData, skillsData, workData  } = x
                        const { firstName, lastName, username, interests } = detailsData
                        const { skillLevel, yearsOfExperience } = skillsData
                        const { status } = workData

                        // const path = `/profiles/${x._id}`
                        return (
                            <Link to={`/profiles/${x._id}`} id="profileLink">
                                <div className="profileCard">
                                    <div className="profileTopSection">
                                        <div className="imagePlaceHolder">
                                            <div className="img"></div>

                                        </div>
                                        <div className="profileTopDetails">
                                            <h2>{firstName} {lastName} </h2>
                                            <h3>@{username} </h3>
                                            <h4>{skillLevel} Developer </h4>
                                        </div>
                                    </div>
                                    <div className="profileBottomSection">
                                        <ul>
                                            <li>{status} </li>
                                            <li>{yearsOfExperience} years of experience </li>
                                            <li>interests: {interests.join(", ")} </li>
                                        </ul>
                                    </div>

                                    
                                </div>
                            </Link>

                        )
                    })
                }
                {/* <Profile profile={profileData}/> */}

            </div>
            
        </div>
    )
}


export default Profiles