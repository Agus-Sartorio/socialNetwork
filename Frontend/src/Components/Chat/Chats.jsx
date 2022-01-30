/* import { getMyProfileData, getFollows } from "../../actions";
/* import { Link } from 'react-router-dom'; */
import {useSelector} from 'react-redux'; 
import React, {useState} from "react";
import Conversation from './Conversation/IndexC';
import Message from './Message/IndexM';
import ChatOnline from './ChatOnline/index';

import { Messenger, ChatMenu, ChatMenuWrapper,
         ChatMenuInput, ChatBox, ChatBoxWrapper, ChatBoxTop,
         ChatBoxBottom, ChatMessageInput, ChatSubmitButton, ChatOnlineContainer,
         ChatOnlineWrapper, NoConversationText
      } from './styledChats.js'


 
export default function Chats({contactos}) {

    
  // const [input, setInput] = useState({
  //   //  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiBf9NIb94QLztGC6JuQk3-FNCrCY1ry64GA&usqp=CAU"
  //   // "https://images.ole.com.ar/2022/01/01/smOuc4YsP_340x340__1.jpg"  
  //   // `${process.env.REACT_APP_PUERTO}
  //   // `${process.env.REACT_APP_PUERTO}uploads/ESiDsykaitaH1weBOslWLJs0TLJ2_profile.jpg`

  //   fullname: userk.data[0].fullname,
  //   description: userk.data[0].description,
  //   background_picture: `./BReact.png`,
  //   nacionalidad: userk.data[0].nacionalidad,
  //   email: userk.data[0].email,
  //   birthday: userk.data[0].birthday
  // });
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
  console.log( Myid, 'my id para el chat')
//   useEffect(() => {
//     dispatch(getMyProfileData())
//   }, [dispatch])

// const getId_other = (e) => {
 
//   const getId= members.find
//   }
// getId_other
   
    mensajes.map((e)=>{
      
      if(Myid === e.Id){
         e.own=true;
         console.log(e, 'validacion de mensajes')
          }
   })

    // if(Myid === mensajes[1].Id){mensajes[1].own=true;
    // console.log(mensajes[1].own, 'validacion') }
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
              {mensajes.map((c) => (
               <Message own={c.own} persona={c}/>
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