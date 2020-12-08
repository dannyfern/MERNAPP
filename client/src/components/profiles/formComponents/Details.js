import React, {useState, useEffect} from 'react'
import CheckBox from './reusable/CheckBox'
import interestsCheckBoxes from './../../../config/interestsCheckBoxes'


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

    console.log('checked true: ', checkedTrue)
    
    // setDetails({
    //     ...detailsData,
    //     interests: [...interests, ...checkedTrue]
    // })

    useEffect(() => {
        setDetails({
            target: {
                name: "interests",
                value: checkedTrue
            }
        })
    }, [])

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
                            <div className="profilePhotoUpload">
                                <label>Profile Photo</label>
                                <input 
                                    type="file"
                                    name="profilePhoto"
                                />

                            </div>


                        <label>
                            First Name:
                            {firstName}
                        </label>
                        <input 
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={setDetails}
                        />

                        <label>
                            Last Name:
                        </label>
                        <input 
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={setDetails}
                        />

                        <label>
                            Username:
                        </label>
                        <input 
                            type="text"
                            name="username"
                            value={username}
                            onChange={setDetails}
                        />

                        <label>
                            Location:
                        </label>
                        <input 
                            type="text"
                            name="location"
                            value={location}
                            onChange={setDetails}
                        />

                        <label>
                            Phone Number:
                        </label>
                        <input 
                            type="text"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={setDetails}
                        />

                        <div className="birthdayFields">
                            <label>Birthday</label>
                            <div>
                                <label>
                                    Day:
                                </label>
                                <input 
                                    type="text"
                                    name="day"
                                    value={birthday.day}
                                    onChange={setDetails}
                                />

                            </div>
                            <div>
                                <label>
                                    Month:
                                </label>
                                <input 
                                    type="text"
                                    name="month"
                                    value={birthday.month}
                                    onChange={setDetails}
                                />

                            </div>

                            <div>
                                <label>
                                    Year:
                                </label>
                                <input 
                                    type="text"
                                    name="year"
                                    value={birthday.year}
                                    onChange={setDetails}
                                />

                            </div>


                        </div>
                        <div className="interestsCheckBoxes">
                            <h4>Interests</h4>
                            {
                                interestsCheckBoxes.map((item, index) => {
                                    const name = item.name
                                    // console.log(name)
                                    // console.log(checkedItems.[name])
                                    const isChecked = checkedItems.[name]
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
                        <label>
                            Bio:
                        </label>
                        <textarea 
                            name="bio"
                            value={bio}
                            onChange={setDetails}
                        />
                        <label>
                            Brief Description:
                        </label>
                        <textarea 
                            name="briefDescription"
                            value={briefDescription}
                            onChange={setDetails}
                        />

                        {/* <input type="submit" value="next" /> */}

                        
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