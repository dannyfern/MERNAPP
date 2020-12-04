import React from 'react'
import MostRecent from './educationSections/Recent'
import PastEducation from './educationSections/Past'

const Education = ( { setEducation, educationData, navigation }) => {
    
    const props = { setEducation, educationData, navigation }

    const { previous, next } = navigation;

    return(
        <div>
            <div className="heading">
                Education
            </div>
            <div className="profileFormDiv">

                <form className="profileForm">
                    <div>
                        <div>
                            <h3>Most Recent </h3>
                            <MostRecent {...props} />
                            <h3>Past Education</h3>

                            <PastEducation {...props} />
                            

                        </div>
                        <div>

                        </div>

                    </div>
                    
                    


                </form>
            </div>
            


        </div>
    )
}


export default Education