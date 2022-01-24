import { StyledSideBar } from "./styles";
import Channels from '../Icons/Channels'
import { useState } from "react";
import Chevron from '../Icons/Chevron'
import { useUserAuth } from "../Context/UserContext";

export default function SideBar() {

    const { user, logOut } = useUserAuth()
    console.log(user)

    const handleLogOut = async () => {
        try {
            await logOut();

        } catch (error) {
            console.log(error.message)
        }
    }

    const [isuser, setIsUser] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
        if (isuser) setIsUser(false);
    }
    const handleClick = () => setIsUser(!isuser);

    return (
        <StyledSideBar className={open ? 'open' : undefined}>
            <button className={open ? 'open menu-button' : 'menu-button'} onClick={handleOpen}>
                <span className='menu-icon' />
                <span className='menu-icon2' />
            </button>
            <div className='user'>
                <button onClick={handleClick}>
                    <img src={user.photoURL} alt="" />
                    <p>{user.displayName}</p>
                    <span className={isuser && 'chevron'}><Chevron /></span>
                </button>
            </div>
            {
                isuser && open &&
                <div className='settings'>
                    <li><a href="#"># Perfil</a></li>
                    <button className='cerrar-sesion' onClick={handleLogOut}>
                        # Cerrar sesion
                    </button>
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