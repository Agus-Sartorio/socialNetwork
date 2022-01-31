import React, { useEffect } from 'react';
import {Messagenormal, MessageTop, MessageImg, MessageText} from './styledM'
import {useSelector, useDispatch } from 'react-redux';
import { getProfile } from "../../../actions";

export default function Message({own,user,mensajes,idCont}) {
    
  const dispatch = useDispatch();

  // if(idCont !== undefined){console.log(idCont,'llega el id contacnto??')}

  useEffect(() => {
    dispatch(getProfile(idCont))
  }, [dispatch])  
  
  const contact = useSelector((state) => state.profile);
  // if(contact !== undefined){ console.log(contact, 'llega el contacto')}

  
  if (user.data[0] !== undefined){var userMe =user.data[0];
    
    

  }

  // if(mensajes.Id !== undefined){  profile
    // } getProfile
    // const fallows = useSelector((state) => state.follows);
    // const otherpersona = fallows.data.find((e)=>e.id === persona.Id );
      // console.log(mensajes.Id, "Id del mensaje")
    // console.log(contact, "mensajes")
    // console.log(contact.profile, "foto")
    
    // const mypersona = user.data.find((e)=>e.id === persona.Id )
    // console.log(mypersona, 'mypersona');
    // if(otherpersona !== undefined) {console.log(otherpersona.profile.includes('uploads'), "tiene upluads?")
    // console.log(`${process.env.REACT_APP_PUERTO}${otherpersona.profile}/ `, 'la ruta que muestra');}
    //`${process.env.REACT_APP_PUERTO}${otherpersona.profile}`

  return (
      
      
      <>
      
        
        <Messagenormal className={own? 'mesaggeown' : null}>
      <MessageTop>
        <MessageImg
          
          src={own? userMe.profile.includes('uploads')?`${process.env.REACT_APP_PUERTO}${userMe.profile}` :<></>: `${process.env.REACT_APP_PUERTO}${userMe.profile}`}
          alt=""
        />
        <MessageText className='messagetextown'>{own? mensajes.mensaje : mensajes.mensaje}</MessageText>
      </MessageTop>
      <div className="messageBottom">1 hour ago</div>
      </Messagenormal>

   

      </>
      );
}