import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Comments({ el }) {
  console.log(el, "coment");
  const myId = useSelector((state) => state.myId);

  return (
    <>
      <div>
        <Link to={`/${myId.id === el.id ? "myprofile" : `profile/${el.id}`}`}>
          <img src={el.profile} alt="" width={"30px"} height={"30px"} />
          <span>{el.fullname}</span>{" "}
        </Link>
        <span>{el.comentario}</span>
      </div>
    </>
  );
}
