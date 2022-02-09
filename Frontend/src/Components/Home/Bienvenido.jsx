import React from "react";
import { Link } from "react-router-dom";
import { Welcome } from "./styles";

export default function Bienvenido () {
    return(
        <Welcome>
        <div>
            No sigues a nadie en la red, aqui tenemos <Link to='/suggestions'><p>sugerencias</p> </Link> para ti
        </div>
        </Welcome>
    )
}