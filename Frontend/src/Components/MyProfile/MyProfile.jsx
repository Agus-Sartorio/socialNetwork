

const MyProfile = ({myProfile}) => {
    return (
        <div>
            <img src={myProfile.data[0].profile} alt='imagen de usuario' />
            <h1>{myProfile.data[0].fullname}</h1>
        </div>
    )
}

export default MyProfile;
