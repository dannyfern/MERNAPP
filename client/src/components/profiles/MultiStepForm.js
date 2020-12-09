import React, { useState } from 'react'
import { useForm, useStep } from 'react-hooks-helper'

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

const initialDetailsData = {
    firstName: "",
    lastName: "",
    username: "",
    location: "",
    phoneNumber: "",
    birthday: "",
    interests: {},
    bio: "",
    briefDescription: ""
}

const initialSkillsData = {
    technical: [
        {skill: ""}
    ],
    soft: [""],
    skillLevel: "",
    yearsOfExperience: ""
}

const initialWorkData = {
    status: "",
    currentRole: {
        title: "",
        company: "",
        startDate: {
            month: "",
            year: ""
        }
    },
    pastRoles: [
        {
            title: "",
            company: "",
            startDate: {
                month: "",
                year: ""
            },
            endDate: {
                month: "",
                year: ""
            }
        }
    ]
}

const initialEducationData = {
    mostRecent: {
        school: "",
        degree: "",
        startDate: {
            month: "",
            year: ""
        },
        endDate: {
            month: "",
            year: ""
        }
    },
    pastEducation: [
        {
            school: "",
            degree: "",
            startDate: {
                month: "",
                year: ""
            },
            endDate: {
                month: "",
                year: ""
            }
        }
    ]
}

const initialLinkData = {
    socialMedia: {
        linkedIn: "",
        twitter: "",
        instagram: "",
        facebook: ""
    },
    portfolioLinks: {
        portfolio: "",
        github: "",
        resume: ""
    }
}



const MultiStepForm = () => {
    const [detailsData, setDetails] = useState(initialDetailsData)
    const [skillsData, setSkills] = useForm(initialSkillsData)
    const [workData, setWork] = useForm(initialWorkData)
    const [educationData, setEducation] = useForm(initialEducationData)
    const [linkData, setLinks] = useForm(initialLinkData)
    console.log('DETAILS: ', detailsData)


    const { step, navigation } = useStep({ initialStep: 0, steps })
    const { id } = step

    const props = { navigation, detailsData, setDetails, skillsData, setSkills, 
    workData, setWork, educationData, setEducation, linkData, setLinks }

    switch (id) {
        case "details":
            return <Details {...props} />
        case "skills":
            return <Skills {...props} />
        case "work":
            return <Work {...props} />
        case "education":
            return <Education {...props} />
        case "links":
            return <Links {...props} />
        default:
            return null
    }
    // return <Details {...props} />
 

    
}

export default MultiStepForm