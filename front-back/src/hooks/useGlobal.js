import { useContext } from "react"
import { Context } from "../context/Context"

export const useGlobal =  ()=>{
    const {state, getUsers} = useContext(Context)

    return{
        ...state, 
        getUsers
    }
}