/* import { getMyProfileData, getFollows } from "../../actions";
/* import { Link } from 'react-router-dom'; */
import {conversacion} from './Message/conversacion';
import { getProfile } from "../../actions";
import {useSelector, useDispatch } from 'react-redux';
import React, {useState, useEffect} from "react";
import Conversation from './Conversation/IndexC';
import Message from './Message/IndexM';
import ChatOnline from './ChatOnline/index';

import { Messenger, ChatMenu, ChatMenuWrapper,
         ChatMenuInput, ChatBox, ChatBoxWrapper, ChatBoxTop,
         ChatBoxBottom, ChatMessageInput, ChatSubmitButton, ChatOnlineContainer,
         ChatOnlineWrapper, NoConversationText
      } from './styledChats.js'


 
export default function Chats({contactos}) {


  const dispatch = useDispatch();

  const [Idother, setIdother] = useState('')
  const [Contacto, setContacto] = useState({})
  // console.log(conversacion, 'probando conversacion')
   const mensajesOrigin=[
    
  {orden: 1,
    Id:'6d5zgcvhomXcQKMAYd2qY2zWhQe2',
    mensaje:'Sisi ya funciona',
    own:false

  },{ orden: 2,
    Id:'WlpqFTklN1TALxHpVEa6H75U5VF2',
    mensaje:'lo que hiciste conmigo',
    own:false
 },{orden: 3,
    Id:'WlpqFTklN1TALxHpVEa6H75U5VF2',
    mensaje:'Borrandolo de firebase',
    own:false

 },{orden: 4,
     Id:'6d5zgcvhomXcQKMAYd2qY2zWhQe2',
     mensaje:'Ahora a mi tamopoco me funciona',
     own:false

 },{orden: 5,
     Id:'6d5zgcvhomXcQKMAYd2qY2zWhQe2',
     mensaje:'?',
     own:false

 },{ orden: 6,
     Id:'6d5zgcvhomXcQKMAYd2qY2zWhQe2',
     mensaje:'Como arreglaste lo del login?',
     own:false
    }
];
  // const dispatch = useDispatch();
  const mensajes= mensajesOrigin.reverse();
  const user = useSelector((state) => state.myProfileData);
   
  const Myid = user.data[0].id
  // console.log( Myid, 'my id para el chat')

  mensajes.forEach((element)=>{
    if(Myid === element.Id){
      element.own=true;
      
    }
    // console.log(element, 'validacion de mensajes')
  });    
  
  const contact = useSelector((state) => state.profile);
  const handleGetId = (id)=>{
    setIdother(id);
  }
  useEffect(() => {
    dispatch(getProfile(Idother))
  }, [dispatch])  
  
  if(Idother !== undefined){

  }
  // if(Myid === mensajes[1].Id){mensajes[1].own=true;
  // useEffect(() => {
  //   setContacto(contact);
  // })  
    console.log(contact, 'Idother') 
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
            <div onClick={()=>handleGetId(c.id)}>
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
              {mensajes.map((c) => (
               <Message key={c.orden} 
                own={c.own}
                mensajes={c} 
                user={user} 
                idCont={Idother}/>
                 ))} 
                  
                    {/* <Message own={mensajes[0].own} />
                    <Message own={mensajes[1].own} />
                    <Message own={mensajes[2].own} />
                    <Message own={mensajes[3].own} />
                    <Message own={mensajes[4].own} />
                    <Message own={mensajes[5].own} />  */}
                 
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