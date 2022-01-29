import { DivSelect, StyledModal } from "./StyledMyProfile";
import { useState } from "react";
import { useSelector } from "react-redux";
import { CardFollow } from "../Profile/CardFollow";
import { Select } from "../Select/Select";
import { cohorte, sortBy } from "../../auxiliares/constantes";

export const ModalFollows = () => {
    const [isPopOpen2, setIsPosOpen2] = useState(false)
    const follows = useSelector((state) => state.follows)
    return (
        <>
            <span style={{
                display: 'flex',
                cursor: 'pointer'
            }}
                onClick={() => setIsPosOpen2(!isPopOpen2)}
            >
                {follows.data?.length} siguiendo
            </span>
            <StyledModal
                show={isPopOpen2}
                handleClose={() => setIsPosOpen2(false)}
            >
                <div style={{ color: "black" }}>
                    <DivSelect>
                        <Select data={cohorte} />
                        <Select data={sortBy} />
                    </DivSelect>
                    {follows.data ? follows.data.map(e => <CardFollow
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