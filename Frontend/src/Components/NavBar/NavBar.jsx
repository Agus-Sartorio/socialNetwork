import { Link } from 'react-router-dom'
import logo from '../../images/LogoHenry.svg';
import SearchBar from '../SearchBar/SearchBar'
import { StyledDiv } from './styles'

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
                    <i className="fas fa-envelope"></i>
                </Link>
                <button>
                    <span>Notificaciones</span>
                    <i className="fas fa-bell"></i>
                </button>
            </div>
        </StyledDiv>
    )
}