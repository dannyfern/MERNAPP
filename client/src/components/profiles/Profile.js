import React from 'react'
import { Link } from 'react-router-dom'

// how to map over links and display them with matching icon?

const Profile = ({ profile }) => {
    console.log('DETAILS', profile)

    // destructuring data variables
    const { detailsData, skills, currentroles, pastroles, prospects, qualifications, socials, portfolio } = profile

    const { username, name, location, interests, bio } = detailsData

    const { jobtitle, business } = currentroles
    const { linkedin, twitter, instagram, facebook } = socials
    const { github, resume } = portfolio
    
    



    // to display links : 
    const socialLinks = Object.entries(socials)
    const portfolioLinks = Object.entries(portfolio)

    const filteredSocial = socialLinks.filter(x => x[1] !== "")
    const filteredPortfolio = portfolioLinks.filter(x => x[1] !== "")
    const correctLinks = filteredSocial.concat(filteredPortfolio)

    const DisplayLinks = ({ correctLinks }) => {

        

        return (
            <div>
                <div className="linkDiv">
                    {
                        correctLinks && correctLinks.map((x, i) => {
                            return (
                                <Link to={x[1]}><li key={i} className="links" >{x[0]}</li></Link> 
                            )
                        })
                    } 
                    
                </div>
            </div>
        )
    }

    const DisplaySkills = ({ skills }) => {


        return (
            <div className="skillsDiv">
                {
                    skills.length > 0 &&
                    skills.map((x, i) => {
                        return (
                            <p className="skills">{x}</p>
                            
                        )
                    })
                }
            </div>

        )
    }

    return(
        <div id="profile">
            <Link to={`/profiles/edit/${profile._id}`}><button>Edit profile</button></Link>

            <div className="profileImgName">
                <div className="profileImageDisplay">
                    <div className="profileImg">

                    </div>

                    { prospects &&
                        <div className="status-desktop">
                            {prospects}
                        </div>

                    }
                    

                </div>

                <div className="nameLocation">
                    <h2 id="username">@{username}</h2>
                    <div className="lastChildren">
                        <h3 id="name">{firstName} {lastName}</h3>
                        <h4 id="location">{location}</h4>
                    </div>
                    
                </div>

                <div className="personalDetails">
                    <div className="status">
                        {status && status}
                    </div>
                    <div className="experienceDesc">
                        <div className="experienceLevel">
                            <p><span className="bold">{skillLevel && skillLevel}</span> Developer with <span className="bold">{yearsOfExperience && yearsOfExperience}</span> year of experience</p>
                        </div>
                        { interests.length > 0 && 
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
                        }
                        
                    </div>
                </div>

                

            </div>


            <div className="bioAndLinks">
                <div className="bio">
                    {bio && bio}
                </div>
                
                <div className="linksDisplay">
                    <h1>Get in touch</h1>
                    <DisplayLinks correctLinks={correctLinks}/>

                </div>

            </div>
            
            
            

            
            <div className="workAndEdu">
                <div className="workDisplay">
                    <h1>Current Role</h1>
                    <h2>{currentTitle && currentTitle} at {currentCompany && currentCompany}</h2>
                    <h3>{currentStartDate.slice(0, 4)} - present</h3>
                    {
                        pastRoles.length > 0 &&
                        <h1>Past Roles ^</h1>
                    }
                    
                </div>

                <div className="eduDisplay">
                    <h1>Education</h1>
                    <h2>{recentSchool} ({recentStartDate.slice(0, 4)} - {recentEndDate.slice(0, 4)})</h2>
                    <h3>{recentDegree}</h3>
                    {
                        pastEducation.length > 0 &&
                        <h1>Previous Education ^</h1>
                    }
                </div>

            </div>
            

            <div className="skillsDisplay">
                <h1>Technical Skills/Languages</h1>
                <DisplaySkills skills={technical} />
                {/* <h1>Soft Skills</h1>
                <DisplaySkills skills={soft} /> */}
            </div>
            <div className="postsDisplay">
                <h1>Blog Posts</h1>
            </div>

        </div>
    )
}


export default Profile 