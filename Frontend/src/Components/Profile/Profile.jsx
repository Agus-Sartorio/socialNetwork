import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearProfileState, getProfile } from "../../actions";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import CardProfile from "./CardProfile";

const Profile = () => {

    const { id } = useParams();
    const dispatch = useDispatch()
    const profile = useSelector((state) => state.profile)

    useEffect(() => {
        dispatch(getProfile(id))
        return () => {
            dispatch(clearProfileState())
        }
    }, [dispatch, id])
    return (
        <div>
            <NavBar/>
            <SideBar/>
            {profile.length ?
                <div>
                    <CardProfile
                        profile={profile}
                    />
                </div>
                :<div>cargando...</div>
            }
            <div>No Hay publicaciones</div>
        </div>
    )
}

export default Profile;