import { Link } from "react-router-dom"
import { Card } from "./StyledMyProfile"

export const CardFollow = ({ fullname, profile, email, id }) => {
    return (
        <Card key={id}>
        <img className='img' src={profile} alt={fullname} />
        <Link to={`/profile/` + id} >
        <p className="name">{fullname}</p>
          <span className='email'>{email}</span>
        </Link>
      </Card>
    )
}