import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllPost, getMyId} from "../../actions";
import CrearPost from "../CrearPost/CrearPost";
import Layout from '../Layout/Layout'
import PostContainer from "../PostContainer/PostContainer";
import io from 'socket.io-client';


// socket.on('conectado',function(data){
//     console.log(data,'data socket')
// })

//////////////////////
export default function Home() {
   
// const socket = io(`http://localhost:3002`);
//  socket.on('connection',()=>{
//      console.log('estoy conectado desde el back')
//  })


    /////////////////////////// abajo no
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(AllPost());
        dispatch(getMyId())
    }, [dispatch]);

    const posts = useSelector((state => state.allPost))

////////////////////////////
    // useEffect(()=>{
    //     const socket = io(`http://localhost:3002`);
    //     socket.on('connection',()=>{
    //     console.log('estoy conectado desde el back')
    //  })
    //   },[])

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