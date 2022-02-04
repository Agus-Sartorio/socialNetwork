import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearMyFollowsState, getFollowers, getFollows, getMyProfileData } from "../../actions"
import Layout from "../Layout/Layout"
import MyProfile from "./MyProfile"
import {Loader} from "../Loader/Loader"

export const ViewProfile = () => {
    const myProfile = useSelector((state) => state.myProfileData)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMyProfileData())
        dispatch(getFollows())
        dispatch(getFollowers())
        return () => {
            dispatch(clearMyFollowsState())
        }
    }, [dispatch])


    return (
        <Layout>
            {
                myProfile.data ? <MyProfile
                    myProfile={myProfile}
                />
                    :
                    <Loader></Loader>
            }
        </Layout>
    )
}