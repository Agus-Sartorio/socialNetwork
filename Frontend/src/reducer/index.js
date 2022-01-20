import { CLEAR_USERS_STATE, GET_USER } from "../actions/actionTypes"

const initialState = {

    users: [],

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
        default:
            return state
    }
}        