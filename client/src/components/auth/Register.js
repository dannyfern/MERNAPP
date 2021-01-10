import React, {Fragment, useState} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import './../../styles/Auth.css';
import PropTypes from 'prop-types';

// use forminput component

const Register = ({ setAlert }) => {
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
            console.log('Success');
        }
    };

    return <Fragment>
    <div className="register">
        <h1 className="large text-primary">Sign Up</h1>
    </div>
    <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
        <form className="form" onSubmit={c => onSubmit(c)}>
          <div className="form-group">
            <input 
            type='text'
            placeholder='Name'
            name='name' 
            value={name} 
            onChange={c => onChange(c)} required />
          </div>
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
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={c => onChange(c)} required
              minLength="6"
            />
          </div>
          <div className="ending">
            <input type="submit" className="btn btn-primary" value="Register" />
             </div>
             <p className="my-1">
            Already have an account? <Link to="/Login">Sign In</Link>
             </p>
            </form>
        </Fragment>
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, {setAlert})(Register);

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