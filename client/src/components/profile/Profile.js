import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProfileDisplay from './ProfileDisplay'
import { getProfileId } from '../../actions/profile'

const Profile = ({ getProfileId, profile: {profile, match} }) => {
    useEffect(() => {
        getProfileId(match.params.id)
    }, [getProfileId]);

    // console.log(profiles)

    return (
        <Fragment>
             {typeof(profiles) ==='object' && <ProfileDisplay profile={profile}/>}
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
