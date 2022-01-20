import { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux"
import { clearUsersState, getUsers } from "../../actions";
import NavBar from "../NavBar/NavBar";
import CardSuggestions from "./CardSuggestions";
import { SuggestionsDiv } from "./StyledSuggestions";


const Suggestions = () => {
    const dispatch = useDispatch();
    const users = useSelector((state => state.users))

    useEffect (() => {
        dispatch(getUsers())
        return () => {
            dispatch(clearUsersState())
        }
    },[dispatch])

    return (
        <div>
        <NavBar/>    
        <SuggestionsDiv>
            <div className="espacios"></div>
            <h3 className="title">Suggestions</h3>
            {users.length? users.map(e => 
            <div><CardSuggestions
                name={e.name}
                id={e._id}
                profile={e.profile}
                email={e.email}
                key={e._id}
                        />
            </div>
            ):<div>Cargando...</div>}
            <div className="espacios"></div>
        </SuggestionsDiv>
        </div>
    )
}

export default Suggestions;
