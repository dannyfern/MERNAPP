import React, { useState } from 'react'

const SkillsForm = ({ setSkills, skillsData, navigation, skillType }) => {
    
    const [techSkills, setTechSkills] = useState([
        "",
    ])

    const [softSkills, setSoftSkills] = useState([
        "",
    ])





    const [tempVal, setTempVal] = useState("")
    const [tempName, setTempName] = useState("")

    // console.log(skillValues)


    function handleChange (e) {
        setTempVal(e.target.value)
        setTempName(e.target.name)
        

    }

    function handleSubmit (e) {
        
        console.log(tempVal)
        addToArray(tempVal)
        setTempVal("")
        // if (e.target.key === 'Enter') {
        //     e.preventDefault();
        //   }
        // console.log(skillValues[1])
        e.preventDefault()
        
    
        

    }

    const addToArray = (item) => {
        if (tempName === "technical"){
            const newArr = [...techSkills, item ]
            setTechSkills(newArr)
        } else if (tempName === "soft"){
            const newArr = [...softSkills, item]
            setSoftSkills(newArr)
        }
        
        

    }


    function Display(){
        
        if (tempName === "technical"){
            console.log("hello wtf")
            return techSkills.map((item, index) => 
                <li key={index}>{item}</li>
            )
                
        } else if (tempName === "soft"){
            return softSkills.map((item, index) => 
                <li key={index}>{item}</li>
            )
        } else return null

    }


    return(
        <div>
            
            <Display />
            
                
                
            
            <br></br>
            <label>
                Skill
            </label>
            <input
                type="text"
                name={skillType}
                value={tempVal}
                onChange={handleChange}
            />
            {/* {skillsData.technical} */}
            {/* {skillsData.soft} */}
            <button onClick={handleSubmit}>+</button>
        </div>
    )
}


export default SkillsForm