// import { useEffect, useState } from "react";
import React from 'react';
import {ChatOnlineFriend, ChatOnlineImgContainer, ChatOnlineImg, ChatOnlineBadger} from "./styledOnline";


export default function ChatOnline({contactos}) {



    // const dispatch = useDispatch();
    // const fallows = useSelector((state) => state.follows);
    // useEffect(() => {
    //   dispatch(getFollows())
    // }, [dispatch])

          console.log(contactos, 'chatOnline')

          const order = contactos.sort((a, b) => {
            if (a.fullname.toLowerCase() > b.fullname.toLowerCase()) return 1
            else return -1
               })  
               console.log(order, 'chatOnline ordenando alfabetic')

//   const [friends, setFriends] = useState([]);
//   const [onlineFriends, setOnlineFriends] = useState([]);
//   const PF = process.env.REACT_APP_PUBLIC_FOLDER;

//   useEffect(() => {
//     const getFriends = async () => {
//       const res = await axios.get("/users/friends/" + currentId);
//       setFriends(res.data);
//     };

//     getFriends();
//   }, [currentId]);

//   useEffect(() => {
//     setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
//   }, [friends, onlineUsers]);

//   const handleClick = async (user) => {
//     try {
//       const res = await axios.get(
//         `/conversations/find/${currentId}/${user._id}`
//       );
//       setCurrentChat(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

  return (
    <div>
       {contactos.map((e) => (
       
       <ChatOnlineFriend>
          <ChatOnlineImgContainer>
            <ChatOnlineImg
              src={e.profile} 
              alt=""
            />
            <ChatOnlineBadger/>
          </ChatOnlineImgContainer>
          <span className="chatOnlineName">{e.fullname}</span>
        </ChatOnlineFriend>))}
        
      
    </div>
  );
}