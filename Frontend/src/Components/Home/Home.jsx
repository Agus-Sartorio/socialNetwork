import { useEffect, useRef, useContext } from "react";
import { useDispatch, useSelector} from "react-redux";
import { AllPost, getCleanHome, getFollows, getMyId, get_SOCKET } from "../../actions";
import Bienvenido from "./Bienvenido";
import CrearPost from "../CrearPost/CrearPost";
import Layout from "../Layout/Layout";
import PostContainer from "../PostContainer/PostContainer";
import {SocketContext} from '../Context/SocketContext'

export default function Home({visible}) {

    const {socket} = useContext(SocketContext)
    
    const contr = useRef(0)
    const posts = useSelector((state => state.allPost))
    const {myId} = useSelector(state => state)
    const follows = useSelector((state) => state.follows)
    const dispatch = useDispatch();
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
     
       console.log(socket, 'debe mostrar un objeto no null')
        // socket.current = io(`${process.env.REACT_APP_PUERTO}`)  
        // socket.current.emit("addUser", myId?.id);
        // // socket.current.on("getUsers", users=>{console.log(users, 'usuarios conectados')})
        // dispatch(get_SOCKET(socket.current))
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
