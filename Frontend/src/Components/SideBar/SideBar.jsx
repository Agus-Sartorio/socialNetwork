import { StyledSideBar } from "./styles";
import Channels from '../Icons/Channels'
import { Link } from "react-router-dom";
import { useState } from "react";
import Chevron from '../Icons/Chevron'
import { useUserAuth } from "../Context/UserContext";

export default function SideBar() {
    
    const { user, logOut} = useUserAuth()
    console.log(user)

    const handleLogOut = async() => {
        try{
           await logOut();

        }catch(error){
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
                    {user.displayName}
                    <span className={isuser && 'chevron'}><Chevron /></span>
                </button>
            </div>
            {
                isuser && open &&
                <div className='settings'>
                    <li><a href="#"># Perfil</a></li>
                    <li><button onClick={handleLogOut}>Cerrar sesion</button></li>
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