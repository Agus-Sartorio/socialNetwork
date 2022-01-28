import axios from "axios";
import { useEffect, useState } from "react";
import { tokenUsuario } from "../../actions/actionTypes";
import Modal from "./Modal";
import { DivCardProfile } from "./styledCardProfile";

const CardProfile = ({ profile, myProfile, followUser }) => {
    const [button, setButton] = useState(false)
    const idToFollow = { "followMe": profile.id }


    async function followUnFollow() {
        if (button) {
            setButton(false)
            await axios.put(`${process.env.REACT_APP_PUERTO}usuarios/follow/`, idToFollow, tokenUsuario())
        } else {
            setButton(true)
            await axios.put(`${process.env.REACT_APP_PUERTO}usuarios/follow/`, idToFollow, tokenUsuario())
        }
    }



    useEffect(() => {
        profile.follow.followers.includes(myProfile.data[0].id) === true ?
            setButton(true) : setButton(false)
    }, [profile.follow.followers, myProfile])
    return (
        <DivCardProfile>
            <div className="head">
                <img src={profile.profile} className="img" alt='imagen de usuario' />
            </div>
            <div className="body">
                <div>
                    <h3>{profile.fullname}</h3>
                    <p>{profile.email}</p>
                </div>
                <div className="follows-button">
                   <Modal followUser={followUser}
                   myProfile={myProfile}
                   />
                    <div>
                        {button === false ? <button onClick={followUnFollow} className="follow"> seguir</button> : <button onClick={followUnFollow} className='unfollow'>dejar de seguir</button>}

                    </div>

                </div>
            </div>

        </DivCardProfile>
    )
}

export default CardProfile;
