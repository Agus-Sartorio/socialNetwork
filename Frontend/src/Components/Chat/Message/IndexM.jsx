import {Messagenormal, MessageTop, MessageImg, MessageText} from './styledM'
import {useSelector } from 'react-redux';

export default function Message({own}) {

    const user = useSelector((state) => state.myProfileData);
    console.log(user.data, "chat mio")

  return (
      
      
      <>
      
        
        <Messagenormal className={own? 'mesaggeown' : null}>
      <MessageTop>
        <MessageImg
          
          src={user.data[0].profile}
          alt=""
        />
        <MessageText className='messagetextown'>Hola Mundo como estan, el power!!</MessageText>
      </MessageTop>
      <div className="messageBottom">1 hour ago</div>
      </Messagenormal>

   

      </>
      );
}