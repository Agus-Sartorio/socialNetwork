import {Messagenormal, MessageTop, MessageImg, MessageText} from './styledM'
import {useSelector } from 'react-redux';

export default function Message({own, persona, idother}) {

    const user = useSelector((state) => state.myProfileData);
    const fallows = useSelector((state) => state.follows);
    
    // console.log(user.data, "chat mio")
    console.log(own, "own")
    const mypersona = user.data.find((e)=>e.id === persona.Id )
    console.log(mypersona, 'mypersona');
    const otherpersona = fallows.data.find((e)=>e.id === persona.Id );
    console.log(otherpersona, 'other persona');
    if(otherpersona !== undefined) {console.log(otherpersona.profile.includes('uploads'), "tiene upluads?")
    console.log(`${process.env.REACT_APP_PUERTO}${otherpersona.profile}/ `, 'la ruta que muestra');}
 
  return (
      
      
      <>
      
        
        <Messagenormal className={own? 'mesaggeown' : null}>
      <MessageTop>
        <MessageImg
          
          src={own? user.data[0].profile : `https://dogskll.herokuapp.com/${otherpersona.profile}`}
          alt=""
        />
        <MessageText className='messagetextown'>{own? persona.mensaje: persona.mensaje}</MessageText>
      </MessageTop>
      <div className="messageBottom">1 hour ago</div>
      </Messagenormal>

   

      </>
      );
}