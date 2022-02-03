import axios from "axios";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { clearNotifications } from "../../actions";
import { tokenUsuario } from "../../actions/actionTypes";
import NotificationCard from "../NotificationCard/NotificationCard";
import { StyledNotifications, StyledOverflow } from "./styles";

export default function Notifications({ setOpen, notifications }) {
    const dispatch = useDispatch()
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
    })

    const handleOverlayClick = (e) => {
        if (e.target === overlay.current) {
            setOpen(false);
        }
    }
    async function deleteAll(e) {
        e.preventDefault()
        try {
            await axios.delete(`${process.env.REACT_APP_PUERTO}usuarios/notifications/`, tokenUsuario())
            dispatch(clearNotifications())
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <StyledOverflow ref={overlay} onClick={handleOverlayClick} />
            <StyledNotifications>
                <div className='container'>
                    <div className="titulo">
                        <p>Notificaciones</p>
                        <button className='btn' onClick={deleteAll}>Limpiar todo</button>
                    </div>
                    {notifications.notifications?.length ? notifications.notifications.map(e =>
                        <NotificationCard
                            id={e.id}
                            content={e.content}
                            name={e.name}
                            icon={e.icon} />) : <div>no tienes notificaciones</div>}
                </div>
            </StyledNotifications>
        </>
    )
}