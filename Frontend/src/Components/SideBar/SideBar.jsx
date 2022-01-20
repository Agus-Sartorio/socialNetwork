import { StyledSideBar } from "./styles";
import Channels from '../Icons/Channels'

export default function SideBar() {
    return (
        <StyledSideBar>
            <details>
                <summary className='canales'>Canales<Channels /></summary>
                <ul className='list'>
                    <li><a href="#"># Canal 1</a></li>
                    <li><a href="#"># Canal 2</a></li>
                    <li><a href="#"># Canal 3</a></li>
                </ul>
            </details>
        </StyledSideBar>
    )
}