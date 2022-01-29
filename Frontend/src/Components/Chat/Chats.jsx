/* import { getMyProfileData, getFollows } from "../../actions";
import React, { useEffect, useState } from "react"; */
import {useSelector} from 'react-redux'; 
/* import { Link } from 'react-router-dom'; */
import Conversation from './Conversation/IndexC';
import Message from './Message/IndexM';
import ChatOnline from './ChatOnline/index';

import { Messenger, ChatMenu, ChatMenuWrapper,
         ChatMenuInput, ChatBox, ChatBoxWrapper, ChatBoxTop,
         ChatBoxBottom, ChatMessageInput, ChatSubmitButton, ChatOnlineContainer,
         ChatOnlineWrapper, NoConversationText
      } from './styledChats.js'


 
export default function Chats({contactos}) {


   const menasajes=[
    
  {orden: 1,
    Id:'6d5zgcvhomXcQKMAYd2qY2zWhQe2',
    mensaje:'Sisi ya funciona'

  },{ orden: 2,
    Id:'WlpqFTklN1TALxHpVEa6H75U5VF2',
    mensaje:'lo que hiciste conmigo'
 },{orden: 3,
    Id:'WlpqFTklN1TALxHpVEa6H75U5VF2',
    mensaje:'Borrandolo de firebase'
 },{orden: 4,
     Id:'6d5zgcvhomXcQKMAYd2qY2zWhQe2',
     mensaje:'Ahora a mi tamopoco me funciona',
 },{orden: 5,
     Id:'6d5zgcvhomXcQKMAYd2qY2zWhQe2',
     mensaje:'?',
 },{ orden: 6,
  Id:'6d5zgcvhomXcQKMAYd2qY2zWhQe2',
  mensaje:'Como arreglaste lo del login?',}
];
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.myProfileData);
   
  // const Myid=user.id;
//   useEffect(() => {
//     dispatch(getMyProfileData())
//   }, [dispatch])
    
//   useEffect(() => {
//    dispatch(getFollows())
//    }, [dispatch])

//     const fallows = useSelector((state) => state.search)
//     const contactos= fallows.data
//         console.log(contactos, 'chats lo que mando')
    
      
      return (     
          <>
        
      <Messenger>
      <ChatMenu>
        <ChatMenuWrapper>
          <ChatMenuInput placeholder="Search for friends"/>
          {/* <Conversation user={contactos}/> */}

          {contactos.map((c) => (
            <div>
                <Conversation user={c}/>
            </div>
          ))}  

        </ChatMenuWrapper>
      </ChatMenu>
      <ChatBox>
        <ChatBoxWrapper>
          {false? (
            <>
              <ChatBoxTop>
                    <Message/>
                    <Message own={true}/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message own={true}/> 
                    <Message own={true}/>
                {/* {messages.map((m) => (
                  <div ref={scrollRef}>
                    <Message message={m} own={m.sender === user._id} /> 
                  </div>
                ))} */}
                </ChatBoxTop>
                <ChatBoxBottom>
                  <ChatMessageInput
                    placeholder="write something.."
                  // onChange={(e) => setNewMessage(e.target.value)}
                  // value={newMessage}
                  ></ChatMessageInput>
                  <ChatSubmitButton>
                    Send
                  </ChatSubmitButton>
                </ChatBoxBottom>
              </>
            ) : (
              <NoConversationText>
                Open a conversation to start a chat.
              </NoConversationText>
            )}
          </ChatBoxWrapper>
        </ChatBox>
        <ChatOnlineContainer>
          <ChatOnlineWrapper>

           <ChatOnline contactos={contactos}/>
            {/* <ChatOnline
            onlineUsers={onlineUsers}
            currentId={user._id}
            setCurrentChat={setCurrentChat}
          /> */}
          </ChatOnlineWrapper>
        </ChatOnlineContainer>
      </Messenger>




    </>


  )
};