import React, { useState, useEffect } from 'react'
import RecentWork from './workComponents/Recent'
import PastWork from './workComponents/Past'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



const Work = ({ setWork, workData, navigation, form, profile }) => {

    const props = { setWork, workData, navigation }
    const { previous, next } = navigation;
    const { prospects } = workData

    useEffect(() => {
        if (form === "edit"){
            setWork(profile.workData)
        }
    })

    



    // handle change function for radio group for work status :
    function handleChange (e) {
        setWork({
            ...workData,
            prospects: e.target.value
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
                            <FormControl component="fieldset">
                                {/* <FormLabel component="legend">Future Employment Status</FormLabel> */}
                                <RadioGroup aria-label="gender" name="gender1" value={prospects} onChange={handleChange} className="radioGroupWork">
                                    <FormControlLabel value="looking" control={<Radio />} label="I'm looking for work" />
                                    <FormControlLabel value="open" control={<Radio />} label="I'm not currently looking, but I'm open to offers" />
                                    <FormControlLabel value="notLooking" control={<Radio />} label="I'm not looking for work" />
                                    
                                </RadioGroup>
                                </FormControl>

                            
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