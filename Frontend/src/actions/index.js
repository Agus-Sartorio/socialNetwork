
import axios from 'axios';
import { CLEAR_PROFILE_STATE, CLEAR_USERS_STATE, GET_USER, GET_NAME,  GET_MY_PROFILE, GET_USER_BY_ID, tokenUsuario, MY_PROFILE } from "./actionTypes";


export const getUsers = () => {
    return async (dispatch) => {
        try {
<<<<<<< HEAD
            const usuarios = await axios.get(`${process.env.REACT_APP_PUERTO}usuarios/?myself=false&suggestions=true`, tokenUsuario())
=======
            const usuarios = await axios.get(`${process.env.REACT_APP_PUERTO}usuarios/?myself=true`, tokenUsuario())

>>>>>>> 5087113cf9cd7ce5ea3378f4673750c2e2ac8715
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
   
    return async (dispatch) => {
        try {
            const usuario = await axios.get(`${process.env.REACT_APP_PUERTO}usuarios/?myself=true`, tokenUsuario())
            
    return  dispatch({type:GET_MY_PROFILE,payload: {
    //esta actions la puede hacer getProfile  mandandole el ID de mi perfil
    name: usuario.data[0].fullname,
    description: usuario.data[0].description,
    imageprofile: usuario.data[0].profile, 
    imageport: './BReact.png',
    birthday:usuario.data[0].fullname,
    roll: 'Estudiante',
    cohorte:'FT-19b'

     }})
    } catch (err) {
        console.log(err)
    }
}

}


export function postUploadProfile(payload){
    console.log(payload)
    return async function(dispatch) {
        try {
            
            const response = await axios.put(`${process.env.REACT_APP_PUERTO}usuarios/` + payload, tokenUsuario())
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