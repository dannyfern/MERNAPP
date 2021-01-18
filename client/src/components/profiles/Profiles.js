import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../dashboard/spinner'
import ProfileFields from './ProfileFields'
import { getProfiles } from '../../actions/profile'


const Profiles = ({ getProfiles, profile: { profiles, loading }}) => {
    useEffect(() => {
        getProfiles();
    }, []);

    return (
        <Fragment>
            { loading ? (
            <Spinner /> ) : (
            <Fragment>

                <h1 className="profiletext"> Developer Profiles</h1>

                <div className="profiles">
                    {profiles.length > 0 ? (
                        profiles.map(profile => (
                            <ProfileFields key={profile._id} profile={profile} />
                        ))
                    ) : ( <h1> No Profiles Found </h1> )}

                </div>
            </Fragment>
            )}

        </Fragment>
)};

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles)
