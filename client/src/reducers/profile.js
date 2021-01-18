import { ALL_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, UPDATE_PROFILE, GET_PROFILES } from "../actions/constants";

const initialState = {
    profile: null,
    profiles: [],
    loading: true,
    error:{}
}

// const profileReducer = (profiles = [], action) => {
//     switch (action.type){
//         case ALL_PROFILE:
//             return profiles
//         case CREATE_PROFILE:
//             return [...profiles, action.payload]
//         default:
//             return profiles
//     }
// }

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case ALL_PROFILE:
        case UPDATE_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            };
        case GET_PROFILES:
            return {
                ...state,
                profiles: payload,
                loading: false
            }
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false 
            };
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                loading: false,
            }
        default:
            return state;
    }
};
