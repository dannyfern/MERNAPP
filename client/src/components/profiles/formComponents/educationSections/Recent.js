import React from 'react'


const MostRecent = ({ setEducationData, educationData, navigation }) => {

    const { school, degree, startDate, endDate } = educationData.mostRecent

    function changeHandler (e) {
        // console.log(e.target.name)
        // let name = e.target.name
        // let value = e.target.value
        // setFormData({
        //     ...formData,
        //     education: {
        //         mostRecent: {
        //             name: value
        //         }
        //     }
            
        // })
    }


    return(
        <div>
            <div>
                <label>
                    School
                </label>
                <input 
                    type="text"
                    name="school"
                    value={school}
                    onChange={changeHandler}

                />

            </div>
            <div>
                <label>
                    Degree
                </label>
                <input 
                    type="text"
                    name="degree"
                    value={degree}

                />

            </div>
            <div>
                <h4>Start date</h4>
                <label>
                    Month
                </label>
                <input 
                    type="text"
                    name="month"
                    value={startDate.month}

                />
                <label>
                    Year
                </label>
                <input 
                    type="text"
                    name="year"
                    value={startDate.year}

                />

            </div>
            <div>
                <h4>End date</h4>
                <label>
                    Month
                </label>
                <input 
                    type="text"
                    name="month"
                    value={endDate.month}

                />
                <label>
                    Year
                </label>
                <input 
                    type="text"
                    name="year"
                    value={endDate.year}

                />

            </div>
            

        </div>
    )
}


export default MostRecent