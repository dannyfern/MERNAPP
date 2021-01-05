import React from 'react'
import { Link } from 'react-router-dom'

const Profile = ({ profile }) => {
    console.log(profile)
    const { detailsData, skillsData, workData, educationData, linkData } = profile
    const { username, firstName, lastName, location, phoneNumber, birthday, interests, bio, briefDescription } = detailsData


    const { status, currentTitle, currentCompany, currentStartDate, pastRoles } = workData
    const { recentSchool, recentDegree, recentStartDate, recentEndDate, pastEducation } = educationData

    const { technical, soft, skillLevel, yearsOfExperience } = skillsData
    // const { linkedIn, twitter, instagram, facebook, portfolio, github, resume, additionalLinks } = linkData
    const links = Object.entries(linkData)
    console.log(links)

    return(
        <div id="profile">
            <div className="profileImageDisplay">

            </div>
            <div className="personalDetails">
                <div>
                    <h2 id="username">@{username}</h2>
                    <h3 id="name">{firstName} {lastName}</h3>
                    <h4 id="location">{location}</h4>
                </div>
                <div className="status">
                    {status}
                </div>
                <div className="experienceDesc">
                    <div>
                        <p><span className="bold">{skillLevel}</span> Developer with</p>
                        <p><span className="bold">{yearsOfExperience}</span> year of experience</p>
                    </div>
                    <div>
                        <h2>Interested in:</h2>
                        <p>
                            {
                                interests.map((x, index) => {
                                    return (`${x}, ` )
                                })
                            }  
                        </p>

                    </div>
                    
                </div>
                <div className="bio">
                    {bio}
                </div>
            </div>
            <div className="linksDisplay">
                <h1>Get in touch</h1>
                <div>
                    
                </div>

            </div>
            <div className="workDisplay">
                <h1>Current Role</h1>
                <h2>{currentTitle} at {currentCompany}</h2>
                <h3>{currentStartDate} - present</h3>
                <h1>Past Roles ^</h1>
            </div>
            <div className="eduDisplay">
                <h1>Education</h1>
                <h2>{recentSchool}({recentStartDate} - {recentEndDate})</h2>
                <h3>{recentDegree}</h3>
                <h1>Previous Education ^</h1>
            </div>
            <div className="skillsDisplay">
                <h1>Technical Skills/Languages</h1>

                <h1>Soft Skills</h1>
            </div>
            <div className="postsDisplay">
                <h1>Blog Posts</h1>
            </div>

        </div>
    )
}


export default Profile 