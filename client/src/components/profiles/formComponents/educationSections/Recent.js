import React from 'react'
import FormInput from './../reusable/FormInput'

const MostRecent = ({ setEducationData, educationData, navigation }) => {

    const { school, degree, startDate, endDate } = educationData.mostRecent

    function changeHandler (e) {
        // console.log(e.target.name)
        // let name = e.target.name
        // let value = e.target.value
        // setFormData({
        //     ...formData,
        //     education: {
        //         mostRecent: {
        //             name: value
        //         }
        //     }
            
        // })
    }


    return(
        <div>
            <div>
                <label>
                    School
                </label>
                <FormInput name="school" value={school} onChange={changeHandler} />

            </div>
            <div>
                <label>
                    Degree
                </label>
                <FormInput name="degree" value={degree} onChange={changeHandler} />

            </div>
            <div>
                <label>
                    Start Date
                </label>
                <FormInput type="date" name="startDate" value={startDate} onChange={changeHandler} />

            </div>
            <div>
                <label>
                    End date
                </label>
                <FormInput type="date" name="endDate" value={endDate} onChange={changeHandler} />

            </div>
            

        </div>
    )
}


export default MostRecent