import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { currentProfile } from '../../actions/profile'
import { Spinner } from 'react-bootstrap'
import DashActions from './DashAction'


const Dashboard = ({ currentProfile, auth: { user }, profile: { profile, loading} }) => {
    useEffect(() => {
        currentProfile();
    }, []);

    return loading && profile === null ? <Spinner /> : 
    <Fragment>
        <section className='dashboard'>
        <h1 className ="display-4">Dot Developer</h1>
            <i className='fas fa-user-check' /> Welcome to Dot Dev { user && user.name }
        <br></br>
        <br></br>
        {profile !== null ? ( <Fragment> <DashActions /> </Fragment> ) : (
        <Fragment> You do not have a Profile setup, please create one!</Fragment>)}
        <section className="profilebutton">
          <Link to='/createprofile' className="btn btn-info">
        <span class="glyphicon glyphicon-user">
            </span>Create Profile</Link>
        </section>
        </section>
    </Fragment>;
}

Dashboard.propTypes = {
    currentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { currentProfile })(Dashboard);
