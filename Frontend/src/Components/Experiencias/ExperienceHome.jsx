import React from "react";
import CrearExperience from "./CreateExperience";
import Layout from "../Layout/Layout";
import PostsExperiences from "./PostsExperiences";
import { filterByTags } from "../../actions";
import { useDispatch } from "react-redux";

export default function Experiences() {
  const dispatch = useDispatch()
  function handleFilterTags (e) {
    e.preventDefault()
    dispatch(filterByTags(e.target.value))

  }
  return (
    <Layout>
      {" "}
      <div>
        Aca vas a encontrar las experiencias de otros Henry's no estas solo,
        contactalos!
      </div>
      <select onChange={(e)=> handleFilterTags(e)}>
        <option value='Todos'>Todos</option>
        <option value="#M1">#M1</option>
        <option value="#M2">#M2</option>
        <option value="#M3">#M3</option>
        <option value="#M4">#M4</option>
        <option value="#ProyectoIndividual">#ProyectoIndividual</option>
        <option value="#ProyectoGrupal">#ProyectoGrupal</option>
      </select>
      <CrearExperience />
      <PostsExperiences />
    </Layout>
  );
}
