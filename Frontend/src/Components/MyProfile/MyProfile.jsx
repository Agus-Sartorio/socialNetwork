import { ModalMyFollow } from "./ModalMyFollow";
import { DivModal } from "./StyledMyProfile";
import PostContainer from '../PostContainer/PostContainer'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMyPost } from "../../actions";

const MyProfile = ({ myProfile }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMyPost());
  }, [dispatch]);

  const posts = useSelector((state => state.myProfilePost.data))
  const follows = useSelector((state) => state.follows)
  const followers = useSelector((state) => state.followers)
  const preview = myProfile.data[0].profile.includes('uploads')

  return (
    <>
      <img src={preview ? `${process.env.REACT_APP_PUERTO}${myProfile.data[0].profile}` : myProfile.data[0].profile} alt={myProfile.data[0].fullname} width='250' height='250' />
      <h1>{myProfile.data[0].fullname}</h1>
      <DivModal>
        <ModalMyFollow follow={followers} action={'Seguidores'} />
        <ModalMyFollow follow={follows} action={'Siguiendo'} />
      </DivModal>
      <PostContainer posts={posts} />
    </>
  )
}

export default MyProfile;
