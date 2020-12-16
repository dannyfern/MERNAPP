import React, { useState } from 'react'
import CheckBox from '../../reusable/CheckBox'
import interestsCheckBoxes from './../../../config/interestsCheckBoxes'
import FormInput from '../../reusable/FormInput'

// have image shown on screen when uploaded - maybe look into components (antd)
// move checkbox data to data file (once merged)

const Details = ({ setDetails, detailsData, navigation }) => {
    
    // fields from detail form data :
    const { profilePhoto, firstName, lastName, username, location, 
    phoneNumber, birthday, bio, briefDescription } = detailsData

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
    const [checkedItems, setChecked] = useState(items)

    // array of names of items which are checked :
    const checkedTrue = []

    // function to handle checkbox toggle : 
    function handleCheckboxChange (e) {

        const item = e.target.name

        // - check if the item being checked is set to false in the checked items state
        // - if it is, change to true
        // - if it isnt, change to false
        if (checkedItems[item] === false){
            setChecked({
                ...checkedItems,
                [item]: true 
            })
        } else {
            setChecked({
                ...checkedItems,
                [item]: false
            })
        }
            
        // - put the items marked true into checkedtrue array
        for (const key in checkedItems){
            if (checkedItems[key] === true){
                checkedTrue.push(key)
            }
        }

        // set form data for interests to include all checked true items
        setDetails({
            ...detailsData,
            interests: [...checkedTrue]
        })
    }

    // function to handle change of regular form inputs :
    function handleChange (e) {
        const { name, value } = e.target
        setDetails({
            ...detailsData,
            [name]: value
        })
    }

    // function for image upload :
    function uploadImg (e) {
        setDetails({
            ...detailsData,
            profilePhoto: e.target.files[0]
        })
    }


    return(
        <div>
            <div>
                <div className="heading">
                    <h4>
                        Personal Details
                    </h4>
                </div>

                <div className="profileFormDiv">
                    <div className="profilePhoto">
                        <img
                            src={profilePhoto}
                            alt="profilePhoto"
                            />
                    </div>


                    <form className="profileForm">


                        <div className="profilePhotoUpload">
                            <label>Profile Photo:</label>
                            <input 
                                type="file"
                                name="profilePhoto"
                                accept="image/png, image/jpeg"
                                multiple="false"
                                onChange={uploadImg}
                               
                            />

                        </div>



                        <div>
                            <label>
                                First Name:
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
                            { // map over checkbox items from checkbox data file :
                                interestsCheckBoxes.map((item, index) => {
                                    const { name } = item
                                    let isChecked = checkedItems[name]
                                    return(
                                        <div key={index}>
                                            <label>{item.label}</label>
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