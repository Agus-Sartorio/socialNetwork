import { useEffect, useRef } from "react";
import NotificationCard from "../NotificationCard/NotificationCard";
import { StyledNotifications, StyledOverflow } from "./styles";

export default function Notifications({ setOpen }) {

    const overlay = useRef();
    const event = (e) => {
        if (e.key === 'Escape') {
            setOpen(false);
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', event)
        return () => {
            window.removeEventListener('keydown', event)
        }
    }, [])

    const handleOverlayClick = (e) => {
        if (e.target === overlay.current) {
            setOpen(false);
        }
    }

    return (
        <StyledOverflow ref={overlay} onClick={handleOverlayClick}>
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
        </StyledOverflow>
    )
}