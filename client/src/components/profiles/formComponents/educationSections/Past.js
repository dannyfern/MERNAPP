import React from 'react'


const PastEducation = ({ setEducationData, educationData, navigation }) => {

    const { school, degree, startDate, endDate } = educationData.pastEducation[0]



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
                    name="startDate.month"
                    value={startDate.month}

                />
                <label>
                    Year
                </label>
                <input 
                    type="text"
                    name="startDate.year"
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
                    name="endDate.month"
                    value={endDate.month}

                />
                <label>
                    Year
                </label>
                <input 
                    type="text"
                    name="endDate.year"
                    value={endDate.year}

                />

            </div>
            <button>+</button>
        </div>
    )
}


export default PastEducation