import React from 'react'
// import { useForm, useStep } from 'react-hooks-helper'
import MultiStepForm from './MultiStepForm'




const AddProfile = ({ nextIdProfile, addProfile, profiles }) => {



    return(
        <div>
            <div>
                <div className="heading">
                    <h1 className="headingFont">Create Your Profile</h1>
                </div>
                <MultiStepForm nextIdProfile={nextIdProfile} addProfile={addProfile}  profiles={profiles} />
                

            </div>
             
        </div>
    )
}


export default AddProfile 