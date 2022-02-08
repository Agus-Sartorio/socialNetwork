import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearAllUsers, getAllUsers } from "../../../actions"
import Layout from "../../Layout/Layout"
import LoaderFull from "../../Loader/LoaderFull"
import CardAllUsers from "./CardsAllUsers"

export const BlockAccount = () => {
    const dispatch = useDispatch()
    const allUsers = useSelector((state)=>state.allUsers)

    
    useEffect(() => {
        dispatch(getAllUsers());
        return () => {
            dispatch(clearAllUsers())
          }
    }, [dispatch]);
    return(
        <Layout>
            {allUsers.data?.length? allUsers.data.map(e => <CardAllUsers users={e}/>):<LoaderFull/>}
            
        </Layout>
    )
}