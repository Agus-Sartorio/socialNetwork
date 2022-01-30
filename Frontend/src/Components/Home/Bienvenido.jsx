import React from "react";
import { Link } from "react-router-dom";

export default function Bienvenido () {
    return(
        <div>
            No sigues a nadie en la red, aqui tenemos <Link to='/suggestions'>sugerencias </Link> para ti
        </div>
    )
}