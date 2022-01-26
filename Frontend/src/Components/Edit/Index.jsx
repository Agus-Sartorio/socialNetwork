import {getMyProfile,getUsers, getMyProfileData} from "../../actions";
import { useDispatch, useSelector} from 'react-redux'
import React, { useState,useEffect } from 'react';
import { useUserAuth } from "../Context/UserContext";
import Account from './Account';
import EditProfile from './EditProfile';
import SideBar from "../SideBar/SideBar";
//import SideBar from '../SideBar/SideBar;
import NavBar from '../NavBar/NavBar'
import {
      GlobalStyle, Container2, SidebarContainer,

} from './Styled';

function Edit() {
  const dispatch = useDispatch();
  // dispatch( getMyProfileData());
 
//   dispatch(getMyProfile())
  
  // const dispatch = useDispatch();
  useEffect(() => {
    dispatch( getMyProfileData())
 }, [dispatch])

  const [gstate, setgstate] = useState(true);       

    return (
         
    <>
      
      <NavBar/>  
        <Container2>
           <SidebarContainer>
              <SideBar setgstate={setgstate}/>
           </SidebarContainer>
           <EditProfile/> 
     </Container2>
      </>

    );} 

export default Edit;

