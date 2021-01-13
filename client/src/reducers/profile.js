import {
    ALL_PROFILES,
    CREATE_PROFILE
} from '../actions/constants'



const profileReducer = (profiles = [], action) => {
    switch (action.type){
        case ALL_PROFILES:
            return profiles
        case CREATE_PROFILE:
            return [...profiles, action.payload]
        default:
            return profiles
    }
}

export default profileReducer