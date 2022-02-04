import  LoaderFull  from '../Loader/LoaderFull';
import Post from '../Post/Post'
import { StyledPostContainer } from "./styles";

export default function PostContainer({ posts = [] }) {

    return (
        <StyledPostContainer>
            {posts.length ? posts.map((p) => <Post p={p} key={p._id} />) :
                <LoaderFull></LoaderFull>}
        </ StyledPostContainer>
    )
}