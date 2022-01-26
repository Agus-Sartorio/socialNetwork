import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyProfileData } from "../../actions";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";


export default function Home() {
const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getMyProfileData())
    },[dispatch])
    return (
        <>
            <NavBar />
            <SideBar />
        </>
    )
}