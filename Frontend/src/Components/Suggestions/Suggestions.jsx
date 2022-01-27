import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { clearUsersState, getMyProfileData, getUsers } from "../../actions";
import NavBar from "../NavBar/NavBar";
import CardSuggestions from "./CardSuggestions";
import { DivCards, DivSug } from "./StyledSuggestions";
import SideBar from '../SideBar/SideBar'


const Suggestions = () => {
    const dispatch = useDispatch();
    const users = useSelector((state => state.users))

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getMyProfileData())
        return () => {
            dispatch(clearUsersState())
        }
    }, [dispatch])

    return (
        <div>
            <NavBar />
            <DivSug>
                <SideBar />
                <div>
                <h1>Sugerencias</h1>
                <DivCards>
                    {users.length ? users.map(e =>
                        <div className="card"><CardSuggestions
                            fullname={e.fullname}
                            id={e.id}
                            profile={e.profile}
                            email={e.email}
                            follow={e.follow}
                            key={e.id}
                        />
                        </div>
                    ) : <div>Cargando...</div>}
                    <div className="espacios"></div>
                </DivCards>
                </div>
            </DivSug>
        </div>
    )
}

export default Suggestions;
