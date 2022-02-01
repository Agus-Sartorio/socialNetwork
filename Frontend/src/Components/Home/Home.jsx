import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllPost, getMyId} from "../../actions";
import CrearPost from "../CrearPost/CrearPost";
import Layout from '../Layout/Layout'
import PostContainer from "../PostContainer/PostContainer";
import  io  from 'socket.io-client';

export default function Home() {
   
    // const [socket, setSocket] = useState(null);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(AllPost());
        dispatch(getMyId())
    }, [dispatch]);

    const posts = useSelector((state => state.allPost))


    useEffect(()=>{
        io(`${process.env.REACT_APP_PUERTO}`)
      },[])

    return (
        <Layout>
            <CrearPost />
            <PostContainer posts={posts} />
        </Layout>
    )
}