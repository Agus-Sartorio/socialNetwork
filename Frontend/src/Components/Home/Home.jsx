
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import { Conatiner} from "./Styled";
import Welcome from "./Welcome";


export default function Home() {
    return (
        <>
            <NavBar />
            <Conatiner>
            <SideBar />
            <Welcome/>
            </Conatiner>
        </>
    )
}