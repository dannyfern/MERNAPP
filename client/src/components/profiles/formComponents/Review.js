import React from "react";

// make DRY !!!!!!!
// fix functionality for files and arrays

const Review = ({ setForm, detailsData, skillsData, workData, educationData, linkData, navigation }) => {
  
  const { go, previous } = navigation;


  // function Display (data) {
  //   return (
  //     Object.entries(data).map(([key, value]) => {
  //       return <li key={key}>{key}: {value}</li>
  //     })
  //   )
  // }
  // console.log(linkData.additionalLinks)


  return (
    <div>
      <div className="heading">
        <h4>
          Review your details
        </h4>
      </div>
      <div>


        <div>
          <h3>Details</h3>
          <div>

            {
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
            }


          </div>
        </div>



        <div>
          <h3>Skills</h3>
          <div>
            {
              Object.entries(skillsData).map(([key, value]) => {

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
            }
          </div>
        </div>


        <div>
          <h3>Education</h3>
          <div>
          {
              Object.entries(educationData).map(([key, value]) => {

                if (typeof(value) === "object"){
                  return value.map(x => {
                    return (
                      
                      <div>
                        <h5> Past Education</h5>
                        <li>School: {x.school}</li>
                        <li>degree: {x.degree}</li>
                        <li>dates: {x.startDate} - {x.endDate}</li>

                      </div>
                    )
                  })
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
