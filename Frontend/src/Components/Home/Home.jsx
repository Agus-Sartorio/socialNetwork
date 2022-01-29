// import NavBar from "../NavBar/NavBar";
// import SideBar from "../SideBar/SideBar";
import CrearPost from "../CrearPost/CrearPost";
import Layout from '../Layout/Layout'
import Post from "../Feed/Post"; 
<<<<<<< HEAD
=======
import Bienvenido from "./Bienvenido";
import { useSelector } from "react-redux";
>>>>>>> 36d38279f606b8e5c8a5a62cf8d6075637ee0c51
/* import { Div } from "../MyProfile/StyledMyProfile"; */

export default function Home() {
    const post = useSelector((state) => state.allPost)
    return (
        <Layout>
            <CrearPost />
<<<<<<< HEAD
            <Post/>
=======
            {
                post? <Post/> :  <Bienvenido/>
            }
       
          
>>>>>>> 36d38279f606b8e5c8a5a62cf8d6075637ee0c51
        </Layout>
    )
}