import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';
import './../../styles/Posts.css'
import { useSelector, useDispatch } from 'react-redux'
import { getAllPosts } from './../../config/api'


const Posts = ( ) => {

    const filters = {
        category: "All",
        sortBy: "Newest"
    }

  
    const [filterData, setFilterData] = useState(filters)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPosts)

    }, [dispatch])


    let posts = useSelector(state => state.postReducer)

    function DisplayPosts(post) {
        const { title, category, likes } = post
        
        

        
        return (
            <div className="postCard">
                <Link to={`/posts/${post._id}`} className="titleLink">
                    <h1 className="postTitle">{title}</h1>
                </Link>
                <div className="postInfo">

                    <h3>{category}</h3>

                    <div className="upVotesDiv">
                        <p className="upVotes">++ {likes && likes.length} </p>
                    </div>

                </div>


            </div>
        )
    }



    // updating display function to take different parameters
    // first it should filter through the posts and find the 
    // category matching the one given as filter
    // with that filtered data, it should impliment the chosen
    // sorting method, eg. newest, oldest, most upvotes, least etc.

    const sortOptions = (a, b, sortBy) => {

        switch (sortBy){
            case "Newest":
                return (new Date(b.modified_date) - new Date(a.modified_date))
                
            case "Oldest":
                return (new Date(a.modified_date) - new Date(b.modified_date))
            case "Most Upvotes":
                return (b.likes.length - a.likes.length)
                // return null
            case "Least Upvotes":
                return null
            default:
                return (new Date(b.modified_date) - new Date(a.modified_date))
                

        }
    }
    

    function Display (){
        const { category, sortBy } = filterData
       
        posts = [...posts]
            return (posts && posts
                .filter((x) => {
                    if (category === "All"){
                        return x
                    } else {
                        return x.category[0] === category
                    }
                
                }
                )
                .sort((a, b) =>  sortOptions(a, b, sortBy))
                .map((post) => {
                    return DisplayPosts(post)
                })
                
            ) 
    }


    

    function openFilters () {
        const filterBtn = document.querySelector('.filters')
        if (filterBtn){
            (filterBtn.style.display === "none") ? (filterBtn.style.display = "flex") : (filterBtn.style.display = "none")
        }
    }



    const categoryOptions = [
        {label: "All", value: "category"},
        {label: "Code", value: "category"},
        {label: "Food", value: "category"},
        {label: "Issues", value: "category"},
        {label: "Meetups", value: "category"},
        {label: "Health", value: "category"}
    ]


    const sortByOptions = [
        {label: "Newest", value: "sortBy"},
        {label: "Oldest", value: "sortBy"},
        {label: "Most Upvotes", value: "sortBy"},
        {label: "Least Upvotes", value: "sortBy"}
    ]

    const handleSelection = e => {
       console.log(e)
        const { value, label } = e

        
        setFilterData({
            ...filterData,
            [value]: label
        })
        console.log('filter: ', filterData)
    }



    return(
        <div className="postsDiv">
            <div className="postBgImage">
                
            </div>
            <div className="postBgTransparent">

            <div className="postHeading">
                <h4>Posts</h4>
            </div>
            <div className="filterText">
                <p onClick={openFilters}>Filter</p>
            </div>
            <div className="filters width70">
                <div className="filterDropdowns">
                    <div className="dropdownDiv">
                        <p>Category: </p>
                        <Dropdown className='myClassName' options={categoryOptions} id="categoryFilter" label="category" onChange={handleSelection} />
                    </div>
                    <div className="dropdownDiv">
                        <p>Sort by:</p>
                        <Dropdown options={sortByOptions} id="sortByFilter" label="sortBy" onChange={handleSelection} />
                    </div>
                </div>
                
               
            </div>
            
            <div className="width70 posts">
                <Display filters={filterData} />
            </div>
            </div>



        </div>
    )
}





export default Posts