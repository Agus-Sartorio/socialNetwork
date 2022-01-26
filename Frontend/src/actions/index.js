import {read_cookie} from 'sfcookies';
import axios from 'axios';

import { CLEAR_PROFILE_STATE, CLEAR_USERS_STATE, GET_USER,  GET_MY_PROFILE, GET_USER_BY_ID, tokenUsuario,} from "./actionTypes";


export const getUsers = () => {
    return async (dispatch) => {
        try {
            const usuarios = await axios.get(`${process.env.REACT_APP_PUERTO}usuarios/?myself=false`, tokenUsuario())
            return dispatch({ type: GET_USER, payload: usuarios.data })
        } catch (err) {
            console.log(err)
        }
    }

}

export const clearUsersState = () => {
    return ({ type: CLEAR_USERS_STATE, payload: [] })
}

export const getProfile = (id) => {
    return async (dispatch) => {
        try {
            const user = await axios.get(`${process.env.REACT_APP_PUERTO}usuarios/Id/${id}`)
            return dispatch({ type: GET_USER_BY_ID, payload: user.data })
        } catch (err) {
            console.log(err)
        }
    }
}

export const clearProfileState = () => {
    return ({ type: CLEAR_PROFILE_STATE, payload: [] })
}


export function postUploadProfile(payload,id){
    console.log(payload)
    return async function(dispatch) {
        try {
            const response = await axios.put(`${process.env.REACT_APP_PUERTO}usuarios/${id}`, payload)
            console.log(response)
            return response

        }catch(error){
            console.log(error);
        }
    }
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

export function getPeopleByName(name) {
    return async function (dispatch) {
      try {
        let names = await axios.get(`${process.env.REACT_APP_PUERTO}usuarios/`
           + name
          );
         
        return dispatch({
          type: "GET_NAME",
          payload: names.data,
        });
      } catch (error) {
       console.log(error)
      }
    
    };
  }



