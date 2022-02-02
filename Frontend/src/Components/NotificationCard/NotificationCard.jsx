import { StyledNotificationCard } from "./styles";
import { Link } from "react-router-dom";

export default function NotificationCard({id,content,name,icon}) {
    return (
        <StyledNotificationCard key={id}>
            <div className='icono'>
                <img src={process.env.REACT_APP_PUERTO+icon} alt="NotFound" />
            </div>
            <div className='texto'>
                <p>
                    <Link to={`/${content==='te empezo a seguir'?`profile/${id}`:'home'}`} className='div-click'>
                        <span className='link'></span>
                        <span className='user-name'>{name+' '}</span>{content}
                    </Link>
                </p>
            </div>
        </StyledNotificationCard>
    )
}