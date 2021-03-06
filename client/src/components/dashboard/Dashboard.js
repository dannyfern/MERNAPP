import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { currentProfile, deleteAccount } from '../../actions/profile'
import { Spinner } from 'react-bootstrap'
import DashActions from './DashAction'



import Experience from './Experience'
import Qualification from './Qualification'

const Dashboard = ({ currentProfile, deleteAccount, auth: { user }, profile: { profile, loading} }) => {

    useEffect(() => {
        currentProfile();
    }, [currentProfile]);
    console.log(profile)

    return loading && profile === null ? <Spinner /> : 
    <Fragment>
        <section className='dashboard'>
            <div className="dashboardBgImg"></div>
            <div className="dashboard-inner">
                <h1 className ="display-4">Dot Developer</h1>
                    <p className="welcome"><i className='fas fa-user-check' /> Welcome to Dot Dev { user && user.name }</p>
                <br></br>
                <br></br>
                {profile !== null ? ( 
                    <Fragment> 
                        <DashActions/>
                        <Experience experience={profile.experience}/>
                        <Qualification qualification={profile.qualification}/>
                    </Fragment> ) : (
                    <Fragment> You do not have a Profile setup, please create one!</Fragment>)}

                <section className="profilebutton">
                    <Link to='/createprofile' className="btn btn-info">
                        <span class="glyphicon glyphicon-user">
                    </span>Create Profile</Link>
                    <button className="btn btn-danger" onClick={() => deleteAccount()}>
                    <span class="glyphicon glyphicon-user">
                    </span>Delete Account</button>
                </section>
            </div>
        </section>
    </Fragment>;
}

Dashboard.propTypes = {
    currentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { currentProfile, deleteAccount })(Dashboard);
