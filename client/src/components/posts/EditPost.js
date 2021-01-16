import React, { useState } from 'react'
import FormInput from './../reusable/FormInput'
import {editPost} from './../../config/api'
import { useDispatch } from 'react-redux'

const EditPost = ({ match, posts, history }) => {

    const dispatch = useDispatch()

    const id = match.params.id
    
    const post = posts.filter(x => x._id === id)[0]
    console.log(post)
    // const { text, title, category, modified_date } = post

    const [newForm, setNewForm] = useState({
        title: post.title,
        category: post.category,
        text: post.text
    })

    const { title, category, text } = newForm



    const handleChange = (e) => {
        const { name, value } = e.target
        setNewForm({
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const updatedPost = {
            modified_date: new Date(),
            title: newForm.title,
            category: newForm.category,
            text: newForm.text
        }

        dispatch(editPost(match.params.id, updatedPost))




        history.push(`/posts/${match.params.id}`)



    }


    return(
        <div>
            <div>
                Edit Post
            </div>
            <div>
                <form id="editPostForm" onSubmit={handleSubmit}>

                    <label>Post Title</label>
                    <FormInput name="title" placeholder="Title here..." className="editPostField" onChange={handleChange} value={title} />

                    <label>Post Category</label>
                    <FormInput name="category" placeholder="Category here..." className="editPostField" onChange={handleChange} value={category} />

                    <label>Post Content</label>
                    <textarea
                        name="text"
                        placeholder="content here..."
                        className="editPostField"
                        onChange={handleChange}
                        value={text && text}
                        
                    />
                    <input 
                    type="submit"
                    className="editPostSubmit"
                    value="Update Post"
                    />

                </form>

            </div>
        </div>
    )
}


export default EditPost 