import { getMyProfileData, getFollows } from "../../actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import Conversation from './Conversation/IndexC';
import { Messenger, ChatMenu, ChatMenuWrapper,
         ChatMenuInput, ChatBox, ChatBoxWrapper, ChatBoxTop,
         ChatBoxBottom, ChatMessageInput, ChatSubmitButton, ChatOnlineContainer,
         ChatOnlineWrapper, NoConversationText
      } from './styledChats.js'


 
export default function Chats({contactos}) {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.myProfileData);

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
          {true? (
            <>
              <ChatBoxTop>
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
          {/* <ChatOnline
            onlineUsers={onlineUsers}
            currentId={user._id}
            setCurrentChat={setCurrentChat}
          /> */}
        </ChatOnlineWrapper>
      </ChatOnlineContainer>
    </Messenger>




     </>
     
     
)};