import React, { useState } from 'react'
import FormInput from '../../reusable/FormInput'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';

// need to add validation on additional links form -> display error message if no name for additional link is selected

const Links = ({ setLinks, linkData, navigation,  }) => {

    // form props :
    const { linkedIn, twitter, instagram, facebook, additionalLinks, portfolio, github, resume } = linkData
    

    // for wizard form navigation :
    const { previous, next } = navigation;


    // local states for controlled forms :
    const [tempValue, setTempValue] = useState("")
    const [tempName, setTempName] = useState("")
    const [defaultOption, setDefaultOption] = useState("")


    // sets temp values for additional links form :
    function handleAdditional (e) {
        setTempValue(e.target.value)
    }


    // add form :
    // find div, create input element, set attributes of type and id, set value, add event listener for change,
    // append the input field to the div, 
    const addFormField = (e) => {

        const div = document.getElementById("additionalForms")
        const valueField = document.createElement("INPUT")

        valueField.setAttribute("type", "text")
        valueField.setAttribute("id", "valueField")
        valueField.value = tempValue

        valueField.addEventListener("change", handleAdditional)

        div.appendChild(valueField)

    }


    // options for dropdown of additional links :
    const options = [
        "Youtube", "Pinterest", "Reddit", "Codewars", "Stack Overflow"
    ]


    // function for selecting dropdown options :
    // set the temp name for the additional link from selected value,
    // add a form field if there are no items in additional links object
    function onSelect (e) {

        const {value} = e
        setTempName(value)

        if (Object.entries(additionalLinks).length < 1){
            addFormField()
        } 
    }


    // function to handle changes from set input fields :
    // set linkdata to the name and value given
    function handleChange (e) {

        const { name, value } = e.target

        setLinks( {
            ...linkData,
            [name]: value
        })
    }


    // display additional items keys and values:
    function DisplayItems () {

        return (
            Object.entries(additionalLinks).map(([key, value]) => {
                return <li key={key}>{key}: {value}</li>
            })
        )
    }
    

    // function to handle the click of the + button :
    // set the additional links to the ones saved in temp name and value,
    // clear temp value, value field and dropdown selection
    // add validation in here to prevent blank name : (if !name => display msg, dont allow submission)
    function handleClick (e) {
        e.preventDefault()

        setLinks({
            ...linkData,
            additionalLinks: {...additionalLinks, [tempName]: tempValue}
        })
        
        setTempValue("")
        setTempName("")
        const valueField = document.getElementById("valueField")
        valueField.value = ""
        setDefaultOption("Select...")
    }

    function handleUpload (e) {
        console.log(e.target.files[0])
        setLinks({
            ...linkData,
            resume: e.target.files[0]
        })
    }

    return(
        <div>
            <div>
                <div className="heading">
                <h4>
                    Links
                </h4>  
                </div>
                <div className="profileFormDiv">
                    <form>
                        <div>
                            <h3>Social Media</h3>
                            
                            <div>
                                <label>
                                    LinkedIn
                                </label>
                                <FormInput name="linkedIn" value={linkedIn} onChange={handleChange} />
                            </div>
                            <div>
                                <label>
                                    Twitter
                                </label>
                                <FormInput name="twitter" value={twitter} onChange={handleChange} />
                            </div>
                            <div>
                                <label>
                                    Instagram
                                </label>
                                <FormInput name="instagram" value={instagram} onChange={handleChange} />
                            </div>
                            <div>
                                <label>
                                    Facebook
                                </label>
                                <FormInput name="facebook" value={facebook} onChange={handleChange} />
                            </div>
                    

                                    
                        </div>


                        <div>
                            <h3>Portfolio</h3>
                            <div>
                                <label>
                                    Portfolio
                                </label>
                                <FormInput name="portfolio" value={portfolio} onChange={handleChange} />
                            </div>
                            <div>
                                <label>
                                    Github
                                </label>
                                <FormInput name="github" value={github} onChange={handleChange} />
                            </div>
                            <div>
                                <label>
                                    Resume
                                </label>
                                <FormInput type="file" name="resume" accept=".pdf" onChange={handleUpload}/>
                                
                            </div>
                        </div>
                        <div>
                            <h3>Additional</h3>
                            <div>
                            <Dropdown options={options} onChange={onSelect} value={defaultOption} name="additionalLinks" />
                            <button onClick={handleClick}>+</button> 
                            <div id="additionalForms"></div>

                            </div>
                            <div id="additionalItems">
                                    
                            <DisplayItems />
                                    
                                
                            </div>
                        </div>

                    </form>  
                    <button onClick={previous}>back</button>  
                    <button onClick={next}>Review</button>  
                </div>
            </div>
            

        </div>
    )
}


export default Links