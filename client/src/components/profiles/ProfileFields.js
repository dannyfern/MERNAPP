import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const ProfileFields = ({ profile: {
    user: { _id, name, avatar },
    title,
    company,
    location,
    skills
    }

}) => {
    return (
        <section className="profileimage">
        <div className="profiledisplay">
            <img src={avatar} alt="" className="round-img"/>
            <div>
                <h2>{name}</h2>
                <p>{title} {company && <span> at {company}</span>}</p>
                <p className="profileheadings">Country</p>
                <p>{location && <span>{location}</span>}</p>
                <p>{skills.experiencelevel}</p>
            </div>
            <ul>
                {skills.slice(0,5).map((skills, index) => (
                    <li key={index} className="text">
                        <p className="profileheadings">Programming Languages</p>
                        <i className="profileskills"></i>{skills.languages}
                        <p className="profileheadings"> Experience Level</p>
                        <i className="profileskills"></i>{skills.experiencelevel}

                        <p className="profileheadings"> Years of experience</p>
                        <i className="profileskills"></i>{skills.yearsofexperience}
                
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
