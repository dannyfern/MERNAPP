import React, { useState } from 'react'
import './../../styles/Posts.css'
import FormInput from './../reusable/FormInput'
import Posts from './Posts'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, getAllPosts } from './../../config/api'
import { Redirect } from 'react-router-dom'



const AddPost = ({ history, nextId, addPost, match }) => {
    // const [posts, setTwoots] = useState([])
    const dispatch = useDispatch()
    const posts = useSelector(state => state.postReducer)
    
    

    const initialFormState = {
        title: "",
        category: "",
        text: ""
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
            // _id: nextId,
            title: formState.title,
            category: formState.category || "general",
            modified_date: new Date(),
            text: formState.text
        }

        
        console.log("BEFORE DISPATCH: ", newPost._id)
        dispatch(createPost(newPost))
        // let selectedPost = posts.filter(x => x._id === newPost._id)
        // selectedPost = selectedPost[0]
        // console.log(selectedPost)
        
        // addPost(newPost)
        
        

        history.push(`/posts/${nextId}`)
        // console.log(nextId)
        // console.log(newPost._id)
        // console.log(match.params)
        // dispatch(getAllPosts())
    }
    console.log(formState)


    return(
        <div>
            
            
            <div id="addPostDiv">
                <div className="heading">
                    <h1>Add post</h1>
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


export default AddPost