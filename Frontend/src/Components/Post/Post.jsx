import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { StyledPost } from "./styles";
import Experience from '../Icons/Experience'
import Channels from '../Icons/Channels'
import Share from '../Icons/Share'

export default function Post({ p }) {
    return (
        <StyledPost>
            <Link className='post__link' to={`/profile/${p.autorData[0]?.id}`}>
                <img className='post__avatar' src={p.autorData[0]?.profile} alt={p.autorData[0]?.fullname} />
            </Link>
            <div className='post__info'>
                <header className='post__header'>
                    <p className='post__fullname'>{p.autorData[0]?.fullname}</p>
                    <p className='post__date'>{format(p.createdAt)}</p>
                </header>
                <p className='post__description'>{p.description}</p>
                <footer className='post__footer'>
                    <button className='post__like'><Share />Compartir</button>
                    <button className='post__like'><Channels />Comentar</button>
                    <button className='post__like'><Experience />Me Gusta</button>
                </footer>
            </div>
        </StyledPost>
    )
}