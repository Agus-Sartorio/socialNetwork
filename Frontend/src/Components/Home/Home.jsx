import CrearPost from "../CrearPost/CrearPost";
import Layout from '../Layout/Layout'
import PostContainer from "../PostContainer/PostContainer";

export default function Home() {
    return (
        <Layout>
            <CrearPost />
            <PostContainer />
        </Layout>
    )
}