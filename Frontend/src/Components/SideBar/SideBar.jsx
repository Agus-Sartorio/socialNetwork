import { StyledSideBar } from "./styles";
import Channels from '../Icons/Channels'
import { Link } from "react-router-dom";

export default function SideBar() {
    return (
        <StyledSideBar>
            <details>
                <summary className='canales'>Canales<Channels /></summary>
                <ul className='list'>
                    <li><Link to='/suggestions'><a href="#">Suggestions</a></Link></li>
                    <li><a href="#"># Canal 2</a></li>
                    <li><a href="#"># Canal 3</a></li>
                </ul>
            </details>
        </StyledSideBar>
    )
}