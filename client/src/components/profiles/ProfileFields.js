import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const ProfileFields = ({ profile: {
    user: { _id, name, avatar },
    title,
    company,
    location,
    skills,
    username
    }

}) => {
    return (
        <section className="profileimage">
        <div className="profiledisplay">
            <img src={avatar} alt="" className="round-img"/>
            <div className="profile-top">
                <h2>{name}</h2>
                <h3>@{username}</h3>
                <p>{title} {company && <span> at {company}</span>}</p>
                <p>{location && <span><i class="fas fa-map-marker-alt"></i>&nbsp;{location}</span>}</p>
                <p>{skills.experiencelevel}</p>
            </div>
            <ul>
                {skills.slice(0,5).map((skills, index) =>  (
                    <li key={index} className="text">
                        {/* <p className="profileheadings">Programming Languages:</p> */}
                        {
                            skills.languages.length > 0 && 
                            <p className="skills"><i class="fas fa-cogs"></i>&nbsp;{skills.languages}</p>
                        }
                        
                        {/* <p className="profileheadings"> Experience Level</p> */}
                        <i className="profileskills"></i><p className="skillsExp">{skills.experiencelevel}  </p>
                        {
                            skills.yearsofexperience && 
                            skills.yearsofexperience === "1" &&
                            <p className="profileheadings">{skills.yearsofexperience}   Year of experience</p>
        
                        }
                        {
                            skills.yearsofexperience && 
                            skills.yearsofexperience !== "1" &&
                            <p className="profileheadings">{skills.yearsofexperience} Years of experience</p>
        
                        }
                        
                
                        <Link to={`/profile/${_id}`} className='btn btn-primary'> View Profile</Link>
                    </li>
                ))}
            </ul>
        </div>
    </section>
    )
};

ProfileFields.propTypes = {
    Profile: PropTypes.object.isRequired,
}

export default ProfileFields
