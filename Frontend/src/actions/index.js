import { users } from "../test-data/usuarios";
import { CLEAR_USERS_STATE, GET_USER } from "./actionTypes";

export const getUsers = () => {
    return({type:GET_USER,payload:users})
}

export const clearUsersState = () => {
    return({type:CLEAR_USERS_STATE,payload:[]})
}