import React from 'react'

// form components : 
import Details from './formComponents/Details'
import Skills from './formComponents/Skills'
import Work from './formComponents/Work'
import Education from './formComponents/Education'
import Links from './formComponents/Links'

// steps/sections to the form : 
const steps = [
    { id: "details" },
    { id: "skills" },
    { id: "work" },
    { id: "education" },
    { id: "links" },
]



const AddProfile = () => {


    return(
        <div>
            <div>
                <div className="heading">
                    add profile
                </div>
                

            </div>
             
        </div>
    )
}


export default AddProfile 