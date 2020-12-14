import React from "react";

const Review = ({ setForm, detailsData, skillsData, workData, educationData, linkData, navigation }) => {
  
  const { go, previous } = navigation;

  // console.log(linksData)


  return (
    <div>
      <div className="heading">
        Review your details
      </div>
      <div>
        <div>
          <h3>Details</h3>
          <div>
            {
              Object.entries(detailsData).map(([key, value]) => {
                // if (key === "interests" ){
                //   return key.map((x) => <li key={x}>x</li>)
                // } else
                if (key === "interests" || key === "profilePhoto"){
                  return null
                }
                return <li key={key}>{key}: {value}</li>

              })
            }


          </div>
        </div>
        <div>
          <h3>Skills</h3>
          <div>
            {
              Object.entries(skillsData).map(([key, value]) => {
                if (key === "soft" || key === "technical"){
                  return null
                }
                return <li key={key}>{key}: {value}</li>
              })
            }
          </div>
        </div>
        <div>
          <h3>Work</h3>
          <div>
            {
              Object.entries(workData).map(([key, value]) => {
                if (key === "pastRoles"){
                  return null
                }
                return <li key={key}>{key}: {value}</li>

              })
            }
          </div>
        </div>
        <div>
          <h3>Education</h3>
          <div>
          {
              Object.entries(educationData).map(([key, value]) => {

                if (key === "pastEducation"){
                  return null
                }
                return <li key={key}>{key}: {value}</li>
              })
            }
          </div>
        </div>
        <div>
          <h3>Links</h3>
          <div>
          {
              Object.entries(linkData).map(([key, value]) => {
                if (key === "additionalLinks" || "resume"){
                  return null
                }
                return <li key={key}>{key}: {value}</li>
              })
            }
          </div>
        </div>

      </div>
      <button onClick={previous}>back</button>
      <button>Create Profile</button>

    </div>

  )

}


export default Review
