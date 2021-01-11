import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../config/api';



// put logo in here to the left and have everyhting else float to the right



// Auth Links for NAVBAR USER ACCESS
const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <ul>
            <Link className="navLinkStyles" id="logo" to="/" >Dot Developer</Link>
            <Link className="navLinkStyles" to="/posts/new">New Post</Link>
            <Link className="navLinkStyles" onClick={logout} to="/#!">Logout</Link>
        </ul>
        
    );

    const guestLinks = (
        <ul>
        <Link className="navLinkStyles" id="logo" to="/" >Dot Developer</Link>
        <Link className="navLinkStyles" to="/profiles">Developers</Link>
        <Link className="navLinkStyles" to="/auth/register">Register account</Link>
        <Link className="navLinkStyles" to="/auth/signin">Sign in</Link> 
        </ul>
        

    );

    const [isClicked, setClicked] = useState(false)

    const toggleNav = () => {
        if (isClicked === false){
            setClicked(true)
        } else {
            setClicked(false)
        }
        
    }

    let className = isClicked ? "openNav" : "closedNav"

    return (
        <div>
            <div id="navbar">

                <div>
                    <button className="hamburger" id="hamburger" onClick={toggleNav}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                

                <div id="navLinks" className={className}> 
                    { !loading && (
                    <Fragment>
                        { isAuthenticated ? authLinks : guestLinks} 
                    </Fragment>)}
                </div>

            </div>
        </div>
    )
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(mapStateToProps, { logout })(Navbar);