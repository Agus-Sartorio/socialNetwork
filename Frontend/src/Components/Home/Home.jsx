// import NavBar from "../NavBar/NavBar";
// import SideBar from "../SideBar/SideBar";
import CrearPost from "../CrearPost/CrearPost";
import Layout from '../Layout/Layout'
import Post from "../Feed/Post"; 
import Bienvenido from "./Bienvenido";
import { useSelector } from "react-redux";
/* import { Div } from "../MyProfile/StyledMyProfile"; */

export default function Home() {
    const post = useSelector((state) => state.allPost)
    return (
        <Layout>
            <CrearPost />
            {
                post? <Post/> :  <Bienvenido/>
            }
       
          
        </Layout>
    )
}