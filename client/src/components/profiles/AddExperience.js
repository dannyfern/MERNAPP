import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addExperience } from '../../actions/profile'

const AddExperience = ({ addExperience, history }) => {
    const [formData, setFormData] = useState({
        title:'',
        company:'',
        current: false,
        jobtitle:'',
        business:'',
        location:'',
        startdate:'',
        enddate:'',
        description:'',
    });

    const [toDateDisabled, toggleDisabled] = useState(false)
    
    const { title, company, current, jobtitle, 
        business, location, startdate, enddate, description} = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})

    return (
        <Fragment>
          <section className="experience">
            <h1 className="header">
                <u>Your Life' Work</u>
            </h1>
            <form class='form' onSubmit={e => {
              e.preventDefault();
              addExperience(formData, history);
            }}>
      <p className="lead3">
        <i className="fas fa-code-branch"></i> Current and Past Development Roles
      </p>
  
        <div className="form-group">
          <input type="text" placeholder="Job Title" name="title" 
          value={title} onChange={e => onChange(e)} required/>
        </div>

        <div className="form-group">
          <input type="text" placeholder="Company" name="company" 
          value={company} onChange={e => onChange(e)} required />
        </div>

        <div className="checkbox">
          <p><input type="checkbox" name="current" checked={current} value={current} 
          onChange={e => {
            setFormData({ ...formData, current: !current })
            toggleDisabled(!toDateDisabled);
          }} /> Is this your current Role? </p>
        </div>

        <div className="form-group">
          <input type="text" placeholder="Past Job Title" name="jobtitle" 
          value={jobtitle} onChange={e => onChange(e)} required />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Business/Company " name="business" 
          value={business} onChange={e => onChange(e)} required />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Location of previous business" name="location"
           value={location} onChange={e => onChange(e)} required />
        </div>

        <div className="form-group">
          <h4>Start Date </h4>
          <input type="date" name="startdate" 
          value={startdate} 
          onChange={e => onChange(e)} 
          />
        </div>

        <div className="form-group">
          <h4>End Date</h4>
          <input type="date" name="enddate" 
          value={enddate} onChange={e => onChange(e)} />
        </div>

        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="3"
            placeholder="Job Description"
            value={description} onChange={e => onChange(e)}
          ></textarea>
        </div>

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
      </form>
      </section>
    </Fragment>
    )
};

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired,
}

export default connect(null, {addExperience})(AddExperience)
