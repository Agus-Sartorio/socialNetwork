import { Container, Grid, TextField } from "@mui/material";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NEW_MESSAGE, get_CONVERSATIONS } from "../../../actions";


const TypeBox = ({socket}) => {
  const dispatch = useDispatch()
  const {chat:{id, friend}, myId} = useSelector(state=>state)
  // console.log(myId.id, 'desde typebox');
  // console.log(friend, 'desde friend typebox');
  const [msg, setmsg] = useState()

  const handleClick =  ({target:{value}})=>{
    console.log(id, 'miro que id conversationle mando a sendmessage ')
    
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
  return (
    <Container sx={{ bgcolor: "#fff"}}>
      {
        id?
      <Grid container direction="row" justifyContent="center" alignItems="center" >

        <TextField 
          id="filled-basic" 
          onChange={({target:{value}})=>{setmsg(value)}} 
          label="Type you message..." variant="filled" 
          sx={{width:'80%'}} 
           value={msg}
        />

        <Button onClick={handleClick} 
           variant="contained"
           endIcon={<SendIcon sx={{ marginLeft: 0, height: '40px' }} />}>
        </Button>
      </Grid>
      :
      <span></span>

      }
    </Container>
  );
};

export default TypeBox;
