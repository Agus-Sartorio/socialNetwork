import * as React from 'react';
import List from '@mui/material/List';
import FriendItem from './FriendItem';
import { useSelector } from 'react-redux';
import { useEffect,useState} from 'react';

export default function FriendList({online,offline}) {
 
  
  console.log(offline, 'pruebas definitivas')
  return (
    <List sx={{ width: '100%', maxWidth: 360,  zIndex:0 }}>
      {online?.map((e, i) => ( <FriendItem name={e.fullname}
       state={"oline"} key={e._id}
        profile={ e.profile.includes('uploads')?`${process.env.REACT_APP_PUERTO}` + e.profile 
                  :
                  e.profile} id={e.id}/>))}  
    
      {offline?.map( (e, i) => ( <FriendItem name={e.fullname}
       state={"offline"} 
       key={e._id} 
       profile={e.profile.includes('uploads')?`${process.env.REACT_APP_PUERTO}` + e.profile 
       : e.profile} id={e.id}/> ))}
  
     </List>
  );
}
