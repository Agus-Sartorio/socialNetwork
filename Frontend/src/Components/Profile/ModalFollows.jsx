import { useState } from "react"
import { cohorte, sortBy } from "../../auxiliares/constantes"
import { Select } from "../Select/Select"
import { CardFollow } from "./CardFollow"
import { StyledModal } from "./styledCardProfile"
export const ModalFollows = ({ followUser }) => {
    const [isPopOpen2, setIsPosOpen2] = useState(false)
    return (
        <>
            <span style={{
                display: 'flex',
                cursor: 'pointer'
            }}
                onClick={() => setIsPosOpen2(!isPopOpen2)}
            >
                {followUser.follows.length}siguiendo
            </span>
            <StyledModal
                show={isPopOpen2}
                handleClose={() => setIsPosOpen2(false)}
            >
                <div style={{ color: "black" }}>
                    <Select data={cohorte} />
                    <Select data={sortBy} />
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
        </>
    )
}