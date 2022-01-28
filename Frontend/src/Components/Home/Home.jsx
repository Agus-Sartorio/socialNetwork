import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import CrearPost from "../CrearPost/CrearPost";
/* import Post from "../Feed/Post"; */
/* import { Div } from "../MyProfile/StyledMyProfile"; */

export default function Home() {
    return (
        <>
            <NavBar />
            <div className='main'>
                <SideBar />
                <div className='post'>
                    <CrearPost />
                    {/* <Post /> */}
                </div>
            </div>
        </>
    )
}