import { StyledNotificationCard } from "./styles";
import Like from '../Icons/Like'
import { Link } from "react-router-dom";

export default function NotificationCard() {
    return (
        <StyledNotificationCard>
            <div className='icono'>
                <Like />
            </div>
            <div className='texto'>
                <p>
                    <Link to='' className='div-click'>
                        <span className='link'></span>
                        <span className='user-name'>Agustin</span> le ha dado like a tu publicación
                    </Link>
                </p>

            </div>
        </StyledNotificationCard>
    )
}