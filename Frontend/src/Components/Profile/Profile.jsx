import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  clearProfileState,
  getFollowUserById,
  getMyfriendsPost,
  getMyProfileData,
  getProfile,
} from "../../actions";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import CardProfile from "./CardProfile";
import { Container } from "./styledCardProfile";
import { format } from "timeago.js";

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const myProfile = useSelector((state) => state.myProfileData);
  const followUser = useSelector((state) => state.followUser);
  const myFrindsPost = useSelector((state) => state.myFriendsPost);


  useEffect(() => {
    dispatch(getProfile(id));
    dispatch(getFollowUserById(id));
    dispatch(getMyProfileData());
    dispatch(getMyfriendsPost(id))
    return () => {
      dispatch(clearProfileState());
    };
  }, [dispatch, id]);



  return (
    <div>
      <NavBar />
      <Container>
        <SideBar />
        {Object.keys(profile).length &&
        myProfile.data &&
        Object.keys(followUser).length ? (
          <div>
            <CardProfile
              profile={profile}
              myProfile={myProfile}
              followUser={followUser}
            />
          </div>
        ) : (
          <div>cargando...</div>
        )}
      </Container>
      <hr/>

      {myFrindsPost?.data?.length ? (
        myFrindsPost?.data?.map((p) => {
          return (
            <div key={p._id}>
              <img
                src={p.autorData?.[0]?.profile}
                alt="img not found"
                width={"30px"}
                height={"30px"}
              />

              <span>{p.autorData?.[0]?.fullname}</span>
              <hr />
              <span>{format(p.createdAt)}</span>
              <h1>{p.description}</h1>
              <button>Like</button>
            </div>
          );
        })
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
};

export default Profile;
