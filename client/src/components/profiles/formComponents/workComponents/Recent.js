import React from 'react'
import FormInput from './../reusable/FormInput'

const RecentWork = ({ setWork, workData, navigation }) => {
    const { currentTitle, currentCompany, currentStartDate } = workData
    console.log(workData)

    function handleChange (e) {
        const name = e.target.name
        const value = e.target.value
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