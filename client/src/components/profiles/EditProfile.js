import React, { useState, useEffect } from 'react'
import FormInput from './../reusable/FormInput'
import MultiStepForm from './MultiStepForm'


const EditProfile = ({ profile }) => {
    console.log(profile)

    // const initialFormState = {
    //     title: "",
    //     category: "",
    //     content: ""
    // } 

    // const [formState,setFormState] = useState(initialFormState)
    const [errorMessage, setErrorMessage] = useState(null)

    // useEffect(() => {
    //     // Set the formState to the fields in the post after mount and when post changes
    //     profile && setFormState({
    //         title: profile.title,
    //         category: profile.category,
    //         content: profile.content
    //     })
    // },[profile])

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