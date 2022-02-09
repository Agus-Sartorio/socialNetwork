import { useEffect, useRef, useContext } from "react";
import { useDispatch, useSelector} from "react-redux";
import { AllPost, getCleanHome, getFollows, getMyId, get_SOCKET } from "../../actions";
import Bienvenido from "./Bienvenido";
import CrearPost from "../CrearPost/CrearPost";
import Layout from "../Layout/Layout";
import PostContainer from "../PostContainer/PostContainer";
import { io } from 'socket.io-client'

export default function Home({visible,socket}) {


    
    const contr = useRef(0)
    const gsock = useRef(null)
    const posts = useSelector((state => state.allPost))
    const {myId} = useSelector(state => state)
    const follows = useSelector((state) => state.follows)
    const Socket = useSelector((state) => state.Socket)
    console.log(socket, 'funciona el contexto?')
    const fastProfile = useSelector((state)=>state.myPhoto)
    const dispatch = useDispatch()
     console.log(Socket, 'debe mostrar un objeto no null')

    useEffect(() => {
        dispatch(getMyId()) // !!no tocar please
        dispatch(AllPost());
        dispatch(getFollows())
        return () => {
            dispatch(getCleanHome())
            dispatch(getMyId()) // !!no tocar please
          }
    }, [dispatch]);

    
    // useEffect(()=>{

    //     if(contr.current === 0){
    //      contr.current=contr.current+1
    //      return
    //     }

    //         gsock.current = io(`${process.env.REACT_APP_PUERTO}`)  
    //         gsock.current.emit("addUser", myId?.id);
    //         // socket.current.on("getUsers", users=>{console.log(users, 'usuarios conectados')})
    //         //dispatch(get_SOCKET(gsock.current))
        

    //  }, [visible, myId ])

    return (
        fastProfile?.data?.state===true?
        <Layout>
            <CrearPost />
                {
                    follows?.length || posts?.length ? (<PostContainer posts={posts} /> ) :<Bienvenido/>
                }
        </Layout>:<Layout><div>tu perfil se encuentra bloqueado temporalmente</div></Layout>
    )
}
