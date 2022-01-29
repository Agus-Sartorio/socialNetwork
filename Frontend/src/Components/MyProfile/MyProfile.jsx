import { ModalMyFollowers } from "./ModalMyFollowers";
import { ModalFollows } from "./ModalMyFollows";
import { DivModal } from "./StyledMyProfile";

const MyProfile = ({ myProfile }) => {

    return (
        <>
            <div>
                <img src={myProfile.data[0].profile} alt={myProfile.data[0].fullname} />
                <h1>{myProfile.data[0].fullname}</h1>
                <DivModal>
                    <ModalFollows />
                    <ModalMyFollowers />
                </DivModal>
            </div>

        </>
    )
}

export default MyProfile;
