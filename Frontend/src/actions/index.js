import axios from 'axios';
import { users } from "../test-data/usuarios";
import { CLEAR_PROFILE_STATE, CLEAR_USERS_STATE, GET_USER, GET_NAME, GET_MY_PROFILE, GET_USER_BY_ID } from "./actionTypes";


export const getUsers = () => {
    return async (dispatch) => {
        try {
            const usuarios = await axios.get(`${process.env.REACT_APP_PUERTO}usuarios`)
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



