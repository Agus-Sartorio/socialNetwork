import { StyledSideBar } from "./styles";
import Settings from '../Icons/Settings'


export default function SideBar({setgstate}) {
     
    const toeditprofile = () => {
        setgstate(true)
        };
      

      const toaccount = () => {
        setgstate(false)
        };
      
    return (
        <StyledSideBar>
            <details>
                <summary className='canales'><Settings/>  Settings Acounnt</summary>
                <ul className='list'>
                    <li><a href='#' onClick={toeditprofile}>Edit Profile</a></li>
                    <li><a href='#' onClick={toaccount}>Acounnt</a></li>
                   
                </ul>
            </details>
        </StyledSideBar>
    )
}