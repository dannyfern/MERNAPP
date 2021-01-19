import React from 'react'
import PropTypes from 'prop-types'

const ProfileDisplay = ({ profile: {
    user: { name, avatar },
    title,
    company,
    location,
    social,
    bio, 
    interests,
    username,
    qualification,
    skills,
    experience, 
    portfolio


  }
    

}) => {
  const { languages, experiencelevel, yearsofexperience} = skills[0]
  
    return(
      <div class="profile-top">
        <div className="profileBgImg"></div>
        <div className="topSection">

          <img
            class="round-img my-1"
            src={avatar}
            alt=""
          />
          <div className="top-center">

            <h1 class="large">{name}</h1>
            <p className="user text-primary">@{username}</p>
            {
              title && 
              <p class="lead"> {title}</p>

            }
            {
              company && 
              <p class="lead"> {company}</p>

            }
            <p>{experiencelevel}</p>
            {
              yearsofexperience && yearsofexperience === "1" &&
              <p>{yearsofexperience} year of experience</p>
              
            }
            {
              yearsofexperience && yearsofexperience !== "1" &&
              <p>{yearsofexperience} years of experience</p>
              
            }

            <p>{location}</p>
          </div>

        {
          social && social.length > 0 && 

          <div class="icons my-1">
            {
              portfolio && portfolio.length > 0 && 
              <a href={portfolio} target="_blank" rel="noopener noreferrer">
                <i class="fab  fa-globe fa-2x"></i>
              </a>
            }
      
            {
              social && social.twitter && 
              <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                <i class="fab fa-twitter fa-2x"></i>
              </a>
            }
            {
              social && social.linkedin && 
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
            }
            {
              social && social.facebook && 
              <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                <i class="fab fa-facebook fa-2x"></i>
              </a>
            }
            {
              social && social.youtube && 
              <a href={social.youtube} target="_blank" rel="noopener noreferrer">
                <i class="fab fa-youtube fa-2x"></i>
              </a>
            }
            {
              social && social.instagram && 
              <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                <i class="fab fa-instagram fa-2x"></i>
              </a>
            }
          </div>
        }
        </div>



           
        <div class="profile-about">
          <div>

            <h2 class="bold-head text-primary">About {name}...</h2>
            <p>
              {bio}
            </p>
          </div>
          <div>
            {
              interests && interests.length > 0 &&
              <h2 class="bold-head text-primary">Interests</h2>
              
            }
            {
              interests && interests.length > 0 &&
              interests.map(i => {
                return (
                  <p>{i}</p>
                )
              })
            }
          </div>

          <div>

            <h2 class="text-primary bold-head ">Skill Set</h2>
            <div class="skills">
              {
                languages.map((x, index) => {
                  console.log(x)
                  return <div><p>{x}</p></div>
                })
              }
            </div>
          </div>

        </div>

        
        <div class="profile-exp ">
          <div>
            { experience && experience.length > 0 &&
              <h2 class="text-primary bold-head ">Experience</h2>
            }
            <div className="exp-rows">

            {
              experience && experience.length > 0 &&
              experience.map((e) => {
                return (
                  <div className="experienceField ">
                    {e.current === true && <p><strong>{e.startdate.slice(0, 4)} - present</strong></p> }
                    {e.current === false && <p><strong>{e.startdate.slice(0, 4)} - {e.enddate.slice(0, 4)} </strong></p>}
                    <p><strong>{e.location}</strong></p>
                    <p><strong>Position: </strong>{e.jobtitle} </p>
                    <p><strong>Company: </strong>{e.business} </p>

                  </div>
                )
              })
              
              
            }
            </div>

            
          </div>
        <div class="profile-edu p-2">
          {
            qualification && qualification.length > 0 &&
            <h2 class="text-primary bold-head ">Education</h2>
          }
          <div className="edu-rows">

            {
              qualification && qualification.length > 0 &&
                qualification.map(q => {
                  return (
                    <div className="qualificationField">
                      <p><strong>{q.startdate.slice(0, 4)} - {q.enddate.slice(0, 4)} </strong></p>
                      <p><strong>Institution: </strong>{q.institution} </p>
                      <p><strong>Degree: </strong>{q.degree}</p>
                      <p>{q.description}</p>
                    </div>
                  )
              })
            }
          </div>


          
          
        </div>
      </div>
      </div>
    )
  
}

ProfileDisplay.propTypes = {
    Profile: PropTypes.object.isRequired,
}

export default ProfileDisplay;
