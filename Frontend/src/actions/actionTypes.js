import {read_cookie} from 'sfcookies';

// variable para configurar el header 

export const tokenUsuario = () => {
    const token = read_cookie('userToken')
return {headers:{token}}
} 


export const GET_USER = 'GET_USER';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const CLEAR_USERS_STATE = 'CLEAR_USERS_STATE';
export const CLEAR_PROFILE_STATE = 'CLEAR_PROFILE_STATE';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
export const GET_MY_PROFILE ='GET_MY_PROFILE';
export const MY_PROFILE='MY_PROFILE';
export const GET_NAME='GET_NAME';
export const CREATE_POST= 'CREATE_POST';
export const GET_ALL_POSTS = 'GET_ALL_POST';


