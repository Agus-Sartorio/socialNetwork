import { Container, Grid } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_CONVERSATIONS, PUSHchat, user_ALL } from '../../actions';
import Conversation from './functionals/Conversation';
import FriendList from './functionals/FriendsList';
import MessagesList from './functionals/MessagesList';
import { io } from 'socket.io-client'

export default function Messenger({visible}) {
    const socket = useRef()
    const dispatch = useDispatch()
    const { conversations, myId, chat, chat:{chats} } = useSelector(state => state)
    const [arrived, setarrived] = useState({})
    useEffect(()=>{
        socket.current = io(`${process.env.REACT_APP_PUERTO}`)
        
    }, [visible])

    useEffect(()=>{
        socket.current.on("getMessage", data=>{
            console.log('esta es data', data)
            dispatch( PUSHchat({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            }) )
            setarrived({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            })
        })

        socket.current.on('myMessage', data=>{
            dispatch( PUSHchat({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            }) )
        })
    }, [socket])

    useEffect(()=>{
        arrived && chat?conversations?.[conversations.indexOf(chat.id)]?.members.includes(arrived.senderId) : false && dispatch( PUSHchat(arrived) )
    }, [arrived])

    useEffect(() => {
        socket.current.emit("addUser", myId.id);
        console.log(myId.id, "Id mio que mando al socket")
        socket.current.on("getUsers", users=>{console.log(users, 'usuarios conectados')})
    }, []);



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
                    <MessagesList conversations={conversations} />
                </Container>
            </Grid>
            <Grid xs={6}  item={true}>
                <Container>
                    <Conversation socket={socket} />
                </Container>
            </Grid>
            <Grid xs  item={true}>
                <Container>
                    <FriendList />
                </Container>
            </Grid>
        </Grid>
    );
}
