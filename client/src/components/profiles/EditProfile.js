import React, { useState, useEffect } from 'react'
import FormInput from './../reusable/FormInput'
import MultiStepForm from './MultiStepForm'


const EditProfile = ({ profile,  }) => {
    console.log(profile)

   

    // const [formState,setFormState] = useState(initialFormState)
    const [errorMessage, setErrorMessage] = useState(null)

    

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    const handleChange = (e) => {

    }



    return(
        <div>
            <form id="editPostForm" onSubmit={handleSubmit}>
            {errorMessage && <p>{errorMessage}</p>}
           <MultiStepForm form="edit" profile={profile} />
        </form>
        </div>
    )
}


export default EditProfile 