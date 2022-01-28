import React, { useEffect } from 'react';
import { getFollows } from "../../actions";
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';
/* import {Link} from 'react-router-dom'; */
import SideBar from '../SideBar/SideBar';
import { ContainerIndex } from './styledChats';
import Chats from './Chats.jsx';




export default function Chat() {

  const dispatch = useDispatch();
  const fallows = useSelector((state) => state.follows);
  useEffect(() => {
    dispatch(getFollows())
  }, [dispatch])

  const contactos = fallows.data;
  console.log(contactos, 'chats lo que mando')
  // useEffect(() => {
  //    dispatch(getFollows())
  //  }, [dispatch])
  return (

    <>

      <NavBar />

      <ContainerIndex>
        <SideBar />
        {contactos ? <Chats contactos={contactos} /> : <div>cargando...</div>}

      </ContainerIndex>






    </>



  );
}

