import React from 'react'
import Posts from './posts/Posts'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'



const Home = ({ isAuthenticated, posts }) => {
    if(isAuthenticated) {
        return <Redirect to='/dashboard'/>
    }

    const props = {posts}
    // console.log(posts)


    return (
    <div>
        <section className='home'>
            <div className='dark-overlay'>
                <div className="backgroundImg">

                </div>
                <div className='home-inner'>
                    <h1 className='x-large'>Welcome!</h1>
                    <p class="homelead">
                        Giving Developers another life! Your one stop for everything developer
                    </p>
                    <p>
                        Sign up for a free account or log in to an existing account to get started
                    </p>
                    <div className="homebuttons">
                        <Link to='auth/Register' className='btn btn-primary'>Sign Up!</Link>
                        &nbsp;&nbsp;&nbsp;
                        <Link to='auth/signin' className='btn btn-secondary'>Sign In!</Link>
                    </div>
                </div>
            </div>
        </section>
    
       
    </div>
    )
}

Home.propTypes = {
    isAuthenticated:PropTypes.bool,
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Home);