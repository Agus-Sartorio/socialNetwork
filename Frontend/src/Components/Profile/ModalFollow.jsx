import { cohorte, sortBy } from "../../auxiliares/constantes";
import { Select } from "../Select/Select";
import { CardFollow } from "./CardFollow";
import { StyledModal } from "./styledCardProfile";
export function ModalFollow ({ followUser, show, setShow }) {
    return (
        <StyledModal
            show={show}
            handleClose={() => setShow(false)}
        >
            <div style={{ color: "black" }}>
                <Select data={sortBy} />
                {followUser ? followUser.map(e => <CardFollow
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
    );
}