import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllPost, getCleanHome, getFollows, getMyId } from "../../actions";
import CrearPost from "../CrearPost/CrearPost";
import Layout from "../Layout/Layout";
import LoaderFull from "../Loader/LoaderFull";
import PostContainer from "../PostContainer/PostContainer";


export default function Home() {
    const posts = useSelector((state) => state.allPost);

    const follows = useSelector((state) => state.follows);
    const fastProfile = useSelector((state) => state.myPhoto);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(AllPost());
        dispatch(getFollows());
        return () => {
            dispatch(getMyId()); // !!no tocar please
            dispatch(getCleanHome());
        };
    }, [dispatch]);

    return (
        <Layout>
            {fastProfile?.data?.state === true ?
            <CrearPost />:<div>Su cuenta esta bloqueada consulte <a href="https://policies.google.com/terms?hl=es">aqui</a> los terminos y condiciones</div>}
            {follows?.length || posts?.length ? (
                <PostContainer posts={posts} />
            ) : (
                <LoaderFull />
            )}
        </Layout>
    )
}
