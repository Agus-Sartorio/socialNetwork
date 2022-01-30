import axios from "axios";
import { ModalFollowers } from "./ModalFollowers";
import { ModalFollows } from "./ModalFollows";
import { DivCardProfile } from "./styledCardProfile";
import DefaultUser from '../Icons/DefaultUser'
import { useDispatch } from "react-redux";
import { clearStateFollowsUser, getFollowUserById } from "../../actions";
import { tokenUsuario } from "../../actions/actionTypes";
import { useState } from "react";

const CardProfile = ({ profile, followUser, myId }) => {
    const [showFollowers, setShowFollowers] = useState(false);
    const [showFollowing, setShowFollowings] = useState(false);

    const isFollowing = followUser.followers?.map(e => e.id).includes(myId.id)
    const dispatch = useDispatch()
    const idToFollow = { "followMe": profile.id }

    async function followUnFollow(e) {
        e.preventDefault()
        try {
            await axios.put(`${process.env.REACT_APP_PUERTO}usuarios/follow/`, idToFollow, tokenUsuario())
            dispatch(clearStateFollowsUser())
            dispatch(getFollowUserById(profile.id))
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <DivCardProfile>
            {profile.profile.startsWith('https://avatars.') ?
                <img className="card__image" src={profile.profile} alt={profile.fullname} /> :
                <DefaultUser className="card__image" />
            }
            <h2 className="card__fullname">{profile.fullname}</h2>
            <p className="card__email">{profile.email}</p>
            <div className='card__show'>
                <button onClick={() => setShowFollowers(!showFollowers)}>
                    {followUser.followers?.length}
                    <span>{followUser.followers?.length === 1 ? ' Seguidor' : ' Seguidores'}</span>
                </button>
                <button onClick={() => setShowFollowings(!showFollowing)} >
                    {followUser.follows?.length} <span>Siguiendo</span>
                </button>
            </div>
            <button onClick={followUnFollow} className="card__btn-follow">
                {isFollowing ? 'Dejar de seguir' : 'Seguir'}
            </button>
            {followUser.follows ?
                <>
                    <ModalFollows show={showFollowing} setShow={setShowFollowings} followUser={followUser} />
                    <ModalFollowers show={showFollowers} setShow={setShowFollowers} followUser={followUser} />
                </> : <p>Este usuario no está siguiendo a nadie</p>}
        </DivCardProfile>
    )
}

export default CardProfile;
