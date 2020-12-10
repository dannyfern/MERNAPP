import React, { useState, useEffect, useRef } from 'react'
import CheckBox from './reusable/CheckBox'
import interestsCheckBoxes from './../../../config/interestsCheckBoxes'
import FormInput from './reusable/FormInput'
import profileImg from './../../../img/default-profile.png'


const Details = ({ setDetails, detailsData, navigation }) => {
    
    // fields from detail form data :
    const { profilePhoto, firstName, lastName, username, location, 
    phoneNumber, birthday, interests, bio, briefDescription } = detailsData
    // setDetails({
    //     profilePhoto: {profileImg}
    // })

    // next from hooks helper
    const { next } = navigation;

    // declare empty object for ticked interests
    const items = {}

    // fill object with key value pairs with keys being names from checkbox data and setting 
    // initial value to be false :
    for (const key of interestsCheckBoxes) {
        const name = key.name
        items[name] = false
    }
    

    // use object from above to track checked items :
    const [checkedItems, setChecked ] = useState(items)



    function handleSubmit (e) {
        e.preventDefault()
        console.log(e.target)
    }

    
    const checkedTrue = []
    
    for (const key in checkedItems){
        if (checkedItems[key] === true){
            checkedTrue.push(key)
        }
    }

 

    function handleCheckboxChange (e) {
        
        const item = e.target.name

        
        setChecked({
            ...checkedItems,
            [item]: true 
        })

    }

    function handleChange (e) {
        const name = e.target.name
        const value = e.target.value
        setDetails({
            ...detailsData,
            [name]: value
        })
        // console.log(detailsData)
        console.log('DETAILS on change: ', detailsData.firstName)
    }

    function updateImg (e) {

    }



    // const refContainer = useRef(profileImg)

    return(
        <div>
            <div>
                <div className="heading">
                    details
                </div>

                <div className="profileFormDiv">
                    <div className="profilePhoto">
                        <img
                            src={profilePhoto}
                            alt="profilePhoto"
                            />
                    </div>
                    <div>
                   

                    </div>


                    <form className="profileForm" onSubmit={handleSubmit}>

                        {/* profile photo : */}
                        <div className="profilePhotoUpload">
                            <label>Profile Photo:</label>
                            <input 
                                type="file"
                                name="profilePhoto"
                                value={profilePhoto}
                                accept="image/png, image/jpeg"
                                multiple="false"
                                onChange={updateImg}
                               
                            />

                        </div>



                        <div>
                            <label>
                                First Name:
                                {firstName}
                            </label>
                            <FormInput name="firstName" value={firstName} onChange={handleChange} />  
                        </div>

                        
                        <div>
                            <label>
                                Last Name:
                            </label>
            
                            <FormInput name="lastName" value={lastName} onChange={handleChange} />
                        </div>


                        
                        <div>
                            <label>
                                Username:
                            </label>
                            <FormInput name="username" value={username} onChange={handleChange} /> 
                        </div>

                        
                        <div>
                            <label>
                                Location:
                            </label>
        
                            <FormInput name="location" value={location} onChange={handleChange} />
                        </div>
                        
                        <div>

                            <label>
                                Phone Number:
                            </label>
                            <FormInput name="phoneNumber" value={phoneNumber} onChange={handleChange} />
                        </div>

                        <div className="birthdayFields">
                            <label>Birthday</label>

                            <FormInput type="date" name="birthday" value={birthday} onChange={handleChange}/>
        
                        </div>


                        <div className="interestsCheckBoxes">
                            <h4>Interests</h4>
                            {
                                interestsCheckBoxes.map((item, index) => {
                                    const name = item.name
                                    const isChecked = checkedItems[name]
                                    return(
                                        <div key={index}>
                                            <label>
                                            {item.label}
                                            </label>

                                            <CheckBox name={item.name} checked={isChecked} onChange={handleCheckboxChange}  />
                                        </div>
                                    )
                                    
                                })

                                
                            }
                            

                        </div>

                        <div>
                            <label>
                                Bio:
                            </label>
                            <textarea 
                                name="bio"
                                value={bio}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label>
                                Brief Description:
                            </label>
                            <textarea 
                                name="briefDescription"
                                value={briefDescription}
                                onChange={handleChange}
                            />
                        </div>
                        

                        
                    </form>
                    <div>
                        <button onClick={next}>next</button>
                    </div>

                    
                </div>

            </div>
            
        </div>
    )
}


export default Details