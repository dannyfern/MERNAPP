import React from 'react'
import { useForm, useStep } from 'react-hooks-helper'
import MultiStepForm from './MultiStepForm'




const AddProfile = () => {



    return(
        <div>
            <div>
                <div className="heading">
                    add profile
                </div>
                <MultiStepForm />
                

            </div>
             
        </div>
    )
}


export default AddProfile 