
import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom'
import './../../styles/Auth.css';


const SignIn = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:'',
    });

    const { email, password } = formData;

    const onChange = c => setFormData({ ...formData, [c.target.name]: c.target.value })

    const onSubmit = async c => {
        c.preventDefault();
            console.log('Success');
        };

    return (
    <Fragment>
    <div className="register">
        <h1 className="large text-primary">Sign In</h1>
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
        </Fragment>
    );
    };

export default SignIn