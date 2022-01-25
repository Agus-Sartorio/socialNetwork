import { Link } from "react-router-dom";
import { StyledCardSuggestions } from "./StyledCardSuggestion";

const CardSuggestions = ({ fullname, id, profile,email }) => {
    return (
        <StyledCardSuggestions>
            <div className="container-card">
                <div className="img-name">
                <Link to={`/profile/${id}`}><img className="image" src={profile} alt={fullname}></img></Link>
                <div className="name">
                    <Link to={`/profile/${id}`} className="Link"><h3>{fullname}</h3></Link>
                    <p>{email}</p>
                </div>
                </div>
                <button className="btn">Seguir</button>
            </div>
        </StyledCardSuggestions>
    )
}

export default CardSuggestions;