import React from 'react'
import RecentWork from './workComponents/Recent'
import PastWork from './workComponents/Past'
import FormInput from './reusable/FormInput'

const Work = ({ setWork, workData, navigation, detailsData, skillsData }) => {
    const props = { setWork, workData, navigation }
    console.log(skillsData)

    const { previous, next } = navigation;

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
                            <div className="radio">
                                <label>
                                    <FormInput value="looking" type="radio" onChange={setWork} />
                                    Looking for work
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                <FormInput value="open" type="radio" onChange={setWork} />
                                    Not looking for work, but open to offers
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                <FormInput value="notLooking" type="radio" onChange={setWork} />
                                    Not looking for work
                                </label>
                            </div>

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