import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../dashboard/spinner'
import ProfileFields from './ProfileFields'
import { getProfiles } from '../../actions/profile'


const Profiles = ({ getProfiles, profile: { profiles, loading }}) => {
    useEffect(() => {
        getProfiles();
    }, [getProfiles]);

    return <Fragment>
           { loading ? <Spinner /> : <Fragment>
            <h1> Developer Profiles </h1>
            <div className="profiles">
                {profiles.length > 0 ? (
                    profiles.map(profile => (
                        <ProfileFields key={profile._id} profile={profile} />
                    ))
                ) : <h2> No Profiles Found </h2>}
            </div>
           </Fragment>}
        </Fragment>
};

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles)
