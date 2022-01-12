import { useReducer } from "react"
import { Context } from "./Context"
import { Reducer } from "./Reducer"
import axios from 'axios'

const INITIAL_STATE = {
    users: []
}

const Provider = ({children}) => {

    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE )

    const [ getUsers ] = [ async() => { 
        try {
            const users = await axios(`${import.meta.env.VITE_BACKEND}usuario/all`)
            console.log(users.data)
            return dispatch({type: 'GET_USERS', payload: users.data })
        } catch (error) {
            console.log(error)
        }
    } ];


    return (
        <Context.Provider value={{state, getUsers}}>
            {children}
        </Context.Provider>
    )
}

export default Provider