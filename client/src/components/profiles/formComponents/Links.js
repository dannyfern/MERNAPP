import React from 'react'


const Links = ({ setLinks, linkData, navigation }) => {
    const { linkedIn, twitter, instagram, facebook } = linkData.socialMedia
    const { portfolio, github, resume } = linkData.portfolioLinks

    const { previous, next } = navigation;


    const addFormField = (e) => {
        e.preventDefault()
        const div = document.getElementById("additionalForms")
        const nameField = document.createElement("INPUT")
        const valueField = document.createElement("INPUT")

        nameField.setAttribute("type", "text")
        nameField.setAttribute("type", "text")

        div.appendChild(nameField)
        div.appendChild(valueField)
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
                                    <input 
                                        type="text"
                                        name="linkedIn"
                                        value={linkedIn}


                                    />
                                </div>
                                <div>
                                    <label>
                                        Twitter
                                    </label>
                                    <input 
                                        type="text"
                                        name="twitter"
                                        value={twitter}
                                        

                                    />
                                </div>
                                <div>
                                    <label>
                                        Instagram
                                    </label>
                                    <input 
                                        type="text"
                                        name="instagram"
                                        value={instagram}
                                        

                                    />
                                </div>
                                <div>
                                    <label>
                                        Facebook
                                    </label>
                                    <input 
                                        type="text"
                                        name="facebook"
                                        value={facebook}
                                        

                                    />
                                </div>
                                <div>
                                <label>Additional</label>
                                <select>
                                    <option>Youtube</option>
                                    <option>Pinterest</option>
                                    <option>Reddit</option>
                                </select>

                                <button onClick={addFormField}>+</button> 
                                </div>

                                    
                            </div>


                        <div>
                            <h3>Portfolio</h3>
                            <div>
                                <label>
                                    Portfolio
                                </label>
                                <input 
                                    type="text"
                                    name="portfolio"
                                    value={portfolio}
                                    

                                />
                            </div>
                            <div>
                                <label>
                                    Github
                                </label>
                                <input 
                                    type="text"
                                    name="github"
                                    value={github}
                                    

                                />
                            </div>
                            <div>
                                <input 
                                    type="file"
                                    name="resume"
                                    value={resume}
                                    accept="file/pdf"
                                    

                                />
                            </div>
                            <button>+</button> 
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