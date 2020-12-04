import React from 'react'
import SkillsForm from './skillsComponents/SkillForm'

const Skills = ({ setSkills, skillsData, navigation }) => {
    const props = { setSkills, skillsData, navigation }

    const { yearsOfExperience } = skillsData

    const { previous, next } = navigation;

    // due to current bug, have to disable enter keypress from submitting :
    function onKeyPress (e) {
        if (e.which === 13 /* Enter */) {
            e.preventDefault();
          }
    }

    return(
        <div>
            <div>
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
                            <select>
                                <option>Junior-level</option>
                                <option>Mid-level</option>
                                <option>Senior-level</option>
                            </select>
                        </div>
                        <div>
                            <label>
                                Years of Experience
                            </label>
                            <input 
                                type="text"
                                name="yearsOfExperience"
                                value={yearsOfExperience}
                            />
                        </div>
                        
                        
                    </div>
                </form>
                
                
            </div>
            
        </div>
    )
}


export default Skills