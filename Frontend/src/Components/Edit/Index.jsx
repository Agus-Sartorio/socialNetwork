import { getMyProfileData } from "../../actions";
import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react';
import EditProfile from './EditProfile';
import SideBar from "../SideBar/SideBar";
import NavBar from '../NavBar/NavBar'
import {
  Container2, SidebarContainer,

} from './Styled';

function Edit() {
  const dispatch = useDispatch();
  const userk = useSelector((state) => state.myProfileData)
  useEffect(() => {
    dispatch(getMyProfileData())
  }, [dispatch])

  const [, setgstate] = useState(true);

  return (

    <>

      <NavBar />
      <Container2>
        <SidebarContainer>
          <SideBar setgstate={setgstate} />
        </SidebarContainer>
        {userk.data? <EditProfile userk={userk}/>:<div>cargando...</div>}
       
      </Container2>
    </>

  );
}

export default Edit;

