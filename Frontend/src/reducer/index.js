import { CLEAR_PROFILE_STATE, CLEAR_USERS_STATE, GET_PROFILE, GET_USER, SEARCH_BY_NAME } from "../actions/actionTypes"

const initialState = {

    users: [],
    profile: [],
    search:[],

}

export function rootReducer(state = initialState, action) {

    switch (action.type) {

        case GET_USER:
            return {
                ...state,
                users: action.payload,
            }
        case CLEAR_USERS_STATE:
            return {
                ...state,
                users:action.payload
            }
        case GET_PROFILE:
            return{
                ...state,
                profile:action.payload
            }
        case CLEAR_PROFILE_STATE:
            return{
                ...state,
                profile:action.payload
            }
        case SEARCH_BY_NAME:
            return{
                ...state,
                search:action.payload
            }                
        default:
            return state
    }
}        