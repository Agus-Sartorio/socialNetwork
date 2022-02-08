import React, { useEffect, useState } from "react";
import { StyledForm } from "../CrearPost/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  AllPost,
  CreatePost,
  getCleanHome,
  getExperiencesPosts,
  getMyId,
  getMyPhoto,
} from "../../actions";
import Upload from "../Icons/Upload";
import { Link } from "react-router-dom";

export default function CrearExperience() {
  const dispatch = useDispatch();

  const myPhoto = useSelector((state) => state.myPhoto);
  useEffect(() => {
    dispatch(getMyPhoto());
    dispatch(getExperiencesPosts());
    return () => {
      dispatch(getMyId()); // !!no tocar please
      dispatch(getCleanHome());
    };
  }, [dispatch]);

  const [input, setInput] = useState({
    description: "",
    tags: [],
  });
  const [file, setFile] = useState([]);
  const [view, setView] = useState([]);

  function handleSelect(e) {
    if (input.tags.length <= 1) {
      setInput({
        ...input,
        tags: [...input.tags, [e.target.value]],
      });
    } else {
      return null;
    }
    console.log(input.tags.length, "length");
  }

  function handleChange(e) {
    const isEmpty = /^\s/.test(e.target.value);
    setInput({
      ...input,
      [e.target.name]: isEmpty ? "" : e.target.value,
    });
  }
  const extraerBase64 = async ($event) =>
    new Promise((resolve) => {
      try {
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = (error) => {
          resolve({
            base: null,
          });
        };
      } catch (e) {
        return null;
      }
    });
  function submitHandler(e) {
    e.preventDefault();
    let data = new FormData();

    file.forEach((f) => {
      data.append("image", f);
    });

    data.append("description", input.description);
    data.append("tags", input.tags);
    dispatch(CreatePost(data));
    alert("se creo el post");
    setInput({
      description: "",
    });
    window.location.reload();
  }
  const handleFile = async (e) => {
    setFile((file) => [...file, e.target.files[0]]);
    let img = await extraerBase64(e.target.files[0]);
    setView((view) => [...view, img]);
    console.log(view);
  };
  const handleBorrar = (el) => {
    setInput({
      ...input,
      tags: input.tags.filter((e) => e !== el),
    });
  };
  return (
    <StyledForm
      className={input.description ? "expanded" : undefined}
      onSubmit={submitHandler}
    >
      <div className="img-post">
        <Link to={"/myprofile"}>
          <img
            className="user-img"
            src={
              myPhoto
                ? myPhoto.data?.profile[0] === "u"
                  ? process.env.REACT_APP_PUERTO + myPhoto.data?.profile
                  : myPhoto.data?.profile
                : "https://static2.elnortedecastilla.es/www/pre2017/multimedia/noticias/201501/12/media/cortadas/facebook-profile-picture-no-pic-avatar--575x323.jpg"
            }
            alt=""
            width={"20px"}
            height={"20px"}
          />
        </Link>
        <textarea
          className="textarea"
          placeholder={
            myPhoto?.data?.fullname.split(" ")[0] +
            " cuentanos tu experiencia para asi ayudar a otros henrys "
          }
          name="description"
          value={input.description}
          required
          onChange={handleChange}
        />
      </div>
    
      <label htmlFor="tags">Tags</label>
      <select required onChange={(e) => handleSelect(e)}>
        <option value="" selected disabled hidden>
          selecciona solo un tag
        </option>
        <option>#M1</option>
        <option>#M2</option>
        <option>#M3</option>
        <option>#M4</option>
        <option>#ProyectoIndividual</option>
        <option>#ProyectoGrupal</option>
      </select>
      <ul>
        <li>
          {input.tags?.map((el) => (
            <button type="button" key={el} onClick={() => handleBorrar(el)}>
              <li key={el.id}>{el}</li>
            </button>
          ))}
        </li>
      </ul>
      <button
        className="btn-submit"
        disabled={input.description ? undefined : true}
        type="submit"
      >
        Compartir
      </button>
    </StyledForm>
  );
}
