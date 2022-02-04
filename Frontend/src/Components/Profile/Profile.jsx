import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  clearProfileState,
  getFollowUserById,
  getMyfriendsPost,
  getProfile,
  getMyId,
  getCleanFriends,
} from "../../actions";
import CardProfile from "./CardProfile";
import Layout from "../Layout/Layout";
import PostContainer from "../PostContainer/PostContainer";
import { Loader } from "../Loader/Loader";

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const followUser = useSelector((state) => state.followUser);
  const myFriendPost = useSelector((state) => state.myFriendsPost.data);
  const myId = useSelector((state) => state.myId);

  useEffect(() => {
    dispatch(getProfile(id));
    dispatch(getFollowUserById(id));
    dispatch(getMyfriendsPost(id));
    dispatch(getMyId());
    return () => {
      dispatch(clearProfileState());
      dispatch(getCleanFriends());
    };
  }, [dispatch, id]);

  return (
    <Layout>
      {Object.keys(profile).length && Object.keys(myId).length ? (
        <CardProfile profile={profile} followUser={followUser} myId={myId} />
      ) : (
        <Loader></Loader>
      )}
      <PostContainer posts={myFriendPost} />
    </Layout>
  );
};

export default Profile;
