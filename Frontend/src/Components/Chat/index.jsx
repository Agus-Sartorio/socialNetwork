import { useEffect, useRef, useContext } from "react";
//import {conversaciones} from './Message/conversacion';
import { getFollows,getMyProfileData, getMyId } from "../../actions";
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import Messenger from './Messenger';
import SocketConext from "../Context/SocketContext";
/* import {Link} from 'react-router-dom'; */
import SideBar from '../SideBar/SideBar';
import { ContainerIndex } from './styledChats';
import Loaderfull from '../Loader/LoaderFull'
// import Chats from './Chats.jsx';

// const { user } = useUserAuth();
// console.log(user, "yo como persona que me logeo")

export default function Chat({socket}) {

  const dispatch = useDispatch();
  const fallows = useSelector((state) => state.follows);
  const user = useSelector((state) =>  state.myProfileData);
 
  // if(user.length !== 0)console.log(user, "yo como persona que me logeo")
  useEffect(() => {
   
    dispatch(getFollows())
    dispatch(getMyProfileData())
    dispatch(getMyId())
  }, [])
  
      const contactos = fallows.data;
    
    return (     
        
     <>
     
     <NavBar/> 
     
        <ContainerIndex>
          <SideBar/>  
          {contactos? <Messenger user={user} contactos={contactos} socket={socket}/> : <Loaderfull></Loaderfull>}    
         
        </ContainerIndex>
      
  
    
      

     
     </>
    


 );} 

