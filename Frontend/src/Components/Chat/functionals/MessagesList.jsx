import * as React from 'react';
import List from '@mui/material/List';
import MessageItem from './MessageItem';
import { useSelector } from 'react-redux';

export default function MessagesList({conversations}) {

  const {follows} = useSelector(state => state)

  return (
    <List sx={{ width: '100%', maxWidth: 360, zIndex: 1 }}>
      {
        conversations.map((e, i)=>{
          //declaro un array amigo que contendra la data de mi amigo.
          //osea me trae mis amigos con los que he conversado

          const [friend] = follows.data.filter(u=>e.members.includes(u._id))
          console.log('este es friend:', friend)
        
          return(
            <MessageItem id={e?._id}
             // estoy mandando los datos de mi contactoy los los mensajes
              friend={{id:friend?._id,username:friend?.fullname, profile:(friend.profile)}} 
              key={friend?._id} 
              name={friend?.fullname}
              message={e.message?.text} 
              date={e.message?.createdAt}
               
              profile={friend.profile}/>
        )
        })
      }
    </List>
  );
}
