// import axios from "axios";
/* import { getMyProfileData } from "../../../actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'; */
import { ConversationCont, ConversationImg, ConversationName } from "./styledC";

export default function Conversation({ user }) {
  //   const [user, setUser] = useState(null);
  //   const PF = process.env.REACT_APP_PUBLIC_FOLDER;


  //   useEffect(() => {
  //     const friendId = conversation.members.find((m) => m !== currentUser._id);

  //     const getUser = async () => {
  //       try {
  //         const res = await axios("/users?userId=" + friendId);
  //         setUser(res.data);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     getUser();
  //   }, [currentUser, conversation]);

  return (
    <ConversationCont>
      <ConversationImg
        src={user.profile}
        alt=""
      />
      <ConversationName>{user.fullname}</ConversationName>
    </ConversationCont>
  );
}