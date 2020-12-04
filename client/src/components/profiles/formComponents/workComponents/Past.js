import React from 'react'


const PastWork = ({ setWork, workData, navigation }) => {
    const { title, company, startDate, endDate } = workData.pastRoles[0]

    return(
        <div>
            <div>
                <label>
                    Title
                </label>
                <input 
                    type="text"
                    name="title"
                    value={title}
                />
            </div>
            <div>
                <label>
                    Company
                </label>
                <input 
                    type="text"
                    name="company"
                    value={company}
                />
            </div>
            <h3>Start date</h3>
            <div>
                <label>
                    Month
                </label>
                <input 
                    type="text"
                    name="startDate.month"
                    value={startDate.month}
                />
            </div>
            <div>
                <label>
                    Year
                </label>
                <input 
                    type="text"
                    name="startDate.year"
                    value={startDate.year}
                />
            </div>

            <h3>End date</h3>
            <div>
                <label>
                    Month
                </label>
                <input 
                    type="text"
                    name="endDate.month"
                    value={endDate.month}
                />
            </div>
            <div>
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

export default PastWork