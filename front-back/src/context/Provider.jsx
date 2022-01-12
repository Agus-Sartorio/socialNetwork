import { useReducer } from "react"
import { Context } from "./Context"
import { Reducer } from "./Reducer"

const INITIAL_STATE = {
    users: []
}

const Provider = ({children}) => {

    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE )

    const [ toggleTheme, toggleLang ] = [ () => { dispatch({type: 'TOGGLE_THEME' })}, () => { dispatch({type: 'TOGGLE_LANG'})} ];


    return (
        <Context.Provider value={{state, toggleLang, toggleTheme }}>
            {children}
        </Context.Provider>
    )
}

export default Provider