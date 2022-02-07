import { Container } from "@mui/material";
import Chat from "./Chat";
import TypeBox from "./TypeBox";

const Conversation = ({socket, online}) => {
  
  return(
      <Container>
          <Chat socket={socket} online={online} />
          <TypeBox socket={socket} />
      </Container>
  );
};

export default Conversation;
