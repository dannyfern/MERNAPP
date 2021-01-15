
import React, {Fragment, useState} from 'react';
import { Link, Redirect } from 'react-router-dom'
import './../../styles/Auth.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../config/api';


const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email:'',
        password:'',
    });

    const { email, password } = formData;

    const onChange = c => setFormData({ ...formData, [c.target.name]: c.target.value })

    const onSubmit = async c => {
        c.preventDefault();
            login(email, password);
        };

  // Redirect if logged in

        if(isAuthenticated) {
          return <Redirect to='/dashboard' />
        }

    return (
    <Fragment>
      <section className="signin">
      <h1 className="header">
        Dot Developer
      </h1>
    <div className="register">
        <h1 className="large text">Sign In</h1>
    </div>
    <p className="lead"><i className="fas fa-user"></i> Login To Your Account</p>
        <form className="form" onSubmit={c => onSubmit(c)}>
          <div className="form-group">
            <input 
            type="email" 
            placeholder="Email Address" 
            name="email" 
            value={email}
            onChange={c => onChange(c)} required />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={c => onChange(c)} required
              minLength="6"
            />
          </div>
          <div className="ending">
            <input type="submit" className="btn btn-primary" value="Sign In" />
          </div>
             <p className="my-1">
                Don't have an account? <Link to='/register'>Sign Up</Link>
             </p>
            </form>
            </section>
        </Fragment>
    );
    };

    login.PropTypes = {
      login:PropTypes.func.isRequired,
      isAuthenticated: PropTypes.bool,
    }

    const mapStateToProps = state => ({
      isAuthenticated: state.auth.isAuthenticated
    });

export default connect(mapStateToProps, { login })(Login);