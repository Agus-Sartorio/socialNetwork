import React from "react";
import CrearExperience from "./CreateExperience";
import Layout from "../Layout/Layout";
import PostsExperiences from "./PostsExperiences";



export default function Experiences () {
    return (
      <Layout>        <div>
           Aca vas a encontrar las experiencias de otros Henry's no estas solo, contactalos!
        </div>

       <CrearExperience/>
       <PostsExperiences/>
       </Layout>

       
      


    )
}