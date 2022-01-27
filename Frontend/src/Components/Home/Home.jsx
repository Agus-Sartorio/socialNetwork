import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";


export default function Home() {
    return (
        <>
            <NavBar />
            <div className='main'>
                <SideBar />
            </div>
        </>
    )
}