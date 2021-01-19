import React, { useState, useEffect } from 'react'
import FormInput from './../reusable/FormInput'
import {editPost, getAllPosts } from './../../config/api'
import { useDispatch } from 'react-redux'

// use effect

const EditPost = ({ match, posts, history}) => {

    const dispatch = useDispatch()
    const id = match.params.id
    const post = posts.filter(x => x._id === id)[0]


    const [newForm, setNewForm] = useState({
        title: post.title,
        category: post.category,
        text: post.text
    })

    const { title, category, text } = newForm

    useEffect(() => {

        dispatch(getAllPosts)

    }, [])


    const handleChange = (e) => {
        const { name, value } = e.target
        setNewForm({
            ...newForm,
            [name]: value
        })
        console.log(newForm)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const updatedPost = {
            _id: id,
            user: post.user,
            modified_date: new Date(),
            title: newForm.title,
            category: newForm.category,
            text: newForm.text
        }
        console.log(updatedPost)

        dispatch(editPost(match.params.id, updatedPost))

        // figure out a way to set all posts and have them refresh in real time - maybe use effect
        history.push(`/posts`)
        window.location.reload()

    }


    return(
        <div>
            <div id="addPostDiv">

                <div className="heading">
                    <h1>Edit Post</h1>
                </div>
                <div className="postBgImage">

                </div>
                <div>
                    <form id="addPostForm" onSubmit={handleSubmit}>

                        <label>Post Title</label>
                        <FormInput name="title" placeholder="Title here..." className="editPostField" onChange={handleChange} value={title} />

                        <label>Post Category</label>
                        <FormInput name="category" placeholder="Category here..." className="editPostField" onChange={handleChange} value={category} />

                        <label>Post Content</label>
                        <textarea
                            name="text"
                            placeholder="content here..."
                            className="addPostField"
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

        </div>
    )
}


export default EditPost 