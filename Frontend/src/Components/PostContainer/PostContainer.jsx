import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllPost } from "../../actions";
import Post from '../Post/Post'
import { StyledPostContainer } from "./styles";

export default function PostContainer() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(AllPost());
    }, [dispatch])

    const post = useSelector((state => state.allPost))
    console.log(post, 'allpoststate')


    return (
        <StyledPostContainer>
            {post?.length ? post.map((p) => <Post p={p} key={p._id} />) :
                <div>Cargando...</div>}
        </ StyledPostContainer>
    )
}