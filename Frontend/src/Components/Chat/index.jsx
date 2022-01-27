import React from 'react';
import NavBar from '../NavBar/NavBar';
import {Link} from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import {ContainerIndex} from './styledChats';
import Chats from './Chats.jsx';



 
export default function Chat() {

    return (     
        
     <>
     
     <NavBar/>
     
        <ContainerIndex>
          <SideBar/>  
               
          <Chats/>
        </ContainerIndex>
      
  
    
      

     
     </>
    


 );} 

