import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  clearProfileState,
  getClean,
  getFollowUserById,
  getMyfriendsPost,
  getProfile,
  getMyId
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
  const followUser = useSelector((state) => state.followUser);
  const myFrindsPost = useSelector((state) => state.myFriendsPost);
  const myId = useSelector((state) => state.myId)


  useEffect(() => {
    dispatch(getProfile(id));
    dispatch(getFollowUserById(id));
    dispatch(getMyfriendsPost(id))
    dispatch(getMyId())
    return () => {
      dispatch(clearProfileState());
      dispatch(getClean())
    };
  }, [dispatch, id]);



  return (
    <div>
      <NavBar />
      <Container>
        <SideBar />
        {Object.keys(profile).length && Object.keys(myId).length ?
          <div>
            <CardProfile
              profile={profile}
              followUser={followUser}
              myId={myId}
            />
          </div>
          : <div>cargando...</div>
        }
      </Container>

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
              <span>{format(p?.createdAt)}</span>
              <h1>{p.description}</h1>
              <button>Like</button>
            </div>
          );
        })
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  )
}

export default Profile;
