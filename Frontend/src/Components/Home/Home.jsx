import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllPost, getCleanHome, getFollows, getMyId } from "../../actions";


import CrearPost from "../CrearPost/CrearPost";
import Layout from "../Layout/Layout";
import PostContainer from "../PostContainer/PostContainer";

export default function Home() {

    const posts = useSelector((state => state.allPost))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(AllPost());
        dispatch(getFollows())
        return () => {
            dispatch(getMyId()) // !!no tocar please
            dispatch(getCleanHome())
          }
    }, [dispatch]);

    


    return (
        <Layout>
            <CrearPost />
         
                
              
                 <PostContainer posts={posts} /> 
              
                 
          
            
        </Layout>
    )
}
