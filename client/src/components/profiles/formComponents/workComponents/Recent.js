import React from 'react'
import FormInput from '../../../reusable/FormInput'

// combine this into main work component !!

const RecentWork = ({ setWork, workData }) => {

    const { jobtitle, business, location } = workData

    // handle change for regular inputs :
    function handleChange (e) {
        const { name, value } = e.target
        setWork({
            ...workData,
            currentroles: {
                [name]: value
            }
            
        })
    }

    return(
        <div className="recentWorkInfo">
            <div className="doubleFields">
                <div className="formFields">
                    <label>
                        Title
                    </label>
                    <FormInput name="jobtitle" value={jobtitle} onChange={handleChange}/>
                </div>
                <div className="formFields">
                    <label>
                        Company
                    </label>
                    <FormInput name="business" value={business} onChange={handleChange}/>
                </div>
            </div>
            
            <div className="formFields">
                <label>
                Start date
                </label>
                <FormInput type="date" name="location" value={location} onChange={handleChange}/>
            </div>

        </div>
    )
}

export default RecentWork