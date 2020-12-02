import React, {useState} from 'react'


const Details = ({ setFormData, formData, navigation }) => {
    const {firstName, lastName, username, location, 
    phoneNumber, birthday, interests, bio, briefDescription } = formData.details

    const { day, month, year } = birthday


    function handleChange (event) {
        const name = event.target.name
        const value = event.target.value

        setFormData({
            ...formData,
            [name]: value
        })
    }


    return(
        <div>
            <div>
                <div className="heading">
                    details
                </div>

                <div className="profileFormDiv">
                    


                    <form className="profileForm">
                            <div className="profilePhotoUpload">
                                <label>Profile Photo</label>
                                <input 
                                    type="file"
                                    name="profilePhoto"
                                />

                            </div>


                        <label>
                            First Name:
                        </label>
                        <input 
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={handleChange}
                        />

                        <label>
                            Last Name:
                        </label>
                        <input 
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={handleChange}
                        />

                        <label>
                            Username:
                        </label>
                        <input 
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleChange}
                        />

                        <label>
                            Location:
                        </label>
                        <input 
                            type="text"
                            name="location"
                            value={location}
                            onChange={handleChange}
                        />

                        <label>
                            Phone Number:
                        </label>
                        <input 
                            type="text"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={handleChange}
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
                                    value={day}
                                    onChange={handleChange}
                                />

                            </div>
                            <div>
                                <label>
                                    Month:
                                </label>
                                <input 
                                    type="text"
                                    name="month"
                                    value={month}
                                    onChange={handleChange}
                                />

                            </div>

                            <div>
                                <label>
                                    Year:
                                </label>
                                <input 
                                    type="text"
                                    name="year"
                                    value={year}
                                    onChange={handleChange}
                                />

                            </div>


                        </div>
                        <div className="interestsCheckBoxes">
                        <label>
                            Interests:
                        </label>
                        <input 
                            
                        />
                        </div>
                        <label>
                            Bio:
                        </label>
                        <textarea 
                            name="bio"
                            value={bio}
                            onChange={handleChange}
                        />
                        <label>
                            Brief Description:
                        </label>
                        <textarea 
                            name="briefDescription"
                            value={briefDescription}
                            onChange={handleChange}
                        />

                        <input type="submit" value="next" />

                        
                    </form>
                    
                </div>

            </div>
            
        </div>
    )
}


export default Details