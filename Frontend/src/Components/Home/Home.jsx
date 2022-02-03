import { useEffect, useState, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllPost, getCleanHome, getMyId} from "../../actions";
import CrearPost from "../CrearPost/CrearPost";
import Layout from '../Layout/Layout'
import PostContainer from "../PostContainer/PostContainer";
import io,{Socket} from 'socket.io-client';


// socket.on('conectado',function(data){
//     console.log(data,'data socket')
// })

//////////////////////
export default function Home() {
    const renderizadoControl = useRef(0);
    const [Socket, setSocket] = useState('ok');
   
  
//  socket.on('connection',()=>{
//      console.log('estoy conectado desde el back')
//  })
const user = useSelector((state => state.myId));
  if (user.length !== 0)console.log(user, 'Mi Id' )
    /////////////////////////// abajo no
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(AllPost());
        dispatch(getMyId())
        // dispatch(getMyProfile())

        return () => {
            dispatch(getCleanHome())
        }
    }, [dispatch]);

    const posts = useSelector((state => state.allPost))
    
////////////////////////////arriba no se nota
    useEffect(()=>{
        let socket =io('http://localhost:3002')
        setSocket(socket);
        console.log(Socket,'el gran Socket')
        socket.on('connection',()=>{
        console.log('estoy conectado desde el back')   
        
        
    }) 
      },[ ])

      useEffect(() => {
          if(renderizadoControl.current===0){
              renderizadoControl.current= renderizadoControl.current +1;
              return
          };
     
         
            Socket.emit("addUser", user.id);
            Socket.on("getUsers", (users) => {
               
                console.log(users,"usuarios conectados")
            
                //   setOnlineUsers(
            //     user.followings.filter((f) => users.some((u) => u.userId === f))
            //   );
            });
         
      }, [user.id]);

    // if(socket !== null) { socket.on('conectado',function(data){
    //     console.log(data,'data socket')
    // })}
//////////////////////////////////s
    return (
        <Layout>
            <CrearPost />
            <PostContainer posts={posts} />
        </Layout>
    )
}