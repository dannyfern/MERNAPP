import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ProfileDisplay from './ProfileDisplay'
import Spinner from '../dashboard/spinner'
import { getProfileId } from '../../actions/profile'



const Profile = ({ getProfileId, profile: {profile, loading},auth, match }) => {
    useEffect(() => {
        getProfileId(match.params.id);
    },[getProfileId]);

    return (
        <Fragment>
           <Fragment>
             <ProfileDisplay profile={profile}/>
           </Fragment>
        </Fragment>
    );
};

Profile.propTypes = {
    getProfileId: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getProfileId })(Profile)
