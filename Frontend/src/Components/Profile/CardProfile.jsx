import { DivCardProfile } from "./styledCardProfile";

const CardProfile = ({ profile }) => {
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
                    <button>seguir</button>
                </div>
            </div>

        </DivCardProfile>
    )
}

export default CardProfile;
