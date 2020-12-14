import React, { useState } from 'react'
import FormInput from './../reusable/FormInput'

const PastWork = ({ setWork, workData, navigation }) => {
    const {pastRoles} = workData
    const pastRole = {
        title: "",
        company: "", 
        startDate: "", 
        endDate: ""
    }

    
    const [tempVals, setTempVals] = useState(pastRole)
    const [roles, setRoles] = useState([])
    const { title, company, startDate, endDate } = tempVals

    function handleChange (e) {
        const name = e.target.name
        const value = e.target.value
        setTempVals({
            ...tempVals,
            [name]: value
        })
    }

    function handleClick (e) {
        e.preventDefault()

        setWork({
            ...workData,
            pastRoles: [...pastRoles, tempVals]
        })
        setTempVals(pastRole)
        
    }

    function Display (){

        if (pastRoles){
            return (
                pastRoles.map((item, index) => {
                    return (
                        <div key={index}>
                            <h3>role: {index + 1}</h3>

                            {
                                Object.entries(item).map(([key, value]) => {
                                    return <li key={key}>{key}: {value}</li>
                                })
                            }
                        </div>
                        
                    
                    )
                })
                
            )
        } else return null
    }

    // return <li key={index}>{item}</li>

    // pastRoles.map(item => {
    //     console.log('ITEMS: ', item)
    // })


    return(
        <div>
            <div>
                <Display />
            </div>

            <div>
                <label>
                    Title
                </label>
                <FormInput name="title" value={title} onChange={handleChange} />
            </div>
            <div>
                <label>
                    Company
                </label>
                <FormInput name="company" value={company} onChange={handleChange} />
            </div>
            <div>
                <label>
                Start date
                </label>
                <FormInput type="date" name="startDate" value={startDate} onChange={handleChange} />
            </div>
            <div>
                <label>
                End date
                </label>
                <FormInput type="date" name="endDate" value={endDate} onChange={handleChange} />
            </div>
            <button onClick={handleClick}>+</button>
        </div>
    )
}

export default PastWork