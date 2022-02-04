import * as React from 'react';
import List from '@mui/material/List';
import FriendItem from './FriendItem';
import { useSelector } from 'react-redux';

export default function FriendList() {
  const { follows } = useSelector(state => state)
  console.log(follows.data,'los follows')
  return (
    <List sx={{ width: '100%', maxWidth: 360,  zIndex:0 }}>
      {
        follows.data.map((e, i) => (
          <FriendItem name={e.fullname} state={"offline"} key={e._id} profile={e.profile} id={e._id}/>
))
      }
    </List>
  );
}
