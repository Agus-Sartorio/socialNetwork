import { Container, Grid, TextField } from "@mui/material";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NEW_MESSAGE } from "../../../actions";
import {InputMessage, SendContainer, ButtonSubmit} from './StyledChat'

const TypeBox = ({socket}) => {

 

  const dispatch = useDispatch()

  const {chat:{id, friend}, myId} = useSelector(state=>state)
  // console.log(myId.id, 'desde typebox');
  // console.log(friend, 'desde friend typebox');
  const [msg, setmsg] = useState()

  const handleClick =  ({target:{value}})=>{
 
    socket.current.emit("sendMessage", {
      senderId: myId.id,
      receiverId: friend.id,
      text: msg
    }) 
      NEW_MESSAGE({conversationId:id, text: msg, sender:myId.id})
      value=""
      setmsg("")

    //  dispatch(get_CONVERSATIONS())   
  }

  function handleChange(evt) {
    setmsg(evt.target.value);
  }


  return (

    <>
   
    
    
      {
        id?

      
          
       <SendContainer >

           <InputMessage
                autoComplete="off"
                required
                value={msg}
                name="message"
                onChange={(evt) => handleChange(evt)}
              />  


        {/* <TextField 
          id="filled-basic" 
          onChange={({target:{value}})=>{setmsg(value)}} 
          label="Type you message..." variant="filled" 
          sx={{width:'80%', height:'520%'}} 
           value={msg}
        /> */}

        <ButtonSubmit  
           onClick={(evt) => handleClick(evt)}
           type="submit"
           variant="contained"
           >

           {<SendIcon sx={{ marginLeft: 0, height: '40px', color:'#504949' }} />}
        </ButtonSubmit>
      </SendContainer>
       
      :
      <span></span>
      
    }
   
    </>);
};

export default TypeBox;
