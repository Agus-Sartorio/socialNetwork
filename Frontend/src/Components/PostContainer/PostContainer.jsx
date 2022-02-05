import debounce from 'just-debounce-it';
import { useCallback, useEffect, useRef, useState } from 'react';
import useNearScreen from '../../Hooks/useNearScreen';
import  LoaderFull  from '../Loader/LoaderFull';
import Post from '../Post/Post'
import { StyledPostContainer } from "./styles";

export default function PostContainer({ posts = [] }) {
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [currentPage] = useState(1);

    let lastPostInpage = currentPage * postsPerPage;
    let firstPostInpage = lastPostInpage - postsPerPage
    let currentPosts = posts?.slice(firstPostInpage, lastPostInpage)
    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({
        externalRef: !posts.length ? null : externalRef,
        once: false
      })
    const debounceHandleNextPage = useCallback(debounce(
        () => setPostsPerPage(postsPerPage + 3), 700
      ), [postsPerPage])
  
      useEffect(function () {
        if (isNearScreen) debounceHandleNextPage()
      }, [debounceHandleNextPage, isNearScreen])

    return (
        <StyledPostContainer>
            {posts.length ? currentPosts.map((p) => <Post p={p} key={p._id} />) :
                <LoaderFull></LoaderFull>}
                  {postsPerPage >= posts.length? null:
            <div className='visor' id="visor" ref={externalRef}>cargando...</div>}
        </ StyledPostContainer>
    )
}