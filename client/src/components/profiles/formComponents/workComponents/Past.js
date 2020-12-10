import React from 'react'
import FormInput from './../reusable/FormInput'

const PastWork = ({ setWork, workData, navigation }) => {
    const { title, company, startDate, endDate } = workData.pastRoles[0]

    return(
        <div>
            <div>
                <label>
                    Title
                </label>
                <FormInput name="title" value={title} />
            </div>
            <div>
                <label>
                    Company
                </label>
                <FormInput name="company" value={company} />
            </div>
            <div>
                <label>
                Start date
                </label>
                <FormInput type="date" name="startDate" value={startDate} />
            </div>
            <div>
                <label>
                End date
                </label>
                <FormInput type="date" name="endDate" value={endDate} />
            </div>
            <button>+</button>
        </div>
    )
}

export default PastWork