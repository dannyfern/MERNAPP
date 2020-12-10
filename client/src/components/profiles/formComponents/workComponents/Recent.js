import React from 'react'
import FormInput from './../reusable/FormInput'

const RecentWork = ({ setWork, workData, navigation }) => {
    const { title, company, startDate } = workData.currentRole

    return(
        <div>
            <div>
                <label>
                    Title
                </label>
                <FormInput name="title" value={title} onChange={setWork}/>
            </div>
            <div>
                <label>
                    Company
                </label>
                <FormInput name="company" value={company} onChange={setWork}/>
            </div>
            <div>
                <label>
                Start date
                </label>
                <FormInput type="date" name="startDate" value={startDate} onChange={setWork}/>
            </div>

        </div>
    )
}

export default RecentWork