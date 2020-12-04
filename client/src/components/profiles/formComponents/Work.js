import React from 'react'
import RecentWork from './workComponents/Recent'
import PastWork from './workComponents/Past'


const Work = ({ setWork, workData, navigation }) => {
    const props = { setWork, workData, navigation }

    const { previous, next } = navigation;

    return(
        <div>
            <div>
                <div className="heading">
                    Work Information
                </div>
                <div>
                    <form>
                        <div>
                            <h3>Please Choose one:</h3>
                            <div className="radio">
                                <label>
                                    <input
                                        type="radio"
                                        value="looking"
                                    />
                                    Looking for work
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input
                                        type="radio"
                                        value="open"
                                    />
                                    Not looking for work, but open to offers
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input
                                        type="radio"
                                        value="notLooking"
                                    />
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
                        <button onClick={next}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Work