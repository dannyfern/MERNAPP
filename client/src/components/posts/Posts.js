import React, { useState, useEffect } from 'react'
import Post from './Post'
import { Link } from 'react-router-dom'

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';

import './../../styles/Posts.css'


const Posts = ({ postsData }) => {

    const filters = {
        category: "All",
        sortBy: "Newest"
    }

    const [filterData, setFilterData] = useState(filters)


    const posts = (post) => {
        const { title, category, modified_date, username } = post
        return (
            <div className="postCard">
                <Link to={`/posts/${post._id}`} className="titleLink">
                    <h1 className="postTitle">{title}</h1>
                </Link>
                <div className="postInfo">
                    
                    <h5>Posted by: {username}, {modified_date.toLocaleString()}</h5>
                    <h3>{category}</h3>
                    {/* <p>{content}</p> */}
                    <div className="upVotesDiv">
                        <p className="upVotes">++5</p>
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
                return (b.modified_date - a.modified_date)
                
            case "Oldest":
                return (a.modified_date - b.modified_date)
                
            default:
                return (b.modified_date - a.modified_date)
                

        }
    }
    

    function Display (){
        // console.log(filterData)
        const { category, sortBy } = filterData
        // console.log(category)
        // console.log(postsData.filter(x => x.category === "code"))
        // console.log(category)

        return (postsData
            .filter((x) => {
                if (category === "All"){
                    return x
                } else {
                    return x.category === category
                }
               
            }
            )
            .sort((a, b) => sortOptions(a, b, sortBy))
            .map((post) => {
                return posts(post)
            })
        )
    }


    const filterBtn = document.querySelector('.filters')

    function openFilters () {
        if (filterBtn){
            (filterBtn.style.display === "none") ? (filterBtn.style.display = "flex") : (filterBtn.style.display = "none")
        }
        
    }


    // const categoryOptions = ["Code", "Food", "Issues", "Meetups"]

    const categoryOptions = [
        {label: "All", value: "category"},
        {label: "Code", value: "category"},
        {label: "Food", value: "category"},
        {label: "Issues", value: "category"},
        {label: "Meetups", value: "category"}
    ]

    // const sortByOptions = ["Newest", "Oldest", "Most Upvotes", "Least Upvotes"]

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

    // const handleFilterSubmit = e => {
    //     e.preventDefault()

    // }

    return(
        <div>
            {/* <div className="heading">
                <h4>Posts</h4>
            </div> */}
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
                
                {/* <div className="filterBtn">
                    <button onClick={handleFilterSubmit}>Done</button>
                </div> */}
                
            </div>
            
            <div className="width70 posts">
                <Display filters={filterData} />
            </div>


        </div>
    )
}


export default Posts