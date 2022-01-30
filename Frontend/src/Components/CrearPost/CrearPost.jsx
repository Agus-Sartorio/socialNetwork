import { useUserAuth } from "../Context/UserContext"
import React, { useState } from "react"
import { StyledForm } from "./styles"
import { useDispatch } from "react-redux"
import { CreatePost } from "../../actions"
import Upload from '../Icons/Upload'
import { Link } from "react-router-dom"



export default function CrearPost() {

    const { user } = useUserAuth()
    const [input, setInput] = useState({
        description: ""
    })
    const [, setFile] = useState(null)

    const dispatch = useDispatch();

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }
    function submitHandler(e) {
        e.preventDefault()
        dispatch(CreatePost(input));
        alert("se creo el post")
        setInput({
            description: ""
        })
        window.location.reload();
    }
    return (

        <StyledForm className={input.description ? 'expanded' : undefined} onSubmit={submitHandler}>
            <div className='img-post'>
                <Link to={'/myprofile'}>
                <img className='user-img' src={user.photoURL} alt="" width={"20px"} height={"20px"} />
                </Link>
                <textarea
                    className='textarea'
                    placeholder={"¿Qué estas pensando " + user?.displayName?.split(' ')[0] + "?"}
                    name='description'
                    value={input.description}
                    onChange={handleChange}
                />
            </div>
            <div className='file-btn'>
                <input
                    className='input-file'
                    type="file"
                    id="file"
                    accept=".png, .jpeg, .jpg"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button className='btn'><Upload /></button>
            </div>
            <button className='btn-submit' type='submit'>Compartir</button>
        </StyledForm>
    )
}