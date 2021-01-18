import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { deleteExperience } from '../../actions/profile'

const Experience = ({ experience, deleteExperience }) => {
    const experiences = experience.map(exp => (
        <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.jobtitle}</td>
        <td>{exp.business}</td>
        <td>{exp.location}</td>
        <td><Moment format='DD/MM/YYYY'>{exp.startdate}</Moment></td>
        <td><Moment format='DD/MM/YYYY'>{exp.enddate}</Moment></td>
        <td button onClick={() => deleteExperience(exp._id)} className= 'btn btn-danger'>Delete</td>
        </tr>
        
    ));
    return (
        <Fragment>
            <div className='container'>
            <h2 className='dashboardheadings'>Experience in Industry</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th className='hide-sm'>Jobtitle</th>
                        <th className='hide-sm'>Business</th>
                        <th className='hide-sm'>Location</th>
                        <th className='hide-sm'>StartDate</th>
                        <th className='hide-sm'>Enddate</th>
                    </tr>
                </thead>
                <tbody>{experiences}</tbody>
            </table>
            </div>
        </Fragment>
    )
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired,
}

export default connect(null, { deleteExperience})(Experience)

