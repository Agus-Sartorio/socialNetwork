import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllPost, getCleanHome } from "../../actions";
import useNearScreen from "../../Hooks/useNearScreen";
import CrearPost from "../CrearPost/CrearPost";
import Layout from "../Layout/Layout";
import PostContainer from "../PostContainer/PostContainer";
import debounce from 'just-debounce-it';
export default function Home() {

    const posts = useSelector((state => state.allPost))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(AllPost());
        return () => {
            dispatch(getCleanHome())
          }
    }, [dispatch]);
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
        () => setPostsPerPage(postsPerPage + 10), 500
      ), [postsPerPage])
  
      useEffect(function () {
        if (isNearScreen) debounceHandleNextPage()
      }, [debounceHandleNextPage, isNearScreen])
    


    return (
        <Layout>
            <CrearPost />
            {posts.length?
            <PostContainer posts={currentPosts} />:<div>cargando</div>}
            {postsPerPage >= posts.length? null:
            <div id="visor" ref={externalRef}>te observo</div>}
        </Layout>
    )
}
