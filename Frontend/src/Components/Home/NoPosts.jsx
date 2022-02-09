import React from "react";
import { Link } from "react-router-dom";
import { Welcome } from "./styles";

export default function NoPosts () {
    return(
        <Welcome>
        <div>
            No tienes publicaciones  animate a crear tu primer publicacion <Link to='/home'><p>aqui</p> </Link>
        </div>
        </Welcome>
    )
}