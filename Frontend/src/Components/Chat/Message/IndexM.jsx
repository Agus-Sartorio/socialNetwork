import {Messagenormal, MessageTop, MessageImg, MessageText} from './styledM'
import {useSelector } from 'react-redux';

export default function Message({own, persona}) {

    const user = useSelector((state) => state.myProfileData);
    const fallows = useSelector((state) => state.follows);
    
    // console.log(user.data, "chat mio")
    console.log(own, "own")
    const mypersona = user.data.find((e)=>e.id === persona.Id )
    console.log(mypersona, 'mypersona');
    const otherpersona = fallows.data.find((e)=>e.id === persona.Id );
    console.log(otherpersona, 'other persona');
 
  return (
      
      
      <>
      
        
        <Messagenormal className={own? 'mesaggeown' : null}>
      <MessageTop>
        <MessageImg
          
          src={own? user.data[0].profile : otherpersona.profile}
          alt=""
        />
        <MessageText className='messagetextown'>{own? persona.mensaje: persona.mensaje}</MessageText>
      </MessageTop>
      <div className="messageBottom">1 hour ago</div>
      </Messagenormal>

   

      </>
      );
}