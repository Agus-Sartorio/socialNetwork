import { DivCardProfile } from "./styledCardProfile";

const CardProfile = ({ profile }) => {
    return (
        <DivCardProfile>
            <div className="head">
                <img src={profile[0].profile} className="img"></img>
            </div>

            <div className="body">
                <div>
                    <h3>{profile[0].name}</h3>
                    <p>{profile[0].email}</p>
                </div>
                <div className="follows-button">
                    <h3>{profile[0].follow.followers.length} followers {profile[0].follow.follows.length} follows</h3>
                    <button>seguir</button>
                </div>
            </div>

        </DivCardProfile>
    )
}

export default CardProfile;
