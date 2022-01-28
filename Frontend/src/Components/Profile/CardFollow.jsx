import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Card } from "./styledCardProfile"

export const CardFollow = ({ fullname, profile, email, id }) => {
    const myProfile = useSelector((state)=>state.myProfileData)
    return (
        <>
   
        <Card key={id}>
            <Link to={`/${myProfile.data[0].id===id?'myprofile':`profile/${id}`}`} >
                <img className='img' src={profile} alt={fullname} />
                <p className="name">{fullname}</p>
            </Link>
            <span className='email'>{email}</span>
         
        </Card>
        </>
    )
}