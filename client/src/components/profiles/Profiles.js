import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile'
import Dropdown from 'react-dropdown'
// import { useGlobalState} from '../../config/store'

const Profiles = ({ profileData }) => {

    // const { store } = useGlobalState()
    // const { userProfiles } = store
    // console.log("PROFILES", userProfiles)

    const filters = {
        level: "All",
        experience: "All"
    }


    const [filterData, setFilterData] = useState(filters)
    const colors = {
        looking: "#91ff95",
        open: "#a8dcff",
        notLooking: "#c2c2c2"
    }

    const [colour, setColour] = useState("")

    // console.log(profileData)

    const toggleFilter = () => {
        const div = document.getElementById("openFilter")
        if (div){
            (div.style.display === "none") ? (div.style.display = "flex") : (div.style.display = "none")
        }
    }

    

    const profiles = (profile) => {
        console.log(profile)
        const { details, skills, prospects } = profile
        const { name, username, interests } = details
        const { experiencelevel, yearsofexperience } = skills

        // const { status } = workData

        return (
            <Link to={`/profiles/${profile._id}`} id="profileLink">
                <div className="profileCard">
                    <div className="profileTopSection">
                        <div className="imagePlaceHolder">
                            <div className="img"></div>

                        </div>
                        <div className="profileTopDetails">
                            <h2>{name} </h2>
                            <h3>@{username} </h3>
                            <h4>{experiencelevel} Developer </h4>
                        </div>
                    </div>
                    <div className="profileBottomSection">
                        <ul>

                            <li key="status" id="prospects">{prospects} </li>
                            <li key="exp" >{yearsofexperience} years of experience </li>
                            {
                                interests &&
                                <li key="interests" >interests: {interests.join(", ")} </li>
                            }
                            
                        </ul>
                    </div>

                    
                </div>
            </Link>

        )


    }

    const Display = () => {
        const { level, experience } = filterData

        return (profileData
            .filter((x) => {
                if (level === "All"){
                    return x
                } else {
                    return x.skills.expriencelevel === level

                 
                     
                }
            })
            .filter((x) => {
                if (experience === "All"){
                    return x
                } else {

                
                    return x.skills.yearsofexperience === experience
                }
            })
            .map((profile) => {
                return profiles(profile)
            })

        )


        
    }



    const handleSelection = (e) => {

        const { value, label } = e

        setFilterData({
            ...filterData,
            [value]: label
        })
        console.log(filterData)
    }

    const levelOptions = [
        {label: "All", value: "level"},
        {label: "Junior-level", value: "level"},
        {label: "Mid-level", value: "level"},
        {label: "Senior-level", value: "level"}
    ]

    const experienceOptions = [
        {label: "All", value: "experience"},
        {label: "< 1", value: "experience"},
        {label: "1+", value: "experience"},
        {label: "3+", value: "experience"},
        {label: "5+", value: "experience"},
        {label: "7+", value: "experience"}
    ]



    return(
        <div>
            <div className="heading">
                <h1>Profiles</h1>
                <Link to="/profiles/new">New Profile</Link>

                <p className="profileFilters" onClick={toggleFilter} >Filter^</p>
                <div id="openFilter" className="filters">
                    <div className="filterDropdowns">
                        <div className="dropdownDiv">
                            <p>Experience level</p>
                            <Dropdown options={levelOptions} onChange={handleSelection} label="level" />
                        </div>
                        <div className="dropdownDiv">
                            <p>Years of experience</p>
                            <Dropdown options={experienceOptions} onChange={handleSelection} label="experience" />

                        </div>

                    </div>
                </div>
            </div>

            <div className="profileWrapper">
                <Display />
                

            </div>
            
        </div>
    )
}


export default Profiles