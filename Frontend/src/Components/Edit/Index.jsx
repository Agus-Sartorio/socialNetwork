import React, {useState} from 'react';
import Account from './Account';
import EditProfile from './EditProfile';
<<<<<<< HEAD
import SideBar from './SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
>>>>>>> 92d6a929b0e08f5fed968b756697db286dee31a5
// import ReactHover from 'react-hover';
// import { FormControl, FormLabel } from 'react-bootstrap';
import {GlobalStyle, Container2, SidebarContainer, 
      
      } from './Styled';

function Edit() {

  const [gstate, setgstate] = useState(true);
         
    return (
         
    <>
      
<<<<<<< HEAD
      <NavBar/>  
=======
      <NavBar />
      <GlobalStyle/>
>>>>>>> 92d6a929b0e08f5fed968b756697db286dee31a5
        <Container2>
           <SidebarContainer>
              <SideBar setgstate={setgstate}/>
           </SidebarContainer>
           {gstate? <EditProfile/> : <Account/>}
     </Container2>
      </>

    );} 

export default Edit;

