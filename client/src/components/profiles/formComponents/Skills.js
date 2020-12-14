import React from 'react'
import SkillsForm from './skillsComponents/SkillForm'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';
// import './../../../styles/Profile.css'
import FormInput from './reusable/FormInput'


const Skills = ({ setSkills, skillsData, navigation, detailsData }) => {
    const props = { setSkills, skillsData, navigation }

    const { skillLevel, yearsOfExperience } = skillsData
    console.log(skillsData)


    const { previous, next } = navigation;

    // due to current bug, have to disable enter keypress from submitting :
    function onKeyPress (e) {
        if (e.which === 13 /* Enter */) {
            e.preventDefault();
        }
    }

    function handleChange (e) {
        console.log(e)
        const name = e.target.name
        const value = e.target.value
        setSkills({
            ...skillsData,
            [name]: value
        })
        console.log(skillsData)

    }



    function onSelect (e) {
        const value = e.value
        setSkills({
            ...skillsData,
            skillLevel: value
        })
        console.log(skillsData)
    }

    const options = ['Aspirational', 'Junior-level', 'Mid-level', 'Senior-level']

    return(
        <div>
            <div className="profileFormDiv">
                <div className="heading">
                    Skills
                </div>
                <form onKeyPress={onKeyPress}>
                    <div>
                        <h3>Technical Skills</h3>
                        <SkillsForm {...props} skillType="technical"/>
                    </div>
                    <div>
                        <h3>Soft Skills</h3>
                        <SkillsForm {...props} skillType="soft"/>
                    </div>
                    <div>
                        <h3>Experience</h3>
                        <div>
                            <label>
                                Skill level
                            </label>
                            <Dropdown options={options} onChange={onSelect} value={skillLevel} id="skillDropDown" name="skillLevel" />
                        </div>
                        <div>
                            <label>
                                Years of Experience
                            </label>
                            <FormInput name="yearsOfExperience" value={yearsOfExperience} onChange={handleChange} />
                            
                        </div>
                        
                        
                    </div>
                </form>
                <div>
                <button onClick={previous}>back</button>  
                    <button onClick={next}>Next</button>
                </div>

                
                
            </div>
            
        </div>
    )
}


export default Skills