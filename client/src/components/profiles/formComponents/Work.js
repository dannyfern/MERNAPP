import React from 'react'
import RecentWork from './workComponents/Recent'
import PastWork from './workComponents/Past'
import FormInput from './reusable/FormInput'
import { RadioGroup, RadioButton } from 'react-radio-buttons'

const Work = ({ setWork, workData, navigation, detailsData, skillsData }) => {
    const props = { setWork, workData, navigation }
    const { status, currentTitle, currentCompany, currentStartDate, pastRoles } = workData
    // console.log(skillsData)

    const { previous, next } = navigation;

    function handleChange (e) {
        console.log(e)
        setWork({
            ...workData,
            status: e
        })
        console.log(workData)
    }

    return(
        <div>
            <div className="profileFormDiv">
                <div className="heading">
                    Work Information
                </div>
                <div>
                    <form>
                        <div>
                            <h3>Please Choose one:</h3>
                            <RadioGroup onChange={handleChange} horizontal>
                                <RadioButton value="looking">
                                    Looking for Work
                                </RadioButton>
                                <RadioButton value="open">
                                    Not looking for work, but open to offers
                                </RadioButton>
                                <RadioButton value="notLooking">
                                    Not looking for work
                                </RadioButton>

                            </RadioGroup>

                        </div>
                        
                        <div>
                            <h3>Current Role</h3>
                            <RecentWork {...props} />
                        </div>

                        <div>
                            <h3>Past Roles</h3>
                            <PastWork {...props} />

                        </div>

                    </form>
                    <div>
                        <button onClick={previous}>Back</button>
                        <button onClick={next}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Work