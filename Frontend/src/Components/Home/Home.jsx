import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllPost, getCleanHome } from "../../actions";

import CrearPost from "../CrearPost/CrearPost";
import Layout from "../Layout/Layout";
import PostContainer from "../PostContainer/PostContainer";

export default function Home() {

    const posts = useSelector((state => state.allPost))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(AllPost());
        return () => {
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
