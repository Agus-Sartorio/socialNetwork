import {getMyProfileData} from "../../actions";
import { useDispatch, useSelector} from 'react-redux'
import React, { useState,useEffect } from 'react';
import EditProfile from './EditProfile';
import SideBar from "../SideBar/SideBar";
import NavBar from '../NavBar/NavBar'
import {
       Container2, SidebarContainer,

} from './Styled';

function Edit() {
  const dispatch = useDispatch();

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

