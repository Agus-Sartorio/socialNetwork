import { useUserAuth } from "../Context/UserContext"
import React, { useState } from "react"
import { Input, StyledPost } from "./styles"
import { useDispatch } from "react-redux"
import { CreatePost } from "../../actions"



export default function CrearPost () {

    const {user} = useUserAuth()
    const [input, setInput] = useState({
        description:""
    })
    const [file, setFile] = useState(null)

    const dispatch = useDispatch();

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }
    function submitHandler (e) {
        e.preventDefault()
        dispatch(CreatePost(input));
        alert("se creo el post")
        setInput({
            description:""
        })
        window.location.reload();
    }
    return (
        
        <form onSubmit={submitHandler}>
        <StyledPost>
            <img src={user.photoURL} alt="" width={"20px"} height={"20px"} />
            <Input placeholder={"En que estas pensando " + user.displayName + "?"}
            type= 'text'
            name='description'
            value={input.description}
            onChange={handleChange}
            />
        </StyledPost>
        <input type="file"
        id="file"
        accept=".png, .jpeg, .jpg"
        onChange={(e)=> setFile(e.target.files[0])}/>
        <button type='submit'>Compartir</button>

        </form>
    )
}