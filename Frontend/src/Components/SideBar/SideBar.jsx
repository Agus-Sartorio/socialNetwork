import { StyledSideBar } from "./styles";
import Channels from '../Icons/Channels'
import { Link } from "react-router-dom";
import { useState } from "react";
import Chevron from '../Icons/Chevron'

export default function SideBar() {

    const [user, setUser] = useState(false)

    const handleClick = () => {
        setUser(!user);
    }

    return (
        <StyledSideBar>
            <div className='user'>
                <button onClick={handleClick}>
                    <span className={user && 'chevron'}><Chevron /></span>
                    Nombre Apellido
                    <img src="https://img2.freepng.es/20180714/ro/kisspng-computer-icons-user-membership-vector-5b498fc76f2a07.4607730515315475914553.jpg" alt="" />
                </button>
            </div>
            {
                user &&
                <div className='settings'>
                    <li><a href="#"># Perfil</a></li>
                    <li><a href="#"># Cerrar Sesión</a></li>
                </div>
            }
            <details>
                <summary className='canales'>
                    <span><Chevron /></span>
                    Canales
                    <Channels />
                </summary>
                <ul className='list'>
                    <li><Link to='/suggestions'><a href="#">Suggestions</a></Link></li>
                    <li><a href="#"># Canal 2</a></li>
                    <li><a href="#"># Canal 3</a></li>
                </ul>
            </details>
        </StyledSideBar>
    )
}