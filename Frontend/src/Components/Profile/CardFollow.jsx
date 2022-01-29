import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Card } from "./styledCardProfile"

export const CardFollow = ({ fullname, profile, email, id }) => {
    const myProfile = useSelector((state) => state.myProfileData)
    return (
        <>
            <Card key={id}>
                <p className='name' key={id}>
                    <img className='user-img' src={profile} alt={fullname} />
                    <Link to={`/${myProfile.data[0].id === id ? 'myprofile' : `profile/${id}`}`} >
                        {fullname}
                        <span className='email'>{email}</span>
                        <span className='span-link' />
                    </Link>
                </p>
            </Card>
        </>
    )
}


