import * as React from 'react';
import {useRef} from 'react';
import {useEffect} from 'react';
import { getMyProfileData } from "../../../actions";
import { useDispatch, useSelector } from 'react-redux';
import List from '@mui/material/List';
import Message from './Message';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Container, Divider } from '@mui/material';


export default function Chat({online,user}) {
    const dispatch = useDispatch()
    const { chat: { friend , chats }, myProfileData } = useSelector(state => state)
    //  console.log(friend, 'lo que estoy areglando ??')
    //  console.log(chats, 'chats????')
    //  console.log(chats, 'que mierda es chats')
    //  console.log(friend, 'que es friend aqui y porque da error')
    const me = useRef(null);
    useEffect(()=>{
         
         dispatch(getMyProfileData())
         console.log(myProfileData, 'que es aqui y porque da error')
         if(myProfileData.length !== 0){
            me.current = myProfileData?.data[0]; 
            console.log('entro el hpta')}
         
         // socket.current.on("getUsers", users=>{console.log(users, 'usuarios conectados')})       
        }, [dispatch])
        
        
        
     let contactOnline=false;
     if (online.length !== 0){
        contactOnline = online.some((contact)=>contact.id===friend.id)

     }

    return (
        <List sx={{ width: '100%', maxWidth: 600, zIndex: 0}}>
            <ListItem alignItems="center">
                <ListItemAvatar>
                    <Avatar alt={friend?.username? friend.username : me.current?.fullname } src={friend.profile? friend.profile.includes('uploads')? `${process.env.REACT_APP_PUERTO}` + friend.profile : friend.profile : me.current?.profile.includes('uploads')? `${process.env.REACT_APP_PUERTO}` + me.current?.profile : me.current?.profile  } />
                </ListItemAvatar>
                <ListItemText
                    primary={friend?.username? friend.username : me.current?.fullname}
                    secondary={
                        <>
                            {friend.username? contactOnline? "online" : "offline" : "online"}
                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
           
           {/* //////////// */}
           
            {
                chats.length?
                (
                    <>

            <Container sx={{ marginTop: 2, height: '400px', overflow: "auto" }}>
            {
                chats?.map(e => (
                    <Message
                    key={e.id}
                    name={e.sender===friend.id?friend.username:'You'}
                    message={e.text} date={e.createdAt}
                    type={e.sender===friend.id? "friend" : e.sender === me.current?.id ?"own":  ""}
                    profile={e.sender===friend.id?friend.profile : me.current?.profile}
                    />
                    ))
                }

        </Container>
                </>
                )
                :
                <Container sx={{height: '500px'}}>
                    <p>
                        No hay chats por mostrar
                    </p>
                </Container>
            }
        </List>
    );
}
