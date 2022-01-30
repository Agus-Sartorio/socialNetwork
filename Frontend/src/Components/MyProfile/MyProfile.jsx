import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyPost } from "../../actions";
import { format } from "timeago.js";
import { ModalMyFollowers } from "./ModalMyFollowers";
import { ModalFollows } from "./ModalMyFollows";
import { DivModal } from "./StyledMyProfile";

const MyProfile = ({ myProfile }) => {
  const myPost = useSelector((state) => state.myProfilePost);
  const preview = myProfile.data[0].profile.includes('uploads')
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyPost());
  }, [dispatch]);

  return (
    <>
      <div>
        <img src={preview?`https://dogskll.herokuapp.com/${myProfile.data[0].profile}` : myProfile.data[0].profile} alt={myProfile.data[0].fullname} />
        <h1>{myProfile.data[0].fullname}</h1>
        <DivModal>
          <ModalFollows />
          <ModalMyFollowers />
        </DivModal>
        {myPost.data?.length ? (
          myPost.data.map((p) => {
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

    </>
  )
}

export default MyProfile;
