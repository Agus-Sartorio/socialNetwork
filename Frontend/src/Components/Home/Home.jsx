import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { AllPost, getCleanHome, getMyId, get_SOCKET } from "../../actions";
import { io } from 'socket.io-client'
=======
import { AllPost, getCleanHome, getFollows, getMyId } from "../../actions";
import Bienvenido from "./Bienvenido";

>>>>>>> 4b9e544b851bcf8959114c4b4f72c50ea3e31985
import CrearPost from "../CrearPost/CrearPost";
import Layout from "../Layout/Layout";
import PostContainer from "../PostContainer/PostContainer";

export default function Home({visible}) {
    
    const contr = useRef(0)
    const posts = useSelector((state => state.allPost))
<<<<<<< HEAD
    const {myId} = useSelector(state => state)
=======
    const follows = useSelector((state) => state.follows)
>>>>>>> 4b9e544b851bcf8959114c4b4f72c50ea3e31985
    const dispatch = useDispatch()
    const socket= useRef()
    console.log(socket, 'funciona el contexto?')

    useEffect(() => {
        dispatch(getMyId()) // !!no tocar please
        dispatch(AllPost());
        dispatch(getFollows())
        return () => {
            dispatch(getCleanHome())
            dispatch(getMyId()) // !!no tocar please
          }
    }, [dispatch]);

    
    useEffect(()=>{
       if(contr.current === 0){
        contr.current=contr.current+1
        return
       }
        socket.current = io(`${process.env.REACT_APP_PUERTO}`)  
        socket.current.emit("addUser", myId?.id);
        // socket.current.on("getUsers", users=>{console.log(users, 'usuarios conectados')})
        dispatch(get_SOCKET(socket.current))
    }, [visible, myId ])

    return (
        <Layout>
            <CrearPost />
         
                
                {
                    follows?.length || posts?.length ? (<PostContainer posts={posts} /> ) :<Bienvenido/>
                }
                 
          
            
        </Layout>
    )
}
