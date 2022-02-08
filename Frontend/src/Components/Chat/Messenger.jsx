import { Container, Grid } from '@mui/material';
import { useEffect, useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_CONVERSATIONS, PUSHchat, user_ALL,  getFollows } from '../../actions';
import Conversation from './functionals/Conversation';
import FriendList from './functionals/FriendsList';
import MessagesList from './functionals/MessagesList';
import { io } from 'socket.io-client'

export default function Messenger({visible,contactos}) {
    
     console.log(contactos, 'heee')
    // const sockete = useRef(sockety)
    const dispatch = useDispatch()
    const { conversations,  myId, Socket, follows } = useSelector(state => state)


    const gsock = useRef();
    // let socket = useRef();
    // const contr = useRef(0);
    if(Socket.length !== 0){
       
        gsock.current = Socket;
    }

    useEffect(()=>{
        // if(contr.current === 0){
        //  contr.current=contr.current+1
        //  return
        // }


        if(gsock.current===undefined){

            gsock.current = io(`${process.env.REACT_APP_PUERTO}`)  
            gsock.current.emit("addUser", myId?.id);
            // socket.current.on("getUsers", users=>{console.log(users, 'usuarios conectados')})
            //dispatch(get_SOCKET(gsock.current))
        }

     }, [visible, myId ])


    
    const [online, setOnline] = useState([]);
    const [offline, setOffline] = useState();
   
  
    // useEffect(()=>{
        

    //     gsock.current?.emit("addUser", myId?.id);
    //     // socket.current.on("getUsers", users=>{console.log(users, 'usuarios conectados')})
        
    // }, [visible])

    useEffect(()=>{
        gsock.current.on("getMessage", data=>{
            console.log('aqui???')
            dispatch( PUSHchat({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            }) )
         
        })

        gsock.current?.on('myMessage', data=>{
            console.log('aqui???')
            dispatch( PUSHchat({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            }) )
        })
    }, [gsock.current])


    useEffect(() => {
         
        // if(control.current === 0){
        //     control.current = control.current + 1
        //     return 
        // }

        gsock.current?.on("getUsers", users=> {
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
                 console.log(Offline,'mmm')
                // console.log(online, 'contactos online')
                setOnline(online);
                setOffline(Offline)

            })
            
        
        
    }, [gsock.current]);



    useEffect(() => {
        dispatch(user_ALL())
    }, [user_ALL]);

    useEffect(() => {
        dispatch(get_CONVERSATIONS())
    }, [get_CONVERSATIONS]);

    useEffect(() => {
        dispatch(getFollows());
    }, [getFollows]);


    return (
        <Grid container direction="row" justifyContent="center" alignItems="start">
            <Grid xs  item={true}>
                <Container>
                    <MessagesList conversations={conversations}/>
                </Container>
            </Grid>
            <Grid xs={6}  item={true}>
                <Container>
                    <Conversation socket={gsock} online={online} />
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
