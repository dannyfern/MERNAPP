import React, {useState} from 'react'
import FormInput from './reusable/FormInput'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';

const Links = ({ setLinks, linkData, navigation }) => {
    const { linkedIn, twitter, instagram, facebook, additionalLinks, portfolio, github, resume } = linkData


    const { previous, next } = navigation;

    const [tempValue, setTempValue] = useState("")
    const [tempName, setTempName] = useState("")

    function handleAdditional (e) {
        console.log(e.target.value)

        // setTempValue(e.target.value)
        // console.log('tempval: ', tempValue)
    }


    const addFormField = (e) => {
        const div = document.getElementById("additionalForms")
        const valueField = document.createElement("INPUT")
        valueField.setAttribute("type", "text")

        valueField.addEventListener("change", handleAdditional)
        div.appendChild(valueField)
    }
    const options = [
        "Youtube", "Pinterest", "Reddit", "Codewars", "Stack Overflow"
    ]


    function onSelect (e) {
        console.log(e)
        const value = e.value
        // const newArr = [...]
        console.log(additionalLinks)
        setTempName(value)
        if (additionalLinks.length < 1){
            addFormField()

        } 
        
    }

    function handleChange (e) {

        const name = e.target.name
        const value = e.target.value
        console.log('name: ', name, 'value: ', value)

        setLinks( {
            ...linkData,
            [name]: value
        })

        console.log(linkData)
    }

    function handleClick (e) {
        e.preventDefault()
        const newArr = [...additionalLinks, {[tempName]: [tempValue]}]
        setLinks({
            ...linkData,
            additionalLinks: newArr
        })
        console.log(additionalLinks)
    }

    return(
        <div>
            <div>
                <div className="heading">
                    Links   
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
                                <FormInput type="file" name="resume" value={resume} />
                                
                            </div>
                        </div>
                        <div>
                            <h3>Additional</h3>
                            <div>
                            <Dropdown options={options} onChange={onSelect} value={additionalLinks} name="additionalLinks" />
                            <button onClick={handleClick}>+</button> 
                            <div id="additionalForms"></div>

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