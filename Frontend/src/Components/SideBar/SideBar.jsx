import { StyledSideBar } from "./styles";
import Channels from '../Icons/Channels'
import { useState } from "react";
import Chevron from '../Icons/Chevron'

export default function SideBar() {

    const [user, setUser] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
        if (user) setUser(false);
    }
    const handleClick = () => setUser(!user);

    return (
        <StyledSideBar className={open ? 'open' : undefined}>
            <button className={open ? 'open menu-button' : 'menu-button'} onClick={handleOpen}>
                <span className='menu-icon' />
                <span className='menu-icon2' />
            </button>
            <div className='user'>
                <button onClick={handleClick}>
                    <img src="https://img2.freepng.es/20180714/ro/kisspng-computer-icons-user-membership-vector-5b498fc76f2a07.4607730515315475914553.jpg" alt="" />
                    Juan Manuel
                    <span className={user && 'chevron'}><Chevron /></span>
                </button>
            </div>
            {
                user && open &&
                <div className='settings'>
                    <li><a href="#"># Perfil</a></li>
                    <li><a href="#"># Cerrar Sesión</a></li>
                </div>
            }
            <details open={open === false && undefined}>
                <summary className='canales'>
                    <Channels />
                    Canales
                    <span><Chevron /></span>
                </summary>
                {
                    open &&
                    <ul className='list'>
                        <li><a href="#"># Canal 1</a></li>
                        <li><a href="#"># Canal 2</a></li>
                        <li><a href="#"># Canal 3</a></li>
                    </ul>
                }
            </details>
        </StyledSideBar>
    )
}