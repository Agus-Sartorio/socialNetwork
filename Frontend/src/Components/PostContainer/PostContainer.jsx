import Post from '../Post/Post'
import { StyledPostContainer } from "./styles";

export default function PostContainer({ posts = [] }) {
    console.log(posts)

    return (
        <StyledPostContainer>
            {posts.length ? posts.map((p) => <Post p={p} key={p._id} />) :
                <div>Cargando...</div>}
        </ StyledPostContainer>
    )
}