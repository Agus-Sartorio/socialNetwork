import { users } from "../test-data/usuarios";
import { CLEAR_PROFILE_STATE, CLEAR_USERS_STATE, GET_PROFILE, GET_USER } from "./actionTypes";

export const getUsers = () => {
    return({type:GET_USER,payload:users})
}

export const clearUsersState = () => {
    return({type:CLEAR_USERS_STATE,payload:[]})
}

export const getProfile = (id) => {
    const profile = users.filter(e => e._id===id)
    return({type:GET_PROFILE,payload:profile})
}

export const clearProfileState = () => {
    return({type:CLEAR_PROFILE_STATE,payload:[]})
}