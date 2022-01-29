import { CardFollow } from "./CardFollow";
import { DivSelect, StyledModal } from "./StyledMyProfile";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Select } from "../Select/Select";
import { cohorte, sortBy } from "../../auxiliares/constantes";
export const ModalMyFollowers = () => {
    const [isPopOpen, setIsPosOpen] = useState(false)

    const followers = useSelector((state) => state.followers)
    return (
        <>
            <span style={{
                display: 'flex',
                cursor: 'pointer'
            }}
                onClick={() => setIsPosOpen(!isPopOpen)}
            >
                {followers.data?.length} seguidores
            </span>
            <StyledModal
                show={isPopOpen}
                handleClose={() => setIsPosOpen(false)}
            >
                <div style={{ color: "black" }}>
                    <DivSelect>
                        <Select data={cohorte} />
                        <Select data={sortBy} />
                    </DivSelect>
                    {followers.data ? followers.data.map(e => <CardFollow
                        fullname={e.fullname}
                        email={e.email}
                        profile={e.profile}
                        id={e.id}
                        key={e.id} />)
                        :
                        <div>no hay usuarios en esta lista</div>}
                </div>
            </StyledModal>
        </>
    )
}