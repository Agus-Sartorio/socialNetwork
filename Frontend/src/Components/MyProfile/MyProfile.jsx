import { useState } from "react";
import { useSelector } from "react-redux";
import { CardFollow } from "./CardFollow";
import { StyledModal } from "./StyledMyProfile";


const MyProfile = ({myProfile}) => {
    const [isPopOpen, setIsPosOpen] = useState(false)
    const [isPopOpen2, setIsPosOpen2] = useState(false)
    const follows = useSelector((state) => state.follows)
    const followers = useSelector((state) => state.followers)
    return (
        <>
        <div>
            <img src={myProfile.data[0].profile} alt='imagen de usuario' />
            <h1>{myProfile.data[0].fullname}</h1>
        </div>
        <div className="App">
        <header className="App-header">
            <span
                style={{
                    display: 'flex',
                    margin: '5rem',
                    cursor: 'pointer'
                }}
                onClick={() => setIsPosOpen(!isPopOpen)}
            >
                {myProfile.data[0].follow.followers.length} seguidores
            </span>
            <StyledModal
                show={isPopOpen}
                handleClose={() => setIsPosOpen(false)}
            >
                <div style={{ color: "black" }}>

                {followers.data ? followers.data.map(e => <CardFollow 
                   fullname={e.fullname}
                   email={e.email}
                   profile={e.profile}
                   id={e.id}
                   key={e.id}/>)
                        :
                        <div>cargando</div>}
             
                </div>

            </StyledModal>

            <span
                style={{
                    display: 'flex',
                    margin: '5rem',
                    cursor: 'pointer'
                }}
                onClick={() => setIsPosOpen2(!isPopOpen2)}
            >
                {myProfile.data[0].follow.follows.length} siguiendo
            </span>
            <StyledModal
                show={isPopOpen2}
                handleClose={() => setIsPosOpen2(false)}
            >
                <div style={{ color: "black" }}>
                   {follows.data ? follows.data.map(e => <CardFollow 
                   fullname={e.fullname}
                   email={e.email}
                   profile={e.profile}
                   id={e.id}
                   key={e.id}/>)
                        :
                        <div>cargando</div>}
            
                </div>
            </StyledModal>
        </header>
    </div>
    </>
    )
}

export default MyProfile;
