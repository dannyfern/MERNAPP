const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
        name:{
            type: String,
            required: true,
            }, 

        username: {
            type: String,
            required: true
        },
        
        dateofbirth: {
        type: Date, default: Date.now,
        required: false
        },

        location: {
        type: String,
        required: true
        },

        bio: {
        type: String,
        required: true
        },

        blogpostdescription: {
        type: String,
        required: true
        },

        interests: {
        type: [String],
        required: true
        },
        experience: [
            {
                title: {
                    type: String,
                    required: false,
                },
                company: {
                    type: String,
                    required: false,
                },
                current: {
                    type: Boolean,
                    default: false,
                },
                jobtitle: {
                    type: String,
                    required: false,
                },
                business: {
                    type: String,
                    required: false,
                },
                location: {
                    type: String,
                    required: false
                },
                startdate: {
                    type: Date,  default: Date.now,
                    required: false
                },
                enddate: {
                    type: Date,  default: Date.now,
                    required: false
                },
                description: {
                    type: String,
                }
            }],
//-------------------------------------------------------
    skills: [
    {  
        languages:{
            type: Array,
            required: false
        }, 
        experiencelevel: {
            type: String,
            required: false
        },
        yearsofexperience: {
            type: String,
            required: false
        }
    }],


//-------------------------------------------------------------
    prospects: {
        type: [String],
        required: false
    },
//-------------------------------------------------------------
    qualification: [
    {
        institution: {
            type: String,
            required: false,
        },
        degree: {
            type: String,
            required: false,
        },
        startdate: {
            type: Date,
            required: false,
        },
        enddate: {
            type: Date,
            required: false,
        },
        description: {
            type: String,
            required: false,
        }
    }],
//--------------------------------------------------------------
    // previouseducation: [
    // {
    //     school: {
    //         type: String,
    //         required: false,
    //     }, 
    //     degree: {
    //         type: String,
    //         required: false,
    //     },
    //     startdate: {
    //         type:Date,
    //         required: false,
    //     },
    //     enddate: {
    //         type: Date,
    //         required: false,
    // }
    // }],
//-------------------------------------------------------------
    socials: 
        {
        linkedin: { 
            type:String,
            required: false,
        },
        twitter: {
            type: String,
            required: false,
        },
        instagram: { 
            type: String,
            required: false,
        },
        github: {
            type: String,
            required: false,
        },
    },
//-------------------------------------------------------------
    portfolio: [
        {
        portfolio: {
            type: String,
            required: false,
        },
        github: {
            type: String,
            required: false,
        },
        resume: {
            type: String,
            required: false
        }
        }], 
});

module.exports = Profile = mongoose.model('Profile', ProfileSchema)