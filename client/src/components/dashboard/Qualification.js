import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { deleteQualification } from '../../actions/profile'

const Qualification = ({ qualification, deleteQualification }) => {
    const qualifications = qualification.map(qua => (
        <tr key={qua._id}>
        <td className="tableData">{qua.institution}</td>
        <td className="tableData">{qua.degree}</td>
        <td className="tableData"><Moment format='DD/MM/YYYY'>{qua.startdate}</Moment></td>
        <td className="tableData"><Moment format='DD/MM/YYYY'>{qua.enddate}</Moment></td>
        <td button onClick={() => deleteQualification(qua._id)} className= 'btn btn-danger'>Delete</td>
        </tr>
        
    ));
    return (
        <Fragment>
            <div className='container'>
            <h2 className='dashboardheadings'>Qualifications</h2>
            <table className='table'>
                <thead>
                    <tr>
                        
                        <th className='hide-sm'>Institution</th>
                        <th className='hide-sm'>Degree</th>
                        <th className='hide-sm'>StartDate</th>
                        <th className='hide-sm'>Enddate</th>
                    </tr>
                </thead>
                <tbody>{qualifications}</tbody>
            </table>
            </div>
        </Fragment>
    )
}

Qualification.propTypes = {
    qualification: PropTypes.array.isRequired,
    deleteQualification: PropTypes.func.isRequired,
}

export default connect(null, { deleteQualification })(Qualification)
