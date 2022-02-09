import React from "react";
import { Link } from "react-router-dom";
import { Welcome } from "./styles";

export default function FriendNoPosts () {
    return(
        <Welcome>
        <div>
            Este usuario no tiene publicaciones
        </div>
        </Welcome>
    )
}