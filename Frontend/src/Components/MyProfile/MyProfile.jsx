import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyPost } from "../../actions";
import { CardFollow } from "./CardFollow";
import { StyledModal } from "./StyledMyProfile";
import { format } from "timeago.js";

const MyProfile = ({ myProfile }) => {
  const [isPopOpen, setIsPosOpen] = useState(false);
  const [isPopOpen2, setIsPosOpen2] = useState(false);
  const follows = useSelector((state) => state.follows);
  const followers = useSelector((state) => state.followers);
  const myPost = useSelector((state) => state.myProfilePost);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyPost());
  }, [dispatch]);



  return (
    <>
      <div>
        <img src={myProfile.data[0].profile} alt="imagen de usuario" />
        <h1>{myProfile.data[0].fullname}</h1>
      </div>
      <div className="App">
        <header className="App-header">
          <span
            style={{
              display: "flex",
              margin: "5rem",
              cursor: "pointer",
            }}
            onClick={() => setIsPosOpen(!isPopOpen)}
          >
            {myProfile.data[0].follow.followers.length} seguidores
          </span>
          <StyledModal show={isPopOpen} handleClose={() => setIsPosOpen(false)}>
            <div style={{ color: "black" }}>
              {followers.data ? (
                followers.data.map((e) => (
                  <CardFollow
                    fullname={e.fullname}
                    email={e.email}
                    profile={e.profile}
                    id={e.id}
                    key={e.id}
                  />
                ))
              ) : (
                <div>cargando</div>
              )}
            </div>
          </StyledModal>

          <span
            style={{
              display: "flex",
              margin: "5rem",
              cursor: "pointer",
            }}
            onClick={() => setIsPosOpen2(!isPopOpen2)}
          >
            {myProfile.data[0].follow.follows.length} siguiendo
          </span>
          <StyledModal
            show={isPopOpen2}
            handleClose={() => setIsPosOpen2(false)}
          >
            <div style={{ color: "black" }}>
              {follows.data ? (
                follows.data.map((e) => (
                  <CardFollow
                    fullname={e.fullname}
                    email={e.email}
                    profile={e.profile}
                    id={e.id}
                    key={e.id}
                  />
                ))
              ) : (
                <div>cargando</div>
              )}
            </div>
          </StyledModal>
        </header>
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
    </>
  );
};

export default MyProfile;
