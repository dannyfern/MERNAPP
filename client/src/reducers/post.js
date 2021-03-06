import {
    ALL_POSTS,
    CREATE_POST,
    CURRENT_POST,
    UPDATED_POST,
    SET_ALL_POSTS
} from '../actions/constants';

const postReducer = (posts = [], action) => {
    switch (action.type) {
        case ALL_POSTS:
            return action.payload
        case SET_ALL_POSTS:
            return [...posts, action.payload]
        case CREATE_POST:
            return [...posts, action.payload]
        case CURRENT_POST:
            return action.payload
        case UPDATED_POST:
            return action.payload
        default: 
            return posts;
    }
}

export default postReducer