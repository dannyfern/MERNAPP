import React, { useState } from 'react'
import FormInput from './../reusable/FormInput'
import {editPost, setAllPosts, getAllPosts } from './../../config/api'
import { useDispatch } from 'react-redux'

const EditPost = ({ match, posts, history }) => {
    console.log(posts)

    const dispatch = useDispatch()

    const id = match.params.id
    
    const post = posts.filter(x => x._id === id)[0]
    // console.log(post)
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
        .then((x) => {
            const otherPosts = posts.filter(x => x._id !== match.params.id)
            console.log('other, ', otherPosts)  
            console.log('x', x)
            const newPosts = [...otherPosts, x]
            console.log("NEW: ", newPosts)
            dispatch(getAllPosts(newPosts))
        })




        history.push(`/posts/${id}`)



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