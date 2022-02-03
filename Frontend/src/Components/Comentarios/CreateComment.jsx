import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateComment } from "../../actions";

export default function Comments({ p }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    comentario: "",
  });
  const payload = {comentario: input.comentario , idpost: p._id}
  
  function submitHandler(e) {
    e.preventDefault();
    dispatch(CreateComment(payload));
    alert("se creo el comentario");
    setInput({
      comentario: ""
    });
    window.location.reload();
  }
  
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
   
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Haz un comentario"
        type="text"
        value={input.comentario}
        name='comentario'
        onChange={handleChange}
      />

      <button type="submit">comentar</button>
    </form>
  );
}
