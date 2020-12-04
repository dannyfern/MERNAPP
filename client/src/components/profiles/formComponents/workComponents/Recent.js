import React from 'react'


const RecentWork = ({ setFormData, formData, navigation }) => {
    const { title, company, startDate } = formData.work.currentRole

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

        </div>
    )
}

export default RecentWork