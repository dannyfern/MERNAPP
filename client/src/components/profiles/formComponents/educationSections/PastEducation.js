import React, {useState} from 'react'
import FormInput from '../../../reusable/FormInput'

//  how to dry up past education and work ? functions are almost identical

const PastEducation = ({ setEducation, educationData }) => {

    const { pastEducation } = educationData

    // empty initial data 
    const education  = {
        school: "",
        degree: "",
        startDate: "",
        endDate: ""
    }
    // temp values to save to state :
    const [tempVals, setTempVals] = useState(education)

    const { school, degree, startDate, endDate } = tempVals


    function handleChange (e) {
        const { name, value } = e.target
        setTempVals({
            ...tempVals,
            [name]: value
        })
    }

    function handleClick (e) {
        e.preventDefault()

        setEducation({
            ...educationData,
            pastEducation: [...pastEducation, tempVals]
        })

        setTempVals(education)
    }

    function Display(){

        if (pastEducation){
            return(
                pastEducation.map((item, index) => {
                    return (
                        <div key={index}>
                            <h3>Education: {index + 1}</h3>
                            {
                                Object.entries(item).map(([key, value]) => {
                                    return <li key={key}>{key}: {value}</li>
                                })
                            }
                        </div>
                    )
                })
            )
        }
    }


    return(
        <div>
            <div>
                <Display />
            </div>

            <div>
                <label>
                    School
                </label>
                <FormInput name="school" value={school} onChange={handleChange} />

            </div>
            <div>
                <label>
                    Degree
                </label>
                <FormInput name="degree" value={degree} onChange={handleChange} />

            </div>
            <div>
                <label>
                    Start Date
                </label>
                <FormInput type="date" name="startDate" value={startDate} onChange={handleChange} />

            </div>
            <div>
                <label>
                    End Date
                </label>
                <FormInput type="date" name="endDate" value={endDate} onChange={handleChange} />

            </div>
            <button onClick={handleClick}>+</button>
        </div>
    )
}


export default PastEducation