import React, { useState } from 'react'
import { useStep } from 'react-hooks-helper'

// form components : 
import Details from '../formComponents/Details'
import Skills from '../formComponents/Skills'
import Work from '../formComponents/Work'
import Education from '../formComponents/Education'
import Links from '../formComponents/Links'
import Review from '../formComponents/Review'



// steps/sections to the form : 
const steps = [
    { id: "details" },
    { id: "skills" },
    { id: "work" },
    { id: "education" },
    { id: "links" },
    { id: "review" }
]

// initial form data :

// const initialDetailsData = {
//     profilePhoto: "",
//     firstName: "",
//     lastName: "",
//     username: "",
//     location: "",
//     phoneNumber: "",
//     birthday: "",
//     interests: [],
//     bio: "",
//     briefDescription: ""
// }

// const initialSkillsData = {
//     technical: [],
//     soft: [],
//     skillLevel: "",
//     yearsOfExperience: ""
// }

// const initialWorkData = {
//     status: "",
//     currentTitle: "",
//     currentCompany: "",
//     currentStartDate: "",
//     pastRoles: []
// }

// const initialEducationData = {
//     recentSchool: "",
//     recentDegree: "",
//     recentStartDate: "",
//     recentEndDate: "",
//     pastEducation: []
// }

// const initialLinkData = {
//     linkedIn: "",
//     twitter: "",
//     instagram: "",
//     facebook: "",
//     portfolio: "",
//     github: "",
//     resume: "",
//     additionalLinks: {}

// }

const initialDetailsData = {
    profilePhoto: "",
    name: "ww",
    // lastName: "www",
    username: "www",
    location: "www",
    // phoneNumber: "www",
    dateofbirth: "www",
    interests: ["ss", "ss"],
    bio: "www",
    blogpostdescription: "www"
}

const initialSkillsData = {
    languages: ["js"],
    // soft: [],
    experienceLevel: "www",
    yearsofexperience: "www"
}

const initialWorkData = {

    prospects: "www",
    currentroles: {
        jobtitle: "ww",
        business: "ww",
        location: "ss",

    },
    pastroles: [{
        jobtitle: "ww",
        business: "ww",
        location: "ss",
    }]
}

const initialEducationData = [{
    institution: "www",
    degree: "www",
    startdate: "ww",
    enddate: "ww",
}]

const initialLinkData = {
    socials: {
        linkedin: "www",
        twitter: "ww",
        instagram: "ww",
        facebook: "www",
    },
    portfolio: {
        portfolio: "www",
        github: "www",
        resume: "www"
    }
    
    
    
    

}



const MultiStepForm = ({ form, profile, nextIdProfile, addProfile, profiles }) => {
    // states :
    const [detailsData, setDetails] = useState(initialDetailsData)
    const [skillsData, setSkills] = useState(initialSkillsData)
    const [workData, setWork] = useState(initialWorkData)
    const [educationData, setEducation] = useState(initialEducationData)
    const [linkData, setLinks] = useState(initialLinkData)

    // functions for multi step form : 
    const { step, navigation } = useStep({ initialStep: 0, steps })
    const { id } = step

    

    // data and functions to pass to form
    const props = { navigation, detailsData, setDetails, skillsData, setSkills, 
    workData, setWork, educationData, setEducation, linkData, setLinks }

    // multi step form :
    switch (id) {
        case "details":
            return <Details {...props} form={form} profile={profile} />
        case "skills":
            return <Skills {...props} form={form} profile={profile} detailsData={detailsData}/>
        case "work":
            return <Work {...props} form={form} profile={profile} />
        case "education":
            return <Education {...props} form={form} profile={profile} />
        case "links":
            return <Links {...props} form={form} profile={profile} />
        case "review":
            return <Review {...props} form={form} profile={profile} nextIdProfile={nextIdProfile} addProfile={addProfile}  profiles={profiles} />
        default:
            return null
    }
    // return <Review {...props} />
 

    
}

export default MultiStepForm