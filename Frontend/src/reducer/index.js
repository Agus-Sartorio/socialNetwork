<<<<<<< HEAD
import { CLEAR_PROFILE_STATE, CLEAR_USERS_STATE,  GET_USER_BY_ID, GET_USER, GET_NAME, GET_MY_PROFILE} from "../actions/actionTypes"
=======

import { CLEAR_PROFILE_STATE, CLEAR_USERS_STATE, GET_USER, GET_NAME, GET_MY_PROFILE, GET_USER_BY_ID, MY_PROFILE} from "../actions/actionTypes"

>>>>>>> 40974ae750e16b95bcd8a78c65a78021e131e70a

const initialState = {

    users: [],
    profile: [],
    search:[],
    myprofile:{},
    myProfileData:[]

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
        case GET_USER_BY_ID:
            return{
                ...state,
                profile:action.payload
            }
        case CLEAR_PROFILE_STATE:
            return{
                ...state,
                profile:action.payload
            }
        case GET_NAME:
            return{
                ...state,
                search:action.payload
            }       
            
        case GET_MY_PROFILE:
            return{
                ...state,
                myprofile:action.payload
            }
        case MY_PROFILE:
            return{
                ...state,
                myProfileData:action.payload
            }    
        default:
            return state
    }
}        