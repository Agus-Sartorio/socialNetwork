import {Messagenormal, MessageTop, MessageImg, MessageText} from './styledM'
import {useSelector } from 'react-redux';

export default function Message({own,user,mensajes}) {

  // if(mensajes.Id !== undefined){
    // }
    // const fallows = useSelector((state) => state.follows);
    // const otherpersona = fallows.data.find((e)=>e.id === persona.Id );
    var userMe =user.data[0];
    console.log(userMe, "UserMe")
    console.log(mensajes.Id, "Id del mensaje")
    

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
          
          src={own? `${process.env.REACT_APP_PUERTO}${userMe.profile}` :  "https://images.ole.com.ar/2022/01/01/smOuc4YsP_340x340__1.jpg"}
          alt=""
        />
        <MessageText className='messagetextown'>{own? 'hola': 'hola como estas?'}</MessageText>
      </MessageTop>
      <div className="messageBottom">1 hour ago</div>
      </Messagenormal>

   

      </>
      );
}