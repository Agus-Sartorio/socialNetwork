/* import { getMyProfileData, getFollows } from "../../actions";
/* import { Link } from 'react-router-dom'; */
import {mensajesOrigin, Messages} from './Message/conversacion';
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


 
export default function Chats({contactos,conversaciones}) {


  const dispatch = useDispatch();
  console.log(conversaciones, 'conversaciones') 


  const contact = useSelector((state) => state.profile);

  
  const user = useSelector((state) => state.myProfileData);
  const [Idother, setIdother] = useState('')
  const [Contacto, setContacto] = useState({})
  // console.log(conversacion, 'probando conversacion')
  
  // const dispatch = useDispatch();

  console.log(mensajesOrigin(), 'mensajes prueba') 
  const mensajes = mensajesOrigin();
  
   
  const Myid = user.data[0].id
  // console.log( Myid, 'my id para el chat')

  mensajes.forEach((element)=>{
    if(Myid === element.Id){
      element.own=true;
      
    }
    // console.log(element, 'validacion de mensajes')
  });    
  

  const handleGetId = (id)=>{
    setIdother(id);
    console.log(id, 'el id del contacto')
    // const conversacion= conversaciones.find((e)=>{e.id == id})
    // console.log(conversacion, 'La conversacion')

  }
  

      
    console.log(contact, 'contact')

  
 

  if(Idother !== ''){
    const conversacion= conversaciones;
    const con = conversacion.data.find(e=> e.id === Idother)
    console.log(con, 'con')
    console.log(Idother, 'Ide seteado')
  }


  useEffect(() => {
    if(Idother !==''){
    dispatch(getProfile(Idother))
  }}, [dispatch])  
  
  if(Idother !== undefined){

  }
  // if(Myid === mensajes[1].Id){mensajes[1].own=true;
  // useEffect(() => {
  //   setContacto(contact);
  // })  
    // console.log(contact, 'Idother') 
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