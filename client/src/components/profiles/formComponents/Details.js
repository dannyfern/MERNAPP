import React, {useState} from 'react'


const Details = ({ setDetails, detailsData, navigation }) => {
    // const { details } = formData
    const {firstName, lastName, username, location, 
    phoneNumber, birthday, interests, bio, briefDescription } = detailsData

    const { next } = navigation;

    // const { day, month, year } = birthday


    // function handleChange (event) {
    //     const name = event.target.name
    //     const value = event.target.value

    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     })
    // }

    function handleSubmit (e) {
        e.preventDefault()
        console.log(e.target)
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
                                    name="birthday.day"
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
                                    name="birthday.month"
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
                                    name="birthday.year"
                                    value={birthday.year}
                                    onChange={setDetails}
                                />

                            </div>


                        </div>
                        <div className="interestsCheckBoxes">
                            <h4>Interests</h4>
                            

                            

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