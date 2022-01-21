import { Link } from "react-router-dom";
import { StyledCardSuggestions } from "./StyledCardSuggestion";

const CardSuggestions = ({ name, id, profile,email }) => {
    return (
        <StyledCardSuggestions>
            <div className="container-card">
                <div className="img-name">
                <Link to={`/detail/${id}`}><img className="image" src={profile} alt={name}></img></Link>
                <div className="name">
                    <Link to={`/detail/${id}`} className="Link"><h3>{name}</h3></Link>
                    <p>{email}</p>
                </div>
                </div>
                <button className="btn">Seguir</button>
            </div>
        </StyledCardSuggestions>
    )
}

export default CardSuggestions;