import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getFollowers, getFollows, getMyProfileData } from "../../actions"
import NavBar from "../NavBar/NavBar"
import SideBar from "../SideBar/SideBar"
import MyProfile from "./MyProfile"
import { Div } from "./StyledMyProfile"

export const ViewProfile = () => {
    const myProfile = useSelector((state) => state.myProfileData)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMyProfileData())
        dispatch(getFollows())
        dispatch(getFollowers())
    }, [dispatch])


    return (
        <>
            <NavBar />
            <Div>
                <SideBar />
                <div>
                    {myProfile.data ? <MyProfile
                        myProfile={myProfile}
                         />
                        :
                        <div>cargando</div>}
                </div>
            </Div>
        </>
    )
}