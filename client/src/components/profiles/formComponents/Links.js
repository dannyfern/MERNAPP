import React from 'react'


const Links = ({ setLinks, linkData, navigation }) => {
    const { linkedIn, twitter, instagram, facebook } = linkData.socialMedia
    const { portfolio, github, resume } = linkData.portfolioLinks

    const { previous, next } = navigation;


    return(
        <div>
            <div>
                <div className="heading">
                    Links   
                </div>
                <div>
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
                                <button>+</button>     
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
                                    

                                />
                            </div>
                            <button>+</button> 
                        </div>
                    </form>    
                </div>
            </div>
            

        </div>
    )
}


export default Links