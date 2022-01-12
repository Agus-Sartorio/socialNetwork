import { Usuarios } from '../styled-components';
import axios from 'axios';
import { useEffect } from 'react';

const Users = () => {
	// useEffect(() => {
	//     (async function (){
	//         await axios.Axios(`${process.env.REACT_APP_BACKEND}usuario/all`)
	//     })
	//     return () => {

	//     }
	// }, [input])
    
	let users = [];

    (async function() {
		users = await axios(`${import.meta.env.VITE_BACKEND}usuario/all`);
		console.log(users)
	})();
	return (
		<Usuarios>
            <h1>Holaaa</h1>
			<div className="views">
                {
                    users.map(e=><div className='usuario'>
                            <img src={e.profile} alt="e.name" width='100'/>
                            <h2>{e.name}</h2>
                    </div>)
                }
                </div>
		</Usuarios>
	);
};

export default Users;
