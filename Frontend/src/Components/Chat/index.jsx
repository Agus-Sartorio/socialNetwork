import React from 'react';
import NavBar from '../NavBar/NavBar'
import {Link} from 'react-router-dom';
import { Messenger, ChatMenu, ChatMenuWrapper,
         ChatMenuInput, ChatBox, ChatBoxWrapper, ChatBoxTop,
         ChatBoxBottom, ChatMessageInput, ChatSubmitButton, ChatOnlineContainer,
         ChatOnlineWrapper, NoConversationText
      } from './styledindex.js'


 
export default function Chat() {

    return (     
        
     <>
     
     <NavBar/>
      <Messenger>
        <ChatMenu>
          <ChatMenuWrapper>
            <ChatMenuInput placeholder="Search for friends"/>
            {/* {conversations.map((c) => (
              <div>
                 <Conversation conversation={c} currentUser={user} /> 
              </div>
            ))} */}
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
                    placeholder="write something..."
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
    


 );} 

