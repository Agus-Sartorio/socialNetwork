import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { tokenUsuario } from "../../actions/actionTypes";
import { StyledCardSuggestions } from "./StyledCardSuggestion";
import Follow from '../Icons/Follow'
import DefaultUser from '../Icons/DefaultUser'

const CardSuggestions = ({ fullname, id, profile, email }) => {

    const [button, setButton] = useState(false);

    const idToFollow = { "followMe": id }

    async function followUnFollow() {
        await axios.put(`${process.env.REACT_APP_PUERTO}usuarios/follow/`, idToFollow, tokenUsuario())
        setButton(true)
    }

    return (
        <StyledCardSuggestions className='card'>
            {profile.startsWith('https://avatars.') ?
                <img className="card__image" src={profile} alt={fullname} /> :
                <DefaultUser />
            }
            <h3 className='card__name'>
                <Link to={`/profile/${id}`} className="Link">
                    {fullname}
                    <span className='card__span-link'></span>
                </Link>
            </h3>
            <p className='card__email'>{email}</p>
            {button === false ?
                <button onClick={followUnFollow} className="card__btn"><Follow /> Seguir</button> :
                <p className='card__follow'>ahora sigues a {fullname}</p>
            }
        </StyledCardSuggestions>
    )
}

export default CardSuggestions;