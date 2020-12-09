import React, {useState, useEffect} from 'react'
import CheckBox from './reusable/CheckBox'
import interestsCheckBoxes from './../../../config/interestsCheckBoxes'
import FormInput from './reusable/FormInput'
import './../../../'

const Details = ({ setDetails, detailsData, navigation }) => {
    
    // fields from detail form data :
    const {firstName, lastName, username, location, 
    phoneNumber, birthday, interests, bio, briefDescription } = detailsData

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

    
 

    function handleChange (e) {
        
        const item = e.target.name

        setChecked({
            ...checkedItems,
            [item]: true 
        })
        console.log('after ', checkedItems)
        

        

        

        console.log(detailsData.interests)

    }

    return(
        <div>
            <div>
                <div className="heading">
                    details
                </div>

                <div className="profileFormDiv">
                    


                    <form className="profileForm" onSubmit={handleSubmit}>

                        {/* profile photo : */}
                        <div className="profilePhotoUpload">
                            <label>Profile Photo</label>
                            <input 
                                type="file"
                                name="profilePhoto"
                                accept="image/png, image/jpeg"
                            />

                        </div>



                        <div>
                            <label>
                                First Name:
                                {firstName}
                            </label>
                            <FormInput name="firstName" value={firstName} onChange={setDetails} />  
                        </div>

                        
                        <div>
                            <label>
                                Last Name:
                            </label>
            
                            <FormInput name="lastName" value={lastName} onChange={setDetails} />
                        </div>


                        
                        <div>
                            <label>
                                Username:
                            </label>
                            <FormInput name="username" value={username} onChange={setDetails} /> 
                        </div>

                        
                        <div>
                            <label>
                                Location:
                            </label>
        
                            <FormInput name="location" value={location} onChange={setDetails} />
                        </div>
                        
                        <div>

                            <label>
                                Phone Number:
                            </label>
                            <FormInput name="phoneNumber" value={phoneNumber} onChange={setDetails} />
                        </div>

                        <div className="birthdayFields">
                            <label>Birthday</label>

                            <FormInput type="date" name="birthday" value={birthday} />
        
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

                                            <CheckBox name={item.name} checked={isChecked} onChange={handleChange}  />
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
                                onChange={setDetails}
                            />
                        </div>

                        <div>
                            <label>
                                Brief Description:
                            </label>
                            <textarea 
                                name="briefDescription"
                                value={briefDescription}
                                onChange={setDetails}
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