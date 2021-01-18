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
        <div className="profile bg-light">
            <img src={avatar} alt="" className="round-img"/>
            <div>
                <h2>{name}</h2>
                <p>{title} {company && <span> at {company}</span>}</p>
                <p className="my-1">{location && <span>{location}</span>}</p>
                <Link to={`/profile/${_id}`} className='btn btn-primary'>
                    View Profile
                </Link>
            </div>
            <ul>
                {skills.slice(0,5).Array.prototype.map((skill, index) => (
                    <li key={index} className="text-primary">
                        <i>{skill}</i>
                    </li>
                ))}
            </ul>  
        </div>
    )
}

ProfileFields.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileFields
