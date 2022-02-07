import * as React from 'react';
import List from '@mui/material/List';
import Message from './Message';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Container, Divider } from '@mui/material';
import { useSelector } from 'react-redux';

export default function Chat({online}) {

    const { chat: { friend , chats } } = useSelector(state => state)
    //  console.log(friend, 'lo que estoy areglando ??')
    //  console.log(chats, 'chats????')
     console.log(chats, 'que mierda es chats')
     console.log(friend, 'que es friend aqui y porque da error')
     console.log(online, ' esta online?')
     let contactOnline=false;
     if (online.length !== 0){
        contactOnline = online.some((contact)=>contact.id===friend.id)
         console.log(contactOnline, 'validacion')
     }

    return (
        <List sx={{ width: '100%', maxWidth: 600, zIndex: 0}}>
            <ListItem alignItems="center">
                <ListItemAvatar>
                    <Avatar alt={friend?.username} src={friend.profile?.includes('uploads')? `${process.env.REACT_APP_PUERTO}` + friend.profile : friend.profile } />
                </ListItemAvatar>
                <ListItemText
                    primary={friend?.username}
                    secondary={
                        <>
                            {contactOnline? "online" : "offline"}
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
                    type={e.sender===friend.id?"friend":"own"}
                    profile={e.sender===friend.id?friend.profile:null}
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
