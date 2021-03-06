import React, { useState } from 'react'
import './../../styles/Posts.css'
import FormInput from './../reusable/FormInput'
import { useDispatch, connect } from 'react-redux'
import { createPost } from './../../config/api'
import { currentProfile } from '../../actions/profile'
import PropTypes from 'prop-types'



const AddPost = ({ currentProfile, auth: { user }, profile: { profile, loading}, history, addPost, match }) => {
    console.log(profile)

    const dispatch = useDispatch()
    
    

    const initialFormState = {
        title: "",
        category: "",
        text: "",
    }

    const [formState, setFormState] = useState(initialFormState)

    const handleChange = e => {
        const { name, value } = e.target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    
    const handleSubmit = e => {
        e.preventDefault()
        let newPost = {
            title: formState.title,
            category: formState.category || "general",
            text: formState.text,
        }
        console.log('new', newPost)

        dispatch(createPost(newPost))
        history.push(`/posts/`)
        
    }


    return(
        <div>
            <div id="addPostDiv">
                <div className="heading">
                    <h1>Add post</h1>
                </div>

                <div className="postBgImage">

                </div>
                <form id="addPostForm" onSubmit={handleSubmit}>

                    <label>Post Title</label>
                    <FormInput name="title" placeholder="Title here..." className="addPostField" onChange={handleChange} />

                    <label>Post Category</label>
                    <FormInput name="category" placeholder="Category here..." className="addPostField" onChange={handleChange} />

                    <label>Post Content</label>
                    <textarea
                        name="text"
                        placeholder="content here..."
                        className="addPostField"
                        onChange={handleChange}
                        
                    />
                    <input 
                    type="submit"
                    className="addPostSubmit"
                    value="New Post"
                    />

                </form>
            </div>
        </div>
    )
}

AddPost.propTypes = {
    currentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});


export default connect(mapStateToProps, { currentProfile })(AddPost)