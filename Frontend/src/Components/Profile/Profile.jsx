import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearProfileState, getFollowUserById, getMyId, getMyProfileData, getProfile } from "../../actions";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import CardProfile from "./CardProfile";
import { Container } from "./styledCardProfile";

const Profile = () => {

    const { id } = useParams();
    const dispatch = useDispatch()
    const profile = useSelector((state) => state.profile)
    const myId = useSelector((state) => state.myId)
    const followUser = useSelector((state) => state.followUser)

    useEffect(() => {
        dispatch(getProfile(id))
        dispatch(getFollowUserById(id))
        dispatch(getMyProfileData())
        dispatch(getMyId())
        return () => {
            dispatch(clearProfileState())
        }
    }, [dispatch, id])
    return (
        <div>
            <NavBar />
            <Container>
                <SideBar />
                {Object.keys(profile).length && Object.keys(myId).length?
                    <div>
                        <CardProfile
                            profile={profile}
                            followUser={followUser}
                            myId={myId}
                        />
                    </div>
                    : <div>cargando...</div>
                }
            </Container>
        </div>
    )
}

export default Profile;