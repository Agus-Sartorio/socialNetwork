import { useUserAuth } from "../Context/UserContext";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";


export default function Home() {
    const { user, logOut } = useUserAuth()
    console.log(user)

    const handleLogOut = async () => {
        try {
            await logOut();

        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <>
            <NavBar />
            <SideBar />
            <button onClick={handleLogOut}>logout</button>

        </>
    )
}