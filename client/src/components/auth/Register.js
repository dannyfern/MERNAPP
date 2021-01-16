import React, {Fragment, useState} from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../config/api';
import './../../styles/Auth.css';
import PropTypes from 'prop-types';


// use forminput component

const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const { name, email, password, password2 } = formData;

    const onChange = c => setFormData({ ...formData, [c.target.name]: c.target.value })

    const onSubmit = async c => {
        c.preventDefault();
        if(password !== password2) {
            setAlert('Passwords arent matching', 'danger')
        } else {
            register({ name, email, password });
        }
    };
    
    if(isAuthenticated) {
      return <Redirect to='/dashboard' />
    }
    
    return <Fragment>
      <div className="registerComponent">
        <div className="bgImage">
        </div>

        <div className="registerPage">


          <div className="register">
              <h1 className="large text-primary">Sign Up</h1>
          </div>

        <p className="lead"><i className="fas fa-user"></i>&nbsp; Create Your Account</p>
          <form className="form register-form" onSubmit={c => onSubmit(c)}>
            <div className="form-group">
              <input 
              type='text'
              placeholder='Name...'
              name='name' 
              value={name} 
              onChange={c => onChange(c)} />
            </div>
            <div className="form-group">
              <input 
              type="email" 
              placeholder="Email Address..." 
              name="email" 
              value={email}
              onChange={c => onChange(c)}  />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password..."
                name="password"
                value={password}
                onChange={c => onChange(c)} 
                minLength="6"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password..."
                name="password2"
                value={password2}
                onChange={c => onChange(c)} 
                minLength="6"
              />
            </div>
            <div className="ending">
              <input type="submit" className="btn btn-primary" value="Register" />
            </div>
            <p className="my-1">
              Already have an account? <Link to="/auth/signin">&nbsp; Sign In</Link>
            </p>
            </form>
        </div>

      </div>

        </Fragment>
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);

// const initialState = {
//     email: "",
//     username: "",
//     password: ""
// }

// const [userDetails, setUserDetails] = useState(initialState)


// function handleChange(event){
//     const { name, value } = event.target
//     setUserDetails({
//         ...userDetails,
//         [name]: value
//     })
// }

// function handleSubmit(event){
//     event.preventDefault()
//     // functionality ...
// }


// const newUser = {
//     name,
//     email,
//     password
// }
// try {
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }

//     const body = JSON.stringify(newUser);

//     const res = await axios.post('/api/users', body, config);
//     console.log(res.data);
// } catch (err) {
//     console.error(err.response.data);
// }