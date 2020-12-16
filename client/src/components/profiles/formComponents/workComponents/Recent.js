import React from 'react'
import FormInput from '../../../reusable/FormInput'

// combine this into main work component !!

const RecentWork = ({ setWork, workData }) => {

    const { currentTitle, currentCompany, currentStartDate } = workData

    // handle change for regular inputs :
    function handleChange (e) {
        const { name, value } = e.target
        setWork({
            ...workData,
            [name]: value
        })
    }

    return(
        <div>
            <div>
                <label>
                    Title
                </label>
                <FormInput name="currentTitle" value={currentTitle} onChange={handleChange}/>
            </div>
            <div>
                <label>
                    Company
                </label>
                <FormInput name="currentCompany" value={currentCompany} onChange={handleChange}/>
            </div>
            <div>
                <label>
                Start date
                </label>
                <FormInput type="date" name="currentStartDate" value={currentStartDate} onChange={handleChange}/>
            </div>

        </div>
    )
}

export default RecentWork