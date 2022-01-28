import { useState } from "react";
import { CardFollow } from "./CardFollow";
import { StyledModal } from "./styledCardProfile";


function Modal({ followUser }) {
    const [isPopOpen, setIsPosOpen] = useState(false)
    const [isPopOpen2, setIsPosOpen2] = useState(false)

    return (
        <div>
                <span
                    style={{
                        display: 'flex',
                        margin: '5rem',
                        cursor: 'pointer'
                    }}
                    onClick={() => setIsPosOpen(!isPopOpen)}
                >
                    {followUser.follows.length} siguiendo
                </span>
                <StyledModal
                    show={isPopOpen}
                    handleClose={() => setIsPosOpen(false)}
                >
                    <div style={{ color: "black" }}>

                        {followUser.follows ? followUser.follows.map(e => <CardFollow
                            fullname={e.fullname}
                            email={e.email}
                            profile={e.profile}
                            id={e.id}
                            key={e.id}
                          />)
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
                    {followUser.followers.length} seguidores
                </span>
                <StyledModal
                    show={isPopOpen2}
                    handleClose={() => setIsPosOpen2(false)}
                >
                    <div style={{ color: "black" }}>

                    {followUser.followers ? followUser.followers.map(e => <CardFollow
                            fullname={e.fullname}
                            email={e.email}
                            profile={e.profile}
                            id={e.id}
                            key={e.id}
                         />)
                            :
                            <div>cargando</div>}
                    </div>

                </StyledModal>
        </div>
    );
}

export default Modal;