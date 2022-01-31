import { ModalMyFollowers } from "./ModalMyFollowers";
import { ModalFollows } from "./ModalMyFollows";
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

  const preview = myProfile.data[0].profile.includes('uploads')

  return (
    <>
      <img src={preview ? `${process.env.REACT_APP_PUERTO}${myProfile.data[0].profile}` : myProfile.data[0].profile} alt={myProfile.data[0].fullname} width='250' height='250' />
      <h1>{myProfile.data[0].fullname}</h1>
      <DivModal>
        <ModalFollows />
        <ModalMyFollowers />
      </DivModal>
      <PostContainer posts={posts} />
    </>
  )
}

export default MyProfile;
