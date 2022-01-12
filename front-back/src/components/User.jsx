import { Usuario } from '../styled-components';

const User = ({name, lastname, profile}) => {
	return (
		<Usuario>
			<img src={profile} alt="e.name" width="100" />
			<h2>{name +' '+ lastname}</h2>
		</Usuario>
	);
};

export default User;
