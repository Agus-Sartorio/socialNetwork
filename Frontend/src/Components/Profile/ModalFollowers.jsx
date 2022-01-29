import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearStateFollowsUser, getFollowUserById } from "../../actions";
import { tokenUsuario } from "../../actions/actionTypes";
import { cohorte, sortBy } from "../../auxiliares/constantes";
import { Select } from "../Select/Select";
import { CardFollow } from "./CardFollow";
import { BtnModal, Button, StyledModal } from "./styledCardProfile";


export function ModalFollowers({ followUser, profile, myProfile }) {
    const [isPopOpen, setIsPosOpen] = useState(false)
    const idToFollow = { "followMe": profile.id }
    const validation = followUser.followers.map(e => e.id).includes(myProfile.data[0].id)
    const dispatch = useDispatch()
    async function followUnFollow() {
        await axios.put(`${process.env.REACT_APP_PUERTO}usuarios/follow/`, idToFollow, tokenUsuario())
        dispatch(clearStateFollowsUser())
        dispatch(getFollowUserById(profile.id))
    }

    return (
        <div>
            <StyledModal
                show={isPopOpen}
                handleClose={() => setIsPosOpen(false)}
            >

                <div style={{ color: "black" }}>
                    <Select data={cohorte} />
                    <Select data={sortBy} />
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
            <BtnModal>
                <span style={{
                    display: 'flex',
                    cursor: 'pointer'
                }}
                    onClick={() => setIsPosOpen(!isPopOpen)}
                >
                    {followUser.followers.length}seguidores
                </span>
                <Button>
                    <div>
                        {validation ? <button onClick={followUnFollow} className="unfollow">dejar de seguir</button> : <button onClick={followUnFollow} className='follow'>seguir</button>}
                    </div>
                </Button>
            </BtnModal>
        </div>
    );
}