import React, { useEffect, useState } from 'react'
import PastEducation from './educationSections/PastEducation'
import FormInput from '../../reusable/FormInput'

const Education = ( { setEducation, educationData, navigation, form, profile }) => {
    
    const props = { setEducation, educationData }

    const { institution, degree, startdate, enddate } = educationData

    const { previous, next } = navigation;

    const education  = {
        institution: "",
        degree: "",
        startdate: "",
        enddate: ""
    }

    const [tempVals, setTempVals] = useState(education)

    useEffect(() => {
        if (form === "edit"){
            setEducation(profile.educationData)
        }
    })

    


    // handles regular input changes and saves to state :
    function changeHandler (e){
        const { name, value } = e.target
        console.log(educationData)

        setTempVals({
            ...tempVals,
            [name]: value
        })

        setEducation([
            // ...educationData,
            {0: {tempVals}}
            
            
            
        ])


        console.log("EDU DATA AFTER CHNAGE", educationData)
    }

    return(
        <div>
            <div className="heading">
                <h4>
                    Education
                </h4>
            </div>
            <div className="profileFormDiv">

                <form className="profileForm">
                    <div>
                        <div className="eduProfileForm">
                            <h3 className="greyTitle">Most Recent </h3>
                            <div className="eduForms">
                                <div className="doubleFields">
                                    <div className="formFields">
                                        <label>
                                            School
                                        </label>
                                        <FormInput name="institution" value={institution} onChange={changeHandler} />

                                    </div>
                                    <div className="formFields">
                                        <label>
                                            Degree
                                        </label>
                                        <FormInput name="degree" value={degree} onChange={changeHandler} />

                                    </div>
                                </div>

                                <div className="doubleFields">
                                    <div className="formFields">
                                        <label>
                                            Start Date
                                        </label>
                                        <FormInput type="date" name="startdate" value={startdate} onChange={changeHandler} />

                                    </div>
                                    <div className="formFields">
                                        <label>
                                            End date
                                        </label>
                                        <FormInput type="date" name="enddate" value={enddate} onChange={changeHandler} />

                                    </div>
                                </div>



                            </div>
                            
                            

                            

                            
                    
                            <h3 className="greyTitle">Past Education</h3>
                            <PastEducation {...props} />
                            
                        </div>
                        </div>
                </form>

                <div className="navigationDiv">
                    <button className="nextBtn" onClick={previous}>back</button>  
                    <button className="nextBtn" onClick={next}>Next</button>
                </div>

            </div>
        </div>
    )
}


export default Education