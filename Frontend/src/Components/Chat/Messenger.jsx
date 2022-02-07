import { Container, Grid } from '@mui/material';
import { useEffect, useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_CONVERSATIONS, PUSHchat, user_ALL } from '../../actions';
import Conversation from './functionals/Conversation';
import FriendList from './functionals/FriendsList';
import MessagesList from './functionals/MessagesList';
import { io } from 'socket.io-client'

export default function Messenger({visible, contactos}) {
    
    const socket = useRef()
    const dispatch = useDispatch()
    const { conversations, chat, myId, chat:{chats} } = useSelector(state => state)
    
    const [online, setOnline] = useState([]);
    const [offline, setOffline] = useState();
   
  
    useEffect(()=>{

        socket.current = io(`${process.env.REACT_APP_PUERTO}`)  
        socket.current.emit("addUser", myId?.id);
        // socket.current.on("getUsers", users=>{console.log(users, 'usuarios conectados')})
        
    }, [visible])

    useEffect(()=>{
        socket.current.on("getMessage", data=>{
            console.log('esta es data', data)
            dispatch( PUSHchat({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            }) )
         
        })

        socket.current.on('myMessage', data=>{
            dispatch( PUSHchat({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            }) )
        })
    }, [socket])


    useEffect(() => {
         
        // if(control.current === 0){
        //     control.current = control.current + 1
        //     return 
        // }

        socket.current.on("getUsers", users=> {
            // console.log(users, 'usuarios conectados')
            let online= [];
            let Offline= [];
            let aux = users.filter((e)=> e.userId !== myId?.id )
            // console.log(aux, 'auxiliar')
               
            if (aux.length ){

                for(let i=0;i < aux.length;i++){ 
    
                       for(let j=0; j < contactos.length; j++){
    
                           
                           if(aux[i].userId === contactos[j].id ){
                               online.push(contactos[j])
                               continue
                            }
                            
    
                            if ( !aux.length || aux[i].userId !== contactos[j].id){
    
                                Offline.push(contactos[j]) 
                            }
                        } 
    
                    } 
            }

            else{Offline=contactos}

                // console.log(online, 'contactos online')
                setOnline(online);
                setOffline(Offline)
            })
            
        
        
    }, [socket.current]);



    useEffect(() => {
        dispatch(user_ALL())
    }, [user_ALL]);

    useEffect(() => {
        dispatch(get_CONVERSATIONS())
    }, [get_CONVERSATIONS]);


    return (
        <Grid container direction="row" justifyContent="center" alignItems="start">
            <Grid xs  item={true}>
                <Container>
                    <MessagesList conversations={conversations}/>
                </Container>
            </Grid>
            <Grid xs={6}  item={true}>
                <Container>
                    <Conversation socket={socket} online={online} />
                </Container>
            </Grid>
            <Grid xs  item={true}>
                <Container>
                    <FriendList online={online} offline={offline} />
                </Container>
            </Grid>
        </Grid>
    );
}
