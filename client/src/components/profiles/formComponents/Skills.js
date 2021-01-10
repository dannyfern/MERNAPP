import React, { useEffect } from 'react'
import SkillsForm from './skillsComponents/SkillForm'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';
import FormInput from '../../reusable/FormInput'


const Skills = ({ setSkills, skillsData, navigation, form, profile }) => {

    useEffect(() => {
        if (form === "edit"){
            setSkills(profile.skillsData)
        }
    })

    

    const props = { setSkills, skillsData, navigation }
    const { skillLevel, yearsOfExperience } = skillsData
    const { previous, next } = navigation;

    // due to current bug, have to disable enter keypress from submitting :
    function onKeyPress (e) {
        if (e.which === 13 /* Enter */) {
            e.preventDefault();
        }
    }

    // function to handle dropdown and assign its value to the skill level in form data :
    function onSelect (e) {
        console.log(e)
        const { label, value } = e
        setSkills({
            ...skillsData,
            [value]: label
        })
    }
    // options for skill level drop down :

    const levelOptions = [
        {label: "Junior-level", value: "level"},
        {label: "Mid-level", value: "level"},
        {label: "Senior-level", value: "level"}
    ]

    const experienceOptions = [
        {label: "< 1", value: "experience"},
        {label: "1+", value: "experience"},
        {label: "3+", value: "experience"},
        {label: "5+", value: "experience"},
        {label: "7+", value: "experience"}
    ]

    return(
        <div>
            <div className="profileFormDiv">
                <div className="heading">
                    <h4>
                        Skills
                    </h4>
                </div>
                <form onKeyPress={onKeyPress}>
                    <div className="skillsFormSection">
                        <div className="skillsFormDisplay">
                            <div className="greySection">
                                <h3>Technical Skills</h3>
                                <SkillsForm {...props} skillType="technical"/>
                            </div>
                            <div className="greySection">
                                <h3>Soft Skills</h3>
                                <SkillsForm {...props} skillType="soft"/>
                            </div>
                        </div>
                        <div>
                            <h3>Experience</h3>
                            <div className="skillExperience">
                                <div className="formFields">
                                    <label>
                                        Skill level
                                    </label>
                                    {/* dropdown component from package : */}
                                    <Dropdown options={levelOptions} onChange={onSelect} value={skillLevel} id="skillDropDown" name="skillLevel" />
                                </div>
                                <div className="formFields">
                                    <label>
                                        Years of Experience
                                    </label>
                                    {/* <FormInput name="yearsOfExperience" value={yearsOfExperience} onChange={handleChange} className="yearsExp" /> */}
                                    <Dropdown options={experienceOptions} onChange={onSelect} value={yearsOfExperience} id="expDropDown" name="yearsOfExperience" />
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </form>
                <div className="navigationDiv">
                    <button className="nextBtn" onClick={previous}>back</button>  
                    <button className="nextBtn" onClick={next}>Next</button>
                </div>

                
                
            </div>
            
        </div>
    )
}


export default Skills