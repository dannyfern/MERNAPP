import React, { useState, useEffect } from 'react'
import FormInput from '../../reusable/FormInput'

// import Checkbox from '@material-ui/core/Checkbox';
import { STATES } from 'mongoose';


import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import { makeStyles } from '@material-ui/core/styles';



// checkboxes are broken >:(
    // checkboxes now work but the onchange event is slow by one click



const Details = ({ setDetails, detailsData, navigation, form, profile }) => {
    
    // fields from detail form data :
    const { profilePhoto, name, username, location, 
    dateofbirth, bio, blogpostdescription } = detailsData

    // next from hooks helper
    const { next } = navigation;

    useEffect(() => {
        if (form === "edit"){
            setDetails(profile.detailsData)
        }
    }) 


    

    

    // const interests = [
    //     {"Front End": false},
    //     {"Back End": false},
    //     {"Full Stack": false},
    //     {"AI": false},
    //     {"Mobile Development": false},
    //     {"Software Development": false},
    //     {"Data Science": false},
    //     {"Cyber Security": false},
    //     {"DevOps": false},
    //     {"Game Development": false}
    // ]
    const interests = {
        frontEnd: false,
        backEnd: false,
        fullStack: false,
        aI: false,
        mobileDevelopment: false,
        softwareDevelopment: false,
        dataScience: false,
        cyberSecurity: false,
        devOps: false,
        gameDevelopment: false
    }




    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
        },
        formControl: {
          margin: theme.spacing(3),
        },
    }));

    const classes = useStyles();

    // const interests = [
    //     {frontEnd: false, label: "Front End"},
    //     {backEnd: false, label: "Back End"},
    //     {fullStack: false, label: "Full Stack"},
    //     {aI: false, label: "AI"},
    //     {mobileDevelopment: false, label: "Mobile Development"},
    //     {softwareDevelopment: false, label: "Software Development"},
    //     {dataScience: false, label: "Data Science"},
    //     {cyberSecurity: false, label: "Cyber Security"},
    //     {devOps: false, label: "DevOps"},
    //     {gameDevelopment: false, label: "Game Development"}
    // ]



    // const interests = [
    //     {frontEnd: {checked: false, label: "Front End"}},
    //     {backEnd: {checked: false, label: "Back End"}},
    //     {fullStack: {checked:false, label: "Full Stack"}},
    //     {aI: {checked: false, label: "AI"}},
    //     {mobileDevelopment: {checked: false, label: "Mobile Development"}},
    //     {softwareDevelopment: {checked: false, label: "Software Development"}},
    //     {dataScience: {checked: false, label: "Data Science"}},
    //     {cyberSecurity: {checked: false, label: "Cyber Security"}},
    //     {devOps: {checked: false, label: "DevOps"}},
    //     {gameDevelopment: {checked: false, label: "Game Development"}}
    // ]

    const [checkedBox, setChecked] = useState(interests)

    const { frontEnd, backEnd, fullStack, aI, mobileDevelopment, softwareDevelopment, dataScience, cyberSecurity, devOps, gameDevelopment } = checkedBox;
    



    function handleCheckboxChange (e) {

        const { name, checked } = e.target
        console.log(name, checked)


        setChecked({
            ...checkedBox,
            [name]: checked
        })
        console.log(checkedBox)
        // console.log(checkedBox)
        const entries = Object.entries(checkedBox)
        // console.log(entries)

        const filteredInterests = entries.filter(x => x[1] === true)
        // console.log(filteredInterests)
        // const interestData = []
        // interestData.push(filteredInterests[0])
        // console.log(filteredInterests)
        const spliced = filteredInterests.map((x) => {
            return x.splice(0, 1).toString()
        })
        // console.log(spliced)
        setDetails({
            ...detailsData,
            interests: spliced
        })


    }
  



    // function to handle change of regular form inputs :
    function handleChange (e) {
        const { name, value } = e.target
        setDetails({
            ...detailsData,
            [name]: value
        })
        
    }

    // function for image upload :
    function uploadImg (e) {
        setDetails({
            ...detailsData,
            profilePhoto: e.target.files[0]
        })

        const file = document.getElementById('fileChosen')
        file.textContent = e.target.files[0].name
    }




    return(
        <div>
    
            <div className="heading">
                <h4>
                    Personal Details
                </h4>
            </div>

            <div className="profileFormDiv">
                


                <div className="profileForm">
                    <div className="photoDiv">
                        <div className="profilePhoto">
                            <img
                                src={profilePhoto}
                                alt="profilephoto"
                                />
                        </div>


                        <div className="profilePhotoUpload">
                            <label id="photoLabel" htmlFor="photoBtn">Upload Image</label>
                            <input 
                                type="file"
                                name="profilePhoto"
                                accept="image/png, image/jpeg"
                                onChange={uploadImg}
                                id="photoBtn"
                                hidden
                                
                            />
                            <span id="fileChosen">No file Chosen</span>

                        </div>
                    </div>


                    <div className="profileFormSection">

                        <div className="doubleFields">
                            <div className="formFields">
                                <label>
                                    Name
                                </label>
                                <FormInput name="name" value={name} onChange={handleChange} />  
                            </div>

                        

                        </div>
                        


                        <div className="doubleFields">
                            <div className="formFields">
                                <label>
                                    Username
                                </label>
                                <FormInput name="username" value={username} onChange={handleChange} /> 
                            </div>

                            
                            <div className="formFields">
                                <label>
                                    Location
                                </label>
            
                                <FormInput name="location" value={location} onChange={handleChange} />
                            </div>
                        </div>

                        
                        <div className="doubleFields">
                            

                            <div className="birthdayFields formFields">
                                <label>Date of Birth</label>

                                <FormInput type="date" name="dateofbirth" value={dateofbirth} onChange={handleChange}/>
            
                            </div>
                        </div>


                        <div className="interestsSection">
                            <h4>Interests</h4>
                            <div className="interestsCheckBoxes">

                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox checked={frontEnd} onChange={handleCheckboxChange} name="frontEnd" />}
                                        label="Front End"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={backEnd} onChange={handleCheckboxChange} name="backEnd" />}
                                        label="Back End"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={fullStack} onChange={handleCheckboxChange} name="fullStack" />}
                                        label="Full Stack"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={aI} onChange={handleCheckboxChange} name="aI" />}
                                        label="AI"
                                    />
                                
                                    <FormControlLabel
                                        control={<Checkbox checked={mobileDevelopment} onChange={handleCheckboxChange} name="mobileDevelopment" />}
                                        label="Mobile Development"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={softwareDevelopment} onChange={handleCheckboxChange} name="softwareDevelopment" />}
                                        label="Software Development"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={dataScience} onChange={handleCheckboxChange} name="dataScience" />}
                                        label="Data Science"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={cyberSecurity} onChange={handleCheckboxChange} name="cyberSecurity" />}
                                        label="Cyber Security"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={devOps} onChange={handleCheckboxChange} name="devOps" />}
                                        label="DevOps"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={gameDevelopment} onChange={handleCheckboxChange} name="gameDevelopment" />}
                                        label="Game Development"
                                    />

                                                
                                            
                                       
                                    
                                </FormGroup>
                            </FormControl>

                            
                            {/* { // map over checkbox items from checkbox data file :
                                interests.map((item, index) => {
                                    // const { value, isChecked, id } = item
                                    // let isChecked = checkedItems[name]
                                    // console.log('isChecked', isChecked)
                                    return(
                                        <div key={item.id} className="checkboxes">
                                            

                                            <Checkbox value={item.value} checked={item.isChecked} onChange={handleCheckboxChange}  />
                                          
                                            <label className="checkLabel">
                                                {item.value}
                                            
                                            </label>
                                        </div>
                                    )   
                                })
                            } */}

                            
                               

                            </div>
                        </div>

                            <div className="formFields desc">
                                <label id="authorLabel">
                                    Brief Author Description 
                                </label>
                                {/* <p>(This will be shown underneath your blog posts)</p> */}
                                
                                <textarea 
                                    name="blogpostdescription"
                                    value={blogpostdescription}
                                    onChange={handleChange}
                                    className="description"
                                />
                            </div>

                        <div className="formFields desc">
                            <label>
                                Bio
                            </label>
                            <textarea 
                                name="bio"
                                value={bio}
                                onChange={handleChange}
                                className="bio"
                            />
                        </div>

                        
                    </div>
                </div>
                <div className="navigationDiv">
                    <button className="nextBtn" onClick={next}>next</button>
                </div>

                
            </div>

            
            
        </div>
    )
}

export default Details