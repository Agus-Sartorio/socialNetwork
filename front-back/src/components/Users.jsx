import { Usuarios } from '../styled-components';
import { useEffect } from 'react';
import { useGlobal } from '../hooks/useGlobal';
import User from './User';

const Users = () => {
    
	const {users, getUsers} = useGlobal()
	
	useEffect(() => {
		getUsers()
	}, [])

	return (
		<Usuarios>
			<div className="views">
                {
                    users.map(e=><User 
						key={e._id}
						name={e.name}
						lastname={e.lastname}
						profile={e.profile}

					/>)
                }
                </div>
		</Usuarios>
	);
};

export default Users;
