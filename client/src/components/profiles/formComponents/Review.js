import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import { getProfileFromId, updateProfile } from '../../../services/profileServices'
// import { useGlobalState } from '../../../config/store'
import { addProfile, loadUserId } from './../../../config/api'

import { USER_LOADED } from './../../../actions/constants'

import axios from 'axios'
import store from './../../../store'


// make DRY !!!!!!!
// fix functionality for files and arrays

const Review = ({ detailsData, skillsData, workData, educationData, linkData, navigation, nextIdProfile, addProfile, profiles, form, match }) => {
  
  console.log(store)

  const profileId = match && match.params ? match.params.id : -1
  const profile = getProfileFromId(profiles, profileId)

 


  let history = useHistory()

  // const {store, dispatch} = useGlobalState()
  // const {userProfiles} = store

  // const [errorMessage, setErrorMessage] = useState(null)

  const { previous } = navigation;

  




  const createProfile = (e) => {

    e.preventDefault()




    

    
    // console.log("DATA", data)
    const newProfile = {
      _id: nextIdProfile,
      // modified_date: new Date(),
      user: localStorage.userId,
      details: detailsData,
      skills: skillsData,
      currentroles: workData.currentroles,
      pastroles: workData.pastroles,
      prospects: workData.prospects,
      qualifications: educationData,
      socials: linkData.socials,
      portfolio: linkData.portfolio

    }
    // console.log("NEW", newProfile)

    addProfile(newProfile)
    history.push(`/profiles/${newProfile._id}`)
    // console.log("NEW", newProfile)
    



    // addProfile(newProfile).then((newProfile) => {
    //   dispatch({
    //     type: "setUserProfiles",
    //     data: [newProfile, ...userProfiles]
    //   })
      


    // }).catch((error) => {
    //   const status = error.response ? error.response.status : 500
    //   console.log("caught error creating profile", error)
    //   if (status === 403)
    //   setErrorMessage("lost login session")
    //   else 
    //     setErrorMessage("problem on the server")
    // })
    
    
  
  }

  const updateProfile = (e) => {
    e.preventDefault()
    const updatedProfile = {
      _id: nextIdProfile,
      modified_date: new Date(),
      detailsData: detailsData,
      skillsData: skillsData,
      workData: workData,
      educationData: educationData,
      linkData: linkData
    }

    // updateProfile(updatedProfile).then(() => {
    //   const otherProfiles = userProfiles.filter((profile) => profile._id !== updatedProfile._id )
    //   dispatch({
    //     type: "setUserProfiles",
    //     data: [updatedProfile, ...otherProfiles]
    //   })
    //   history.push(`/profiles/${profile._id}`)
    // }).catch((error) => {
    //   const status = error.response ? error.response.status : 500
    //   console.log("caught error on edit", error)
    //   if(status === 403)
    //       setErrorMessage("Oops! It appears we lost your login session. Make sure 3rd party cookies are not blocked by your browser settings.")
    //   else
    //       setErrorMessage("Well, this is embarrassing... There was a problem on the server.")
    // })

  }

  


  return (
    <div>
      <div className="heading">
        <h4>
          Review your details
        </h4>
      </div>
      <div>


        <div>
          <h3 className="greyTitle">Details</h3>
          <div className="reviewDivs">

            {/* {
              Object.entries(detailsData).map(([key, value]) => {


                if (typeof(value) === "object" && value.length > 1){
                  return (<div>
                    <li>Interests:</li>
                    {value.map((x) => <li key={x}>{x}</li>)}
                  </div>
                  )
                } 
                
                else if (key === "profilePhoto"){
                  console.log(key, value, value.name)
                  return (
                    <div>
                      <li>profile photo:</li>
                      <li key={key}>{value.name}</li>
                    </div>
                  )

                }
                
                return <li key={key}>{key}: {value}</li>

              })
            } */}


          </div>
        </div>



        <div>
          <h3 className="greyTitle">Skills</h3>
          <div className="reviewDivs">
            {/* {
              Object.entries(skillsData).map(([key, value]) => {

                return <li key={key}>{key}: {value}</li>
              })
            } */}
          </div>
        </div>



        <div>
          <h3 className="greyTitle">Work</h3>
          <div className="reviewDivs">
            {/* {
              Object.entries(workData).map(([key, value]) => {

                if (typeof(value) === "object"){
                  return value.map(x => {
                    return (
                      
                      <div>
                        <h5> Past Role</h5>
                        <li>title: {x.title}</li>
                        <li>company: {x.company}</li>
                        <li>dates: {x.startDate} - {x.endDate}</li>

                      </div>
                    )
                  })
                }

                return <li key={key}>{key}: {value}</li>

              })
            } */}
          </div>
        </div>


        <div>
          <h3 className="greyTitle">Education</h3>
          <div className="reviewDivs">

          {
            // console.log("edu, ", educationData)
            // educationData.map((x) => {
            //   console.log("EDUCATION MAP: ", x)
            //   return Object.entries(x).map(([key, value]) => {

            //     return <li key={key}>{key}: {value}</li>

            //   })
            // })
              // Object.entries(educationData).map(([key, value]) => {

              //   if (typeof(value) === "object"){
              //     return value.map(x => {
              //       return (
                      
              //         <div>
              //           <h5> Past Education</h5>
              //           <li>School: {x.institution}</li>
              //           <li>degree: {x.degree}</li>
              //           <li>dates: {x.startdate} - {x.enddate}</li>

              //         </div>
              //       )
              //     })
          }
                
              
          </div>
        </div>



        <div>
          <h3 className="greyTitle">Links</h3>
          <div className="reviewDivs">
          {/* {
              Object.entries(linkData).map(([key, value]) => {
                if (key === "resume"){
                  console.log("RESUME", key, value)
                  return (
                    <div>
                      <li>Resume:</li>
                      <li key={key}>{value.name}</li>
                    </div>
                  )
                } else if (typeof(value) === "object"){
                  return Object.entries(value).map(([k, v]) => {
                    return (
                      <div>
                        <li>{k}: {v}</li>
                      </div>
                    )
                  })
                } else 
                return <li key={key}>{key}: {value}</li>
              })
            } */}
          </div>
        </div>

      </div>
      <div className="navigationDiv">
          <button className="nextBtn" onClick={previous}>back</button>
          {
            (form === "edit") ? (<button className="nextBtn" onClick={updateProfile}>Update Profile</button>) : (<button className="nextBtn" onClick={createProfile}>Create Profile</button>)
          }  
          
      </div>
      

    </div>

  )

}


export default Review
