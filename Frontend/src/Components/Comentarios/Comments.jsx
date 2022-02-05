import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

export default function Comments({ el }) {
  console.log(el, "coment");
  const myId = useSelector((state) => state.myPhoto);

  return (
    <>
      <div>
        <Link to={`/${myId.data.id === el.id ? "myprofile" : `profile/${el.id}`}`}>
          <img src={el.profile} alt="" width={"30px"} height={"30px"} />
            <p>{format(el.createdAt)}</p>
          <span>{el.fullname}</span>{" "}
        </Link>
        <span>{el.comentario}</span>
      </div>
    </>
  );
}
