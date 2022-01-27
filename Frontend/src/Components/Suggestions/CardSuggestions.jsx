import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { tokenUsuario } from "../../actions/actionTypes";
import { StyledCardSuggestions } from "./StyledCardSuggestion";

const CardSuggestions = ({ fullname, id, profile,email ,follow}) => {

    const [ button, setButton] =useState(false)
    const idToFollow = {"followMe": id}
    const myProfile = useSelector((state) => state.myProfileData)
    async function  followUnFollow() {
        await axios.put(`${process.env.REACT_APP_PUERTO}usuarios/follow/`, idToFollow , tokenUsuario())
        setButton(true)
    } 
        
    


    return (
        <StyledCardSuggestions >
            <div className="container-card">
                <div className="img-name">
                <Link to={`/profile/${id}`}><img className="image" src={profile} alt={fullname}></img></Link>
                <div className="name">
                    <Link to={`/profile/${id}`} className="Link"><h3>{fullname}</h3></Link>
                    <p>{email}</p>
                </div>
                </div>
                { button===false?<button onClick={followUnFollow} className="btn"> seguir</button>:<p>ahora sigues a {fullname}</p>}
            </div>
        </StyledCardSuggestions>
    )
}

export default CardSuggestions;