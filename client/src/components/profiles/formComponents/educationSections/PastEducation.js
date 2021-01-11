import React, {useState} from 'react'
import FormInput from '../../../reusable/FormInput'

//  how to dry up past education and work ? functions are almost identical


// when displaying past education - capitalise and have as labels (eg. startDate, school etc.)

const PastEducation = ({ setEducation, educationData }) => {

    const { pastEducation } = educationData

    // empty initial data 
    const education  = {
        institution: "",
        degree: "",
        startdate: "",
        enddate: ""
    }
    // temp values to save to state :
    const [pastTempVals, setPastTempVals] = useState(education)

    const { institution, degree, startdate, enddate } = pastTempVals


    function handleChange (e) {
        const { name, value } = e.target
        setPastTempVals({
            ...pastTempVals,
            [name]: value
        })
        // console.log(pastTempVals)
    }

    function handleClick (e) {
        e.preventDefault()
        const newArr = [...educationData, {...pastTempVals}]
        console.log('NEWARR: ', newArr)

        setEducation(newArr)

        console.log("tempvals after click", pastTempVals)
        setPastTempVals(education)
        
        console.log("EDUCATION DATA AFTER CLICK", educationData)
    }

    function Display(){

        if (pastEducation){
            return(
                pastEducation.map((item, index) => {
                    return (
                        <div className="eduItemDiv" key={index}>
                            {/* <h3></h3> */}
                            {
                                Object.entries(item).map(([key, value]) => {
                                    return <li className="eduItem" key={key}>{key}: {value}</li>
                                })
                            }
                        </div>
                    )
                })
            )
        } else return null
    }


    return(
        <div className="eduForms">
            <div>
                <Display />
            </div>

            <div className="doubleFields">
                <div className="formFields">
                    <label>
                        Institution
                    </label>
                    <FormInput name="institution" value={institution} onChange={handleChange} />

                </div>
                <div className="formFields">
                    <label>
                        Degree
                    </label>
                    <FormInput name="degree" value={degree} onChange={handleChange} />

                </div>

            </div>

            <div className="doubleFields">
                <div className="formFields">
                    <label>
                        Start Date
                    </label>
                    <FormInput type="date" name="startdate" value={startdate} onChange={handleChange} />

                </div>
                <div className="formFields">
                    <label>
                        End Date
                    </label>
                    <FormInput type="date" name="enddate" value={enddate} onChange={handleChange} />

                </div>
            </div>
            <button className="plusButton" onClick={handleClick}>+</button>
        </div>
    )
}


export default PastEducation