import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const DashAction = props => {
    return (
        <div>
            <div class="dash-buttons">
                <Link to="/editprofile" class="btn btn-light">
                    <i class="fas fa-user-circle text-primary"></i> Edit Profile</Link>
                &nbsp;
                <Link to="/add-experience" class="btn btn-light">
                    <i class="fab fa-black-tie text-primary"></i> Add Experience</Link>
                &nbsp;
                <Link to="/add-education" class="btn btn-light">
                    <i class="fas fa-graduation-cap text-primary"></i> Add Education</Link>
            </div>
        </div>
    )
}

DashAction.propTypes = {

}

export default DashAction
