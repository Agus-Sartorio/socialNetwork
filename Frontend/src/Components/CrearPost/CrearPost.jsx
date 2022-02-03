import React, { useEffect, useState } from "react"
import { StyledForm } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { CreatePost, getMyPhoto } from "../../actions"
import Upload from '../Icons/Upload'
import { Link } from "react-router-dom"



export default function CrearPost() {

    const dispatch = useDispatch()

    const myPhoto = useSelector((state) => state.myPhoto)

    useEffect(() => {
        dispatch(getMyPhoto())
    }, [dispatch])

    const [input, setInput] = useState({
        description: ""
    })
    const [, setFile] = useState(null)



    function handleChange(e) {
        const isEmpty = /^\s/.test(e.target.value);
        setInput({
            ...input,
            [e.target.name]: isEmpty ? '' : e.target.value,
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
                    <img className='user-img' src={myPhoto ? myPhoto.data?.profile[0] === 'u' ? process.env.REACT_APP_PUERTO + myPhoto.data?.profile : myPhoto.data?.profile : "https://static2.elnortedecastilla.es/www/pre2017/multimedia/noticias/201501/12/media/cortadas/facebook-profile-picture-no-pic-avatar--575x323.jpg"} alt="" width={"20px"} height={"20px"} />
                </Link>
                <textarea
                    className='textarea'
                    placeholder={"¿Qué estas pensando " + myPhoto?.data?.fullname.split(' ')[0] + "?"}
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
            <button className='btn-submit' disabled={input.description ? undefined: true} type='submit'>Compartir</button>
        </StyledForm>
    )
}