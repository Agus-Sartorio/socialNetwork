import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearProfileState, getProfile } from "../../actions";
import { tokenUsuario } from "../../actions/actionTypes";
import { DivCardProfile } from "./styledCardProfile";

const CardProfile = ({ profile }) => {
    const dispatch = useDispatch();
    const [ button, setButton] =useState(false)
    const idToFollow = {"followMe": profile.id}
    const myProfile = useSelector((state) => state.myProfileData)
    async function  followUnFollow() {
        await axios.put(`${process.env.REACT_APP_PUERTO}usuarios/follow/${myProfile[0].id}`, idToFollow , tokenUsuario())
        dispatch(clearProfileState())
        dispatch(getProfile(profile.id))
    } 
        
    

    useEffect(() => {
        profile.follow.followers.includes(myProfile[0].id)===true?
        setButton(true):setButton(false)
    })
    return (
        <DivCardProfile>
            <div className="head">
                <img src={profile.profile} className="img"></img>
            </div>

            <div className="body">
                <div>
                    <h3>{profile.fullname}</h3>
                    <p>{profile.email}</p>
                </div>
                <div className="follows-button">
                    <h3>{profile.follow.followers.length} followers {profile.follow.follows.length} follows</h3>
                    <div>
                        { button===false?<button onClick={followUnFollow} className="follow"> seguir</button>:<button onClick={followUnFollow} className='unfollow'>dejar de seguir</button>}

                    </div>
                    
                </div>
            </div>

        </DivCardProfile>
    )
}

export default CardProfile;
