import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { StyledPost } from "./styles";
import Experience from "../Icons/Experience";
import CommentBubble from "../Icons/CommentBubble";
import Share from "../Icons/Share";
import DefaultUser from "../Icons/DefaultUser";
import { useSelector } from "react-redux";
import axios from "axios";
import { tokenUsuario } from "../../actions/actionTypes";
import { useState } from "react";
import Likes from "../Likes/Likes";
import CommentsContainer from "../Comentarios/CommentsContainer";

export default function Post({ p }) {
  const preview = p.autorData[0]?.profile.includes("uploads");
  const id = useSelector((state) => state.myPhoto);

  const [like, setLike] = useState(0);
  const [showLikes, setShowLikes] = useState(false);

  const [showComments, setShowComments] = useState(false);

  const handleComments = () => setShowComments(!showComments);

  const handleLikes = () => setShowLikes(true);
  const idpost = { idpost: p._id };

  async function likeDislike() {
    try {
      if (p.likes.map((el) => el.id).includes(id.data.id)) {
        await axios.put(
          `${process.env.REACT_APP_PUERTO}posts/likes`,
          idpost,
          tokenUsuario()
        );
        like === 0 ? setLike(-1) : setLike(0);
      } else {
        await axios.put(
          `${process.env.REACT_APP_PUERTO}posts/likes`,
          idpost,
          tokenUsuario()
        );
        like === 1 ? setLike(0) : setLike(1);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <StyledPost className="post">
        <Link
          className="post__link"
          to={`/${
            id.data.id === p.autorData[0].id
              ? "myprofile"
              : `profile/${p.autorData[0].id}`
          }`}
        >
          {p.autorData[0]?.profile ? (
            <img
              className="post__avatar"
              src={
                preview
                  ? `${process.env.REACT_APP_PUERTO}${p.autorData[0]?.profile}`
                  : p.autorData[0]?.profile
              }
              alt={p.autorData[0]?.fullname}
            />
          ) : (
            <DefaultUser className="post__avatar" />
          )}
        </Link>
        <div className="post__info">
          <header className="post__header">
            <p className="post__fullname">
              <Link
                to={`/${
                  id.data.id === p.autorData[0].id
                    ? "myprofile"
                    : `profile/${p.autorData[0].id}`
                }`}
              >
                {p.autorData[0]?.fullname}
              </Link>
            </p>
            <p className="post__date">{format(p?.createdAt)}</p>
          </header>
          <p className="post__description">{p.description}</p>
          <footer className="post__footer">
            <div className="post__stats">
              <button onClick={handleLikes} className="post__likes stats">
                <Experience />
                {p.likes.length + like}
              </button>
              <button onClick={handleComments} className="post__comments stats">
                <CommentBubble /> {p.comentarios.length}
              </button>
            </div>
            <div className="post__btns">
              <button className="post__btn share">
                <Share />
                <span>Compartir</span>
              </button>
              <button className="post__btn comment">
                <CommentBubble />
                <span>Comentar</span>
              </button>
              <button className="post__btn like" onClick={likeDislike}>
                <Experience />
                <span>Me Gusta</span>
              </button>
            </div>
          </footer>
          {showComments && <CommentsContainer post={p} />}
        </div>
        {showLikes && <Likes setShowLikes={setShowLikes} p={p} />}
      </StyledPost>
    </>
  );
}
