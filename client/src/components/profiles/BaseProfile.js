import React, { Fragment, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createProfile } from '../../actions/profile'

const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState ({
        name:'',
        username:'',
        dateofbirth:'',
        location:'',
        bio:'',
        blogpostdescription:'',
        interests:'',
        website:'',
        languages:'',
        experiencelevel:'',
        yearsofexperience:'',
        jobtitle:'',
        business:'',
        linkedin:'',
        instagram:'',
        twitter:'',
        github:'',
    });
    
    const {
        name,
        username,
        dateofbirth,
        location,
        bio,
        blogpostdescription,
        interests,
        languages,
        website,
        experiencelevel,
        yearsofexperience,
        jobtitle,
        business,
        linkedin,
        instagram,
        twitter,
        github
    } = formData;
    
    const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };

    return (
    <Fragment>
        <div id="profile">
        <h1 className="header">
        Dot Developer Profile
        </h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make you stand out
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={e => onSubmit(e)}>
      <div className="form-group">
          <input type="text" placeholder="Name" name="name" 
          value={name} onChange={e => onChange(e)}/>
      </div>
      <div className="form-group">
          <input type="text" placeholder="Username" name="username" 
          value={username} onChange={e => onChange(e)}/>
      </div>

      
      <div className="form-group">
      <small>Date of Birth</small>
          <input type="date" placeholder="Date of Birth" name="dateofbirth" 
          value={dateofbirth} onChange={e => onChange(e)}/>
      </div>

      
        <div className="form-group">
          <select name="experiencelevel" value={experiencelevel} onChange={e => onChange(e)}>
            <option value="0">* Current Developer Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
          </select>
        </div>

        <div className="form-group">
          <select name="yearsofexperience" value={yearsofexperience} onChange={e => onChange(e)}>
            <option value="0">* Years of Experience </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5 + </option>
          </select>
        </div>

        <div className="form-group">
          <input type="text" placeholder="Business (Currently Working At)" 
          name="business" value={business} onChange={e => onChange(e)}/> 
        </div>

        <div className="form-group">
          <select name="jobtitle" value={jobtitle} onChange={e => onChange(e)}>
            <option value="0"> Jobtitle </option>
            <option value="Web Developer">Web Developers</option>
            <option value="Web Designer">Web Designer</option>
            <option value="Game Developer">Game Developer</option>
            <option value="UI/UX Designer">UI / UX Designer</option>
            <option value="Dev Ops">Dev Ops </option>
            <option value="SEO">SEO Specialist</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <input type="text" placeholder="Website ( If Applicable )" name="website" 
          value={website} onChange={e => onChange(e)}/>
        </div>

        <div className="form-group">
          <input type="text" placeholder="Location (City and State)" name="location" 
          value={location} onChange={e => onChange(e)} />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Bio ( A little about yourself)" name="bio"
          value={bio} onChange={e => onChange(e)} />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Interests" name="interests" 
          value={interests} onChange={e => onChange(e)}/>
        </div>


        <div className="form-group">
          <input type="text" placeholder="* Programming languages (Seperate by Comma)" name="languages"
          value={languages} onChange={e => onChange(e)} />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Short Blog Post Description !!" name="blogpostdescription"
          value={blogpostdescription} onChange={e => onChange(e)} />
        </div>


        <div className="break">
          <h1> Add Social Network Links </h1>
        </div>

        
        <div className="form-group social-input">
          <i className="fab fa-github fa-2x"></i>
          <input type="text" placeholder="Github URL" name="github"
          value={github} onChange={e => onChange(e)}/>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-twitter fa-2x"></i>
          <input type="text" placeholder="Twitter URL" name="twitter" 
          value={twitter} onChange={e => onChange(e)}/>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-linkedin fa-2x"></i>
          <input type="text" placeholder="Linkedin URL" name="linkedin" 
          value={linkedin} onChange={e => onChange(e)}/>
          
        </div>

        <div className="form-group social-input">
          <i className="fab fa-instagram fa-2x"></i>
          <input type="text" placeholder="Instagram URL" name="instagram" 
          value={instagram} onChange={e => onChange(e)}/>
        </div>

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
        </form>
        </div>
    </Fragment>
    );
};

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
}


export default connect(null, { createProfile })(withRouter(CreateProfile));
