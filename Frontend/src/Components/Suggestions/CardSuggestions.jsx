import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearUsersState, getUsers } from "../../actions";
import { tokenUsuario } from "../../actions/actionTypes";
import { StyledCardSuggestions } from "./StyledCardSuggestion";

const CardSuggestions = ({ fullname, id, profile,email ,follow}) => {

    const dispatch = useDispatch();
    const [ button, setButton] =useState(false)
    const idToFollow = {"followMe": id}
    const myProfile = useSelector((state) => state.myProfileData)
    async function  followUnFollow() {
        await axios.put(`${process.env.REACT_APP_PUERTO}usuarios/follow/${myProfile[0].id}`, idToFollow , tokenUsuario())
        dispatch(clearUsersState())
        dispatch(getUsers())
    } 
        
    

    useEffect(() => {
        follow.followers.includes(myProfile[0].id)===true?
        setButton(true):setButton(false)
    })

    return (
        <StyledCardSuggestions>
            <div className="container-card">
                <div className="img-name">
                <Link to={`/profile/${id}`}><img className="image" src={profile} alt={fullname}></img></Link>
                <div className="name">
                    <Link to={`/profile/${id}`} className="Link"><h3>{fullname}</h3></Link>
                    <p>{email}</p>
                </div>
                <div>
                    {Object.keys(follow.followers).length?<div>si</div>:<div>no</div>}
                </div>
                </div>
                { button===false?<button onClick={followUnFollow} className="btn"> seguir</button>:<button onClick={followUnFollow} className='btn2'>dejar de seguir</button>}
            </div>
        </StyledCardSuggestions>
    )
}

export default CardSuggestions;