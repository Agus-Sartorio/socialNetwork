import { cohorte, sortBy } from "../../auxiliares/constantes"
import { Select } from "../Select/Select"
import { CardFollow } from "./CardFollow"
import { StyledModal } from "./styledCardProfile"
export const ModalFollows = ({ followUser, show, setShow }) => {
    return (
        <StyledModal
            show={show}
            handleClose={() => setShow(false)}
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
    )
}