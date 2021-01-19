import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect, useDispatch, useSelector } from 'react-redux'
import ProfileDisplay from './ProfileDisplay'
import { getProfileId } from '../../actions/profile'

const Profile = ({ getProfileId, match }) => {
    // const dispatch = useDispatch()
    console.log(match.params.id)

    // useEffect(() => {
    //     dispatch(getProfileId(match.params.id))
    // }, [dispatch, getProfileId, match.params.id]);

    let profiles = useSelector(state => state.profile.profiles)

    console.log(profiles)
    let profile = profiles.filter(x => x.user._id === match.params.id)[0]
    console.log(profile)

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
