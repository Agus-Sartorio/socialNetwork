import { Usuario } from '../styled-components';

const User = ({name, lastname, profile}) => {
    console.log(profile)
	return (
		<Usuario>
			<img src={profile} alt="e.name" />
			<h2>{name +' '+ lastname}</h2>
		</Usuario>
	);
};

export default User;
