import { Link } from 'react-router-dom'
import logo from '../../images/LogoHenry.svg';
import SearchBar from '../SearchBar/SearchBar'
import { StyledDiv } from './styles'
import Email from '../Icons/Email'
import Bell from '../Icons/Bell'
import Experience from '../Icons/Experience'

export default function NavBar() {
    return (
        <StyledDiv>
            <div>
                <p>HENRY NETWORK</p>
                <img src={logo} alt="" />
            </div>
            <div>
                <SearchBar />
            </div>
            <div className="botones">
                <Link to='#' className='link'>
                    <span>Mensajes</span>
                    <Email />
                </Link>
                <button>
                    <span>Notificaciones</span>
                    <Bell />
                </button>
                <Link to='#' className='link'>
                    <span>Experiencias</span>
                    <Experience />
                </Link>
            </div>
        </StyledDiv>
    )
}