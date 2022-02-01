import React from 'react';
import {Messagenormal, MessageTop, MessageImg, MessageText} from './styledM'
//import { useDispatch } from 'react-redux';
//import { getProfile } from "../../../actions";

export default function Message({own,user,mensajes,contact}) {
    
  // const dispatch = useDispatch();

  // if(idCont !== undefined){console.log(idCont,'llega el id contacnto??')}

  // useEffect(() => {
  //   dispatch(getProfile(idCont))
  // }, [dispatch])  
  
  // const contact = useSelector((state) => state.profile);
  // if(contact !== undefined){ console.log(contact, 'llega el contacto')}

  let profileUser = ''; 
  if (user.data.length !== 0){
    
    var userMe =user.data[0];
    console.log(userMe, 'mi usuario')

    if(userMe.profile.includes('uploads') === true){

       profileUser = `${process.env.REACT_APP_PUERTO}${userMe.profile}`
      }
    
    else {

      profileUser=userMe.profile
    }
    
    }
     


   let profileContact = ''; 
   if(contact.length !== 0){

     console.log(contact, 'el otro usuario');
     if(contact.profile.includes('uploads') === true){
  
         profileContact= `${process.env.REACT_APP_PUERTO}${contact.profile}`;
     }
   
      else{
         
        profileContact=contact.profile;

      }
   
    }   
    
 
    // if (contact !== undefined){console.log(contact,'contanto en indexM')}
    //userMe.profile.includes('uploads')?
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
          
          src={own? `${profileUser}` : `${profileContact}`}
          alt=""
        />
        <MessageText className='messagetextown'>{own? mensajes.mensaje : mensajes.mensaje}</MessageText>
      </MessageTop>
      <div className="messageBottom">1 hour ago</div>
      </Messagenormal>

   

      </>
      );
}