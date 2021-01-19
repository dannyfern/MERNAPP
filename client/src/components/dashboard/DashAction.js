import React from 'react'
import { Link } from 'react-router-dom'

const DashAction = props => {
    return (
      <div class="multi-button">
        <button><Link to="/editprofile">Edit Profile</Link></button>
        <button><Link to="/addexperience">Add Experience</Link></button>
        <button><Link to="/addqualification">Add Qualification</Link></button>
      </div>

    )
};

export default DashAction



