
import { ModalFollowers } from "./ModalFollowers";
import { ModalFollows } from "./ModalFollows";
import { DivCardProfile } from "./styledCardProfile";

const CardProfile = ({ profile, myProfile, followUser }) => {
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
                    {followUser.follows?
                        <>
                            <ModalFollows followUser={followUser}
                               />
                            <ModalFollowers followUser={followUser} 
                              myProfile={myProfile}
                              profile={profile}/>
                        </> : <div>cargando..</div>}
                </div>
            </div>
        </DivCardProfile>
    )
}

export default CardProfile;
