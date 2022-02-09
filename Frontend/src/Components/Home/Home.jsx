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

  return fastProfile?.data?.state === true ? (
    <Layout>
      <CrearPost />
      {follows?.length || posts?.length ? (
        <PostContainer posts={posts} />
      ) : (
        <LoaderFull/>
      )}
    </Layout>
  ) : (
    <Layout>
      <div>tu perfil se encuentra bloqueado temporalmente</div>
    </Layout>
  );
}
