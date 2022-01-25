import { users } from "../test-data/usuarios";
import { CLEAR_PROFILE_STATE, CLEAR_USERS_STATE, GET_PROFILE, GET_USER, SEARCH_BY_NAME, GET_MY_PROFILE } from "./actionTypes";

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

export const searchByName = (name) => {
    const serch = users.filter(e => e.name===name)
    return({type:SEARCH_BY_NAME,payload:serch})
}

export const getMyProfile = () => {
    return({type:GET_MY_PROFILE,payload: {
    
    name: 'Dufainder Bedoya',
    description: 'Soy un monstruo programando xD',
    imageprofile: './perfil2.jpg', 
    imageport: './BReact.png',
    birthday:'15-02-2022',
    roll: 'Estudiante',
    cohorte:'FT-19b'
    
     }})
}