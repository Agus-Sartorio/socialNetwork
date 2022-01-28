import { Link } from 'react-router-dom'
import logo from '../../images/LogoHenry.svg';
import SearchBar from '../SearchBar/SearchBar'
import { StyledDiv } from './styles'
import Email from '../Icons/Email'
import Bell from '../Icons/Bell'
import Experience from '../Icons/Experience'
import { useState } from 'react';
import Notifications from '../Notifications/Notifications';
import { motion } from "framer-motion"

export default function NavBar() {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <StyledDiv>
            <div className='div-1'>
                <p className='app-title'>
                    <Link to='/home'><span className='title-text'>HENRY NETWORK</span><img src={logo} alt="" /></Link>
                </p>
                <SearchBar />
            </div>
            <div className="botones">
                <Link to='#' className='link'>
                    {
                        !open &&
                        <span className='nav-hover'>Mensajes</span>
                    }
                    <Email />
                </Link>
                <div className='open'>
                    <button onClick={handleClick}>
                        {
                            !open &&
                            <span className='nav-hover'>Notificaciones</span>
                        }
                        <Bell />
                    </button>
                    {
                        open &&
                        <motion.div
                            className='motion'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Notifications
                                setOpen={setOpen}
                            />
                        </motion.div>
                    }
                </div>
                <Link to='#' className='link'>
                    {
                        !open &&
                        <span className='nav-hover'>Experiencias</span>
                    }
                    <Experience />
                </Link>
            </div>
        </StyledDiv>
    )
}