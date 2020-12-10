import React from 'react'
import FormInput from './../reusable/FormInput'

const PastEducation = ({ setEducationData, educationData, navigation }) => {

    const { school, degree, startDate, endDate } = educationData.pastEducation[0]



    return(
        <div>
            <div>
                <label>
                    School
                </label>
                <FormInput name="school" value={school} />

            </div>
            <div>
                <label>
                    Degree
                </label>
                <FormInput name="degree" value={degree} />

            </div>
            <div>
                <label>
                    Start Date
                </label>
                <FormInput type="date" name="startDate" value={startDate} />

            </div>
            <div>
                <label>
                    End Date
                </label>
                <FormInput type="date" name="endDate" value={endDate} />

            </div>
            <button>+</button>
        </div>
    )
}


export default PastEducation