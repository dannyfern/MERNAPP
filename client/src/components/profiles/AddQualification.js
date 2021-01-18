import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addQualification } from '../../actions/profile'

const AddQualification = ({ addQualification, history }) => {
    const [formData, setFormData] = useState({
        institution:'',
        degree:'',
        startdate: false,
        enddate:'',
        description:'',
    });
    
    const { institution, degree, startdate, enddate, description} = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})

    return (
        <Fragment>
          <section className="qualifications">
            <h1 className="header1">
                <u>Your Qualifications</u>
            </h1>
            <form class='form' onSubmit={e => {
              e.preventDefault();
              addQualification(formData, history);
            }}>
      <p className="lead1">
        <i className="fas fa-graduation-cap"></i> Previous Accredited Study
      </p>
  
        <div className="form-group">
          <input type="text" placeholder="Insitution of Study" name="institution" 
          value={institution} onChange={e => onChange(e)} required/>
        </div>

        <div className="form-group">
          <input type="text" placeholder="Degree Attained" name="degree" 
          value={degree} onChange={e => onChange(e)} required />
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
            placeholder="Concise Study Description"
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

AddQualification.propTypes = {
    addQualification: PropTypes.func.isRequired,
}

export default connect(null, {addQualification})(AddQualification)
