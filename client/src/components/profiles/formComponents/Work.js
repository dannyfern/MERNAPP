import React from 'react'
import RecentWork from './workComponents/Recent'
import PastWork from './workComponents/Past'
import { RadioGroup, RadioButton } from 'react-radio-buttons'

const Work = ({ setWork, workData, navigation }) => {

    const props = { setWork, workData, navigation }
    const { previous, next } = navigation;


    // handle change function for radio group for work status :
    function handleChange (e) {
        setWork({
            ...workData,
            status: e
        })
    }

    return(
        <div>
            <div className="profileFormDiv">
                <div className="heading">
                    <h4>
                        Work Information
                    </h4>
                </div>
                <div>
                    <form>

                        <div className="recentWork">
                            <h3>Current Role</h3>
                            <RecentWork {...props} />
                        </div>

                        <div className="pastWork">
                            <h3>Past Roles</h3>
                            <PastWork {...props} />
                        </div>


                        <div className="statusSelection">
                            <h3>Please Choose one:</h3>
                            {/* radio button component from package */}

                            <RadioGroup className="statusRadio" onChange={handleChange} horizontal>
                                <RadioButton value="looking" className="statusOption">
                                    Looking for Work
                                </RadioButton>
                                <RadioButton value="open" className="statusOption">
                                    Not looking for work, but open to offers
                                </RadioButton>
                                <RadioButton value="notLooking" className="statusOption">
                                    Not looking for work
                                </RadioButton>
                            </RadioGroup>
                        </div>

                    </form>

                    <div className="navigationDiv">
                        <button className="nextBtn" onClick={previous}>back</button>  
                        <button className="nextBtn" onClick={next}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Work