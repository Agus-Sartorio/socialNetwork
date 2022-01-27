import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearProfileState, getMyProfileData, getProfile } from "../../actions";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import CardProfile from "./CardProfile";
import { Container } from "./styledCardProfile";

const Profile = () => {

    const { id } = useParams();
    const dispatch = useDispatch()
    const profile = useSelector((state) => state.profile)

    useEffect(() => {
        dispatch(getProfile(id))
        dispatch(getMyProfileData())
        return () => {
            dispatch(clearProfileState())
        }
    }, [dispatch, id])
    return (
        <div>
            <NavBar/>
            <Container>
            <SideBar/>
            {Object.keys(profile).length ?
                <div>
                    <CardProfile
                        profile={profile}
                    />
                </div>
                :<div>cargando...</div>
            }
            </Container>
        </div>
    )
}

export default Profile;