import axios from 'axios';
<<<<<<< HEAD
import { CLEAR_PROFILE_STATE, CLEAR_USERS_STATE, GET_USER, GET_NAME, GET_MY_PROFILE, GET_USER_BY_ID, tokenUsuario } from "./actionTypes";
=======
import { CLEAR_PROFILE_STATE, CLEAR_USERS_STATE, GET_USER,  GET_MY_PROFILE, GET_USER_BY_ID, tokenUsuario, MY_PROFILE } from "./actionTypes";
>>>>>>> 40974ae750e16b95bcd8a78c65a78021e131e70a


export const getUsers = () => {
    return async (dispatch) => {
        try {
            const usuarios = await axios.get(`${process.env.REACT_APP_PUERTO}usuarios/?myself=true`, tokenUsuario())
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
            const user = await axios.get(`${process.env.REACT_APP_PUERTO}usuarios/Id/${id}`,tokenUsuario())
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
    //esta actions la puede hacer getProfile  mandandole el ID de mi perfil
    name: 'Dufainder Bedoya',
    id:'',
    description: 'Soy un monstruo programando xD',
    imageprofile: './perfil2.jpg', 
    imageport: './BReact.png',
    birthday:'15-02-2022',
    roll: 'Estudiante',
    cohorte:'FT-19b'
    
     }})
}


export function postUploadProfile(payload){
    console.log(payload)
    return async function(dispatch) {
        try {
            
            const response = await axios.put(`${process.env.REACT_APP_PUERTO}usuarios/${id}`, payload, tokenUsuario())
            console.log(response)
            return response

        }catch(error){
            console.log(error);
        }
    }
}

export function getPeopleByName(name) {
    return async function (dispatch) {
      try {
        let names = await axios.get(`${process.env.REACT_APP_PUERTO}usuarios/?myself=false`
           + name,tokenUsuario()
          );
         
        return dispatch({
          type: GET_NAME,
          payload: names.data,
        });
      } catch (error) {
       console.log(error)
      }
    
    };
  }



  export const getMyProfileData = () => {
    return async (dispatch) => {
        try {
            const profile = await axios.get(`${process.env.REACT_APP_PUERTO}usuarios/?myself=true`, tokenUsuario())
            return dispatch({ type: MY_PROFILE, payload: profile.data })
        } catch (err) {
            console.log(err)
        }
    }

}