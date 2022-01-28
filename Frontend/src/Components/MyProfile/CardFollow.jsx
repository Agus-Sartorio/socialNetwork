import { Link } from "react-router-dom"
import { Card } from "./StyledMyProfile"

export const CardFollow = ({ fullname, profile, email, id }) => {
    return (
        <Card key={id}>
            <Link to={`/profile/` + id} >
                <img className='img' src={profile} alt={fullname} />
                <p className="name">{fullname}</p>
            </Link>
            <span className='email'>{email}</span>
        </Card>
    )
}