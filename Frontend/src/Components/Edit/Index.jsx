import React, {useState} from 'react';
import NavBar from '../NavBar/NavBar';
import Account from './Account';
import EditProfile from './EditProfile';
import SideBar from './SideBar';
// import ReactHover from 'react-hover';
// import { FormControl, FormLabel } from 'react-bootstrap';
import {GlobalStyle, Container2, SidebarContainer, 
      
      } from './Styled';

function Edit() {

  const [gstate, setgstate] = useState(true);
         
    return (
         
    <>
      
      <NavBar/>  
      <GlobalStyle/>
        <Container2>
           <SidebarContainer>
              <SideBar setgstate={setgstate}/>
           </SidebarContainer>
           {gstate? <EditProfile/> : <Account/>}
     </Container2>
      </>

    );} 

export default Edit;