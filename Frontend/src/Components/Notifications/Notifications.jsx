import NotificationCard from "../NotificationCard/NotificationCard";
import { StyledNotifications } from "./styles";

export default function Notifications() {
    return (
        <StyledNotifications>
            <div className='container'>
                <div className="titulo">
                    <p>Notificaciones</p>
                    <button className='btn'>Limpiar todo</button>
                </div>
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
            </div>
        </StyledNotifications>
    )
}